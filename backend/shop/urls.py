from django.urls import path
from . import views
from .routers import CustomRouter
from rest_framework_nested import routers


router = CustomRouter()
router.register('collection', views.CollectionViewSet, basename= 'collection')
router.register('category', views.CategoryViewSet, basename= 'category')
router.register('brand', views.BrandViewSet, basename= 'brand')
router.register('product', views.ProductViewSet, basename= 'product')
router.register('carts', views.CartViewSet, basename= 'cart')
router.register('orders', views.OrderViewSet, basename= 'order')

cart_item_router= routers.NestedDefaultRouter(router, 'carts', lookup= 'cart')
cart_item_router.register('item', views.CartItemViewSet, basename='cart-item')


urlpatterns = router.urls + cart_item_router.urls

# urlpatterns += [
# ]