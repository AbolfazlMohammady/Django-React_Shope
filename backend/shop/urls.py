from django.urls import path
from . import views
from .routers import CustomRouter


router = CustomRouter()
router.register('collection', views.CollectionViewSet, basename= 'collection')
router.register('category', views.CategoryViewSet, basename= 'category')
router.register('brand', views.BrandViewSet, basename= 'brand')
router.register('product', views.ProductViewSet, basename= 'product')



urlpatterns = router.urls

# urlpatterns += [
# ]