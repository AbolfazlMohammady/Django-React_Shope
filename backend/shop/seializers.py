from rest_framework import serializers

from . import models



class CollectionSeializer(serializers.ModelSerializer):
    class Meta:
        model = models.Collection
        fields= ['id', 'name']



class CategorySeializer(serializers.ModelSerializer):
    collection= CollectionSeializer(read_only = True)

    class Meta:
        model = models.Category
        fields= ['id', 'name', 'collection']



class BrandSeializer(serializers.ModelSerializer):
    class Meta:
        model = models.Brand
        fields= ['id', 'name', 'logo']



class ProductSeializer(serializers.ModelSerializer):
    category= CategorySeializer(read_only = True)
    brand= BrandSeializer(read_only = True)

    class Meta:
        model = models.Product
        fields= ('name', 'description', 'price', 'image', 'created_at', 'update_at', 'category', 'brand', )