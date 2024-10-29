import django_filters
from .models import Product


class ProductFilter(django_filters.FilterSet):
    category_name = django_filters.AllValuesFilter(field_name="category__name")
    collection_name = django_filters.AllValuesFilter(field_name="category__collection__name")
    brand_name = django_filters.AllValuesFilter(field_name="brand__name")
    min_price = django_filters.NumberFilter(field_name='price', lookup_expr='gte')
    max_price = django_filters.NumberFilter(field_name='price', lookup_expr='lte')

    class Meta:
        model = Product
        fields=('category_name', 'collection_name', 'brand_name', 'min_price', 'max_price', )