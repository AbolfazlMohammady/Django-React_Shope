from rest_framework import status
from django.db.models import Prefetch
from rest_framework.response import Response
from rest_framework import  mixins,  filters
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet, GenericViewSet, mixins
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from . import models, permissions, serializers, filter, pagination


class CollectionViewSet(mixins.ListModelMixin,
                        GenericViewSet):
    queryset = models.Collection.objects.all()
    serializer_class= serializers.CollectionSerializer
    permission_classes= [permissions.IsAdminOrReadOnly]

    def destroy(self, request, *args, **kwargs):

        if models.Category.objects.filter(collection_id=kwargs['pk']).exists():
            return Response(
                {'error': 'این کالکشن شامل یک یا چند دسته‌بندی است و نمی‌تواند حذف شود.'}, 
                status=status.HTTP_405_METHOD_NOT_ALLOWED
            )
        return super().destroy(request, *args, **kwargs)



class CategoryViewSet(mixins.ListModelMixin,
                      GenericViewSet):
    queryset = models.Category.objects.select_related('collection').all()
    serializer_class = serializers.CategorySerializer
    permission_classes= [permissions.IsAdminOrReadOnly]



class BrandViewSet(mixins.ListModelMixin,
                   GenericViewSet):
    queryset = models.Brand.objects.all()
    serializer_class= serializers.BrandSeializer
    permission_classes= [permissions.IsAdminOrReadOnly]



class ProductViewSet(ModelViewSet):
    queryset = models.Product.objects.select_related('category', 'brand',"category__collection", 'discount').all()
    serializer_class= serializers.ProductSeializer
    permission_classes= [permissions.IsAdminOrReadOnly]
    pagination_class = pagination.DefaultPagination
    filter_backends= [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'category__name']
    ordering_fields = ['name', 'category', 'price', 'update_at']
    filterset_class = filter.ProductFilter
    


class CartItemViewSet(ModelViewSet):
    http_method_names= ['post', 'get', 'patch', 'delete']

    def get_queryset(self):
        cart_pk = self.kwargs['cart_pk']
        return models.CartItem.objects.select_related('product').filter(cart_id = cart_pk)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.AddCartItemSerializer
        elif self.request.method == "PATCH":
            return serializers.UpdateCartItemSerializer
        return serializers.CartItemSerializer

    def get_serializer_context(self):
        return {'cart_pk': self.kwargs['cart_pk']}



class CartViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.DestroyModelMixin,
                   GenericViewSet):
    
    serializer_class= serializers.CartSerializer
    queryset= models.Cart.objects.prefetch_related('items__product').all()
    lookup_value_regex='[0-9a-fA-F]{8}\-?[0-9a-fA-F]{4}\-?[0-9a-fA-F]{4}\-?[0-9a-fA-F]{4}\-?[0-9a-fA-F]{12}'


class OrderViewSet(ModelViewSet):
    http_method_names= ['get','post', 'head', 'options', 'delete']

    def get_permissions(self):
        if self.request.method== ['DELETE']:
            return [IsAdminUser()]        
        return [IsAuthenticated()]

    
    def get_queryset(self):
        queryset= models.Order.objects.prefetch_related(
            Prefetch(
                'item',
                queryset = models.OrderItem.objects.select_related('product')
            )
        ).select_related('user').all()

        if self.request.user.is_staff:
            queryset
        return queryset.filter(user_id= self.request.user)
    

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.OrderCreateSerializer
        # if self.request.method == 'PATCH' and self.request.user.is_staff:
        #     return serializers.OrderUpdateSerializer
        if self.request.user.is_staff:
            return serializers.OrderSerializer
        return serializers.OrderFilterSerializer
    
    def create(self, request, *args, **kwargs):
        order_create = serializers.OrderCreateSerializer(
            data = request.data,
            context= {'user_id': self.request.user.id}
        )
        order_create.is_valid(raise_exception=True)
        order_created= order_create.save()

        serializer = serializers.OrderSerializer(order_created)
        return Response(serializer.data)
    
    def get_serializer_context(self):
        return {'user_id': self.request.user.id}
