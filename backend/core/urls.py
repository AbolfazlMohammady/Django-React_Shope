from django.urls import path
from .views import  get_provinces, get_cities_by_id, AddressViewSet
from .routers import CustomRouter


router = CustomRouter()
router.register('address', AddressViewSet, basename= 'address')
router.add_custom_root('provinces', get_provinces, 'provinces-list')


urlpatterns = router.urls

urlpatterns += [
    path('cities/<province_id>/', get_cities_by_id, name="cities-id-list"),
]