from .models import Address
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from . import models


admin.site.register(models.Province)
admin.site.register(models.City)
admin.site.register(models.Address)


class AddressInline(admin.TabularInline):
    model = Address
    fields= ('user', 'city', 'postal_code' )
    extra = 0


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("phone", "email", "first_name", "last_name", "is_staff")
    search_fields = ("phone", "first_name", "last_name", "email")
    inlines = [AddressInline]
    ordering= []
