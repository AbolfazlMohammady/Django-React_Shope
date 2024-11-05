from django.db import models
from django.core.validators import MaxValueValidator
from django.conf import settings
from uuid import uuid4


class Discount(models.Model):
    title = models.CharField(max_length=255)
    discount = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.title



class Collection(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='categories')

    def __str__(self):
        return self.name



class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='shop/brand')

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.PositiveSmallIntegerField(validators=[MaxValueValidator(100000000)], default=1000)
    inventory = models.PositiveSmallIntegerField()
    image = models.ImageField(upload_to='shop/product')
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, related_name='products')
    discount = models.ForeignKey(Discount, on_delete=models.CASCADE, related_name='products', blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def get_discount_price(self):
        if self.discount:
            discount_percentage = self.discount.discount
            discount_amount = self.price * (discount_percentage / 100)
            return self.price - discount_amount
        return self.price



class Cart(models.Model):
    id = models.UUIDField(primary_key=True , default=uuid4)
    created_at = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.PROTECT, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.PROTECT , related_name='cart_item')
    quantity = models.SmallIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def get_unit_price(self):
        return self.product.get_discount_price * self.quantity

    def __str__(self):
        return f" Cart id ({self.cart.id})"
    
    class Meta:
        unique_together = [['cart', 'product']]



class Order(models.Model):
    ORDER_STATUS_PAID = 'P'
    ORDER_STATUS_UNPAID = 'U'
    ORDER_STATUS_CANCELED = 'C'

    ORDER_STATUS = [
        (ORDER_STATUS_PAID, 'Paid'),
        (ORDER_STATUS_UNPAID, 'Unpaid'),
        (ORDER_STATUS_CANCELED, 'Canceled'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='orders')
    status = models.CharField(max_length=1, choices=ORDER_STATUS, default=ORDER_STATUS_UNPAID)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'order id: {self.id}'
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.PROTECT, related_name = 'item')
    product = models.ForeignKey(Product, on_delete=models.PROTECT , related_name='order_item')
    quantity = models.PositiveSmallIntegerField(default=1)
    unit_price = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'order id: {self.order.id}'
    
    class Meta:
        unique_together = [['order', 'product']]


     
 