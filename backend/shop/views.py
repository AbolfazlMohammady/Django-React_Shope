from rest_framework import status
from rest_framework.response import Response
from django.db.models.aggregates import Count
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import generics, mixins, views, filters
from django_filters.rest_framework import DjangoFilterBackend

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
    queryset = models.Product.objects.select_related('category', 'brand',"category__collection").all()
    serializer_class= serializers.ProductSeializer
    permission_classes= [permissions.IsAdminOrReadOnly]
    pagination_class = pagination.DefaultPagination
    filter_backends= [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'category__name']
    ordering_fields = ['name', 'category', 'price', 'update_at']
    filterset_class = filter.ProductFilter
    
