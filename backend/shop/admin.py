from django.contrib import admin

from . import models 

admin.site.register(models.Collection)
admin.site.register(models.Category)
admin.site.register(models.Brand)
admin.site.register(models.Product)