from django.contrib import admin

from . import models 

admin.site.register(models.Collection)
admin.site.register(models.Category)
admin.site.register(models.Brand)
admin.site.register(models.Product)
admin.site.register(models.Discount)
admin.site.register(models.Cart)
admin.site.register(models.CartItem)
admin.site.register(models.Order)
admin.site.register(models.OrderItem)