from django.db import transaction
from core.models import User 
from rest_framework import serializers


from . import models



class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Discount
        fields= ['id', 'title', 'discount']



class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Collection
        fields= ['id', 'name']



class CategorySerializer(serializers.ModelSerializer):
    collection= CollectionSerializer(read_only = True)

    class Meta:
        model = models.Category
        fields= ['id', 'name', 'collection']



class BrandSeializer(serializers.ModelSerializer):
    class Meta:
        model = models.Brand
        fields= ['id', 'name', 'logo']



class ProductSeializer(serializers.ModelSerializer):
    brand= BrandSeializer(read_only = True)
    discount=  DiscountSerializer(read_only = True)
    category= CategorySerializer(read_only = True)
    unit_price = serializers.SerializerMethodField()

    class Meta:
        model = models.Product
        fields= ('id','name', 'description', 'unit_price', 'discount',  'image', 'category', 'brand',)

    def get_unit_price(self, obj):
        return obj.get_discount_price
    

class CartProductSerializer(serializers.ModelSerializer):
    unit_price = serializers.SerializerMethodField()

    class Meta:
        model = models.Product
        fields = ['name', 'unit_price']


    def get_unit_price(self, obj):
        return obj.get_discount_price
    

class AddCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CartItem
        fields= ['id', 'product', 'quantity']

    def create(self, validated_data):
        cart_pk = self.context['cart_pk']
        product= validated_data.get('product')
        quantity= validated_data.get('quantity')

        try:
            cart_item = models.CartItem.objects.get(cart_id=cart_pk, product_id= product.id)
            cart_item.quantity += quantity
            cart_item.save()
        except models.CartItem.DoesNotExist:
            cart_item = models.CartItem.objects.create(cart_id=cart_pk, **validated_data)

        self.instance = cart_item
        return cart_item
    

class UpdateCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CartItem
        fields= ['quantity']


class CartItemSerializer(serializers.ModelSerializer):
    product = CartProductSerializer(read_only=True)
    total_cartitem = serializers.SerializerMethodField()

    class Meta:
        model = models.CartItem
        fields= ('cart', 'product', 'quantity', 'total_cartitem',)

    def get_total_cartitem(self, obj):
        return obj.get_unit_price
    


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = models.Cart
        fields = [
            'id',
            'items',
            'total_price'
        ]
        read_only_fields= ['id']

    def get_total_price(self, cart):
        return sum([item.quantity * item.product.get_discount_price for item in cart.items.all()])
    

class OrderUserSeializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone', 'email', 'first_name', 'last_name', )


class OrderItemSerializer(serializers.ModelSerializer):
    product = CartProductSerializer(read_only= True)
    class Meta:
        model = models.OrderItem
        fields = ('order', 'product', 'quantity', 'unit_price', )
    

class OrderSerializer(serializers.ModelSerializer):
    user= OrderUserSeializer(read_only= True)
    item= OrderItemSerializer(many=True, read_only= True)

    class Meta:
        model = models.Order
        fields = ('user', 'status', 'item', 'created_at', )
        read_only_fields= ['status']


class OrderUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ('status',)


class OrderCreateSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    def validate_cart_id(self, cart_id):
        if not models.Cart.objects.filter(id= cart_id).exists():
            raise serializers.ValidationError('کارت ایدی که وارد کرده اید اشتباه هست')
        if models.CartItem.objects.filter(cart_id= cart_id).count() == 0:
            raise serializers.ValidationError('حداقل یک محصول به سبد خرید اضافه کن')
        return cart_id
    
    def save(self, **kwargs):
        with transaction.atomic():
            user_id = self.context['user_id']
            cart_id= self.validated_data['cart_id']
            user= User.objects.get(id=user_id)

            order = models.Order()
            order.user= user
            order.save()

            cart_items= models.CartItem.objects.select_related('product').filter(cart_id= cart_id)

            order_items = [
                models.OrderItem(
                    order= order,
                    product = cart_item.product,
                    quantity = cart_item.quantity,
                    unit_price = cart_item.product.get_discount_price,                    
                ) for cart_item in cart_items
            ]

            models.OrderItem.objects.bulk_create(order_items)
            cart= models.Cart.objects.get(id= cart_id)
            cart.items.all().delete()
            cart.delete()

            return order


class OrderFilterSerializer(serializers.ModelSerializer):
    total_price= serializers.SerializerMethodField(read_only=True)
    item= OrderItemSerializer(many=True)
    class Meta:
        model= models.Order
        fields= [
            'id',
            'item',
            'status',
            'total_price',
            'created_at'
        ]

    def get_total_price(self, order):
        return sum([item.quantity * item.product.get_discount_price for item in order.item.all()])

    