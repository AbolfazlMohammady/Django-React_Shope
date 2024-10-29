from rest_framework import serializers

from . import models



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
    category= CategorySerializer(read_only = True)
    brand= BrandSeializer(read_only = True)

    class Meta:
        model = models.Product
        fields= ('id','name', 'description', 'price', 'image', 'category', 'brand', )