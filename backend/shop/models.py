
from django.db import models
from django.core.validators import MaxValueValidator


class Collection(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='shop/brand')

    def __str__(self):
        return self.name


# @receiver(pre_delete, sender=Brand)
# def delete_logo_on_delete(sender, instance, **kwargs):
#     print("سیگنال pre_delete فراخوانی شد")
#     if instance.logo:
#         if os.path.isfile(instance.logo.path):
#             os.remove(instance.logo.path)



class Product(models.Model):
    name= models.CharField(max_length=255)
    description= models.TextField()
    price = models.PositiveSmallIntegerField(validators=[MaxValueValidator(100000000)],default=1000)
    inventory= models.PositiveSmallIntegerField()
    image= models.ImageField(upload_to='shop/product')
    created_at= models.DateTimeField(auto_now_add=True)
    update_at= models.DateTimeField(auto_now=True)

    category= models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    brand= models.ForeignKey(Brand, on_delete=models.PROTECT, related_name='products')

    def __str__(self):
        return self.name
    




