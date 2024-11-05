from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated

from .models import Province, City, Address
from .serializers import ProvinceSerializer, CitySerializer, AddressSerializer



@login_required
@api_view(['GET'])
def get_provinces(request):
    provinces = Province.objects.all()
    serializer_province = ProvinceSerializer(provinces, many=True)
    return Response(serializer_province.data, status=status.HTTP_200_OK)



@login_required
@api_view(['GET'])
def get_cities_by_id(request, province_id):
    cities = City.objects.filter(province_id=province_id)
    serializer_cities = CitySerializer(cities, many=True)
    return Response(serializer_cities.data, status=status.HTTP_200_OK)


class AddressViewSet(ModelViewSet):
    serializer_class= AddressSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Address.objects\
            .select_related('user','city')\
            .filter(user= self.request.user)
