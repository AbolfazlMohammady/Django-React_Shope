from rest_framework import serializers
from djoser.serializers import \
                    UserCreateSerializer as BaseUserCreateSerializer ,\
                    UserSerializer as BaseUserSerializer

from . import models
                    
#_____________User_____________
class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'phone', 'email', 'first_name', 'last_name', 'password']


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'first_name', 'last_name', 'phone','email']



class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Province
        fields = ['id', 'name']



class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.City
        fields = ['id', 'name', 'province']



class AddressSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only= True)
    class Meta:
        model = models.Address
        fields = ('user', 'city', 'description', 'postal_code', )
        read_only_fields= ['user']
        
    def create(self, validated_data):
        validated_data['user']= self.context['request'].user
        return super().create(validated_data)