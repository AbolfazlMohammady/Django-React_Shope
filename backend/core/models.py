from django.db import models
from django.urls import reverse
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import BaseUserManager ,AbstractUser



def is_number(value):
    if not value.isdigit():
        raise ValidationError(_("%(value)s عدد نیست"), params={"value": value})



class Province(models.Model):
    name = models.CharField(max_length=255, unique=True,)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("cities-id-list", kwargs={"province_id": self.pk})
    

class City(models.Model):
    province = models.ForeignKey(Province, on_delete=models.CASCADE, related_name="cities")
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name



class CustomUserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError('شماره موبایل باید تنظیم شود')
        
        
        user = self.model(phone= phone, **extra_fields)
        user.set_password(password)  
        user.save(using = self._db)
        return user
    
    def create_superuser(self, phone,  password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('سوپرکاربر باید is_staff=True داشته باشد.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('سوپرکاربر باید is_superuser=True داشته باشد.')

        return self.create_user(phone ,password, **extra_fields)



class User(AbstractUser):
    username=None
    phone = PhoneNumberField(
                        verbose_name=_("شماره موبایل"),
                        unique=True,
                        error_messages={"unique": _("یک کاربر با این شماره موبایل ساخته شده است!")})

    email = models.EmailField(
                        _("ادرس ایمیل"), 
                        unique=True,
                        error_messages={"unique": _("یک کاربر با این ایمیل ساخته شده است!")})


    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return str(self.phone)


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    description = models.CharField(max_length=511)
    postal_code = models.CharField(max_length=10, validators=[MinLengthValidator(10), is_number])

    def __str__(self) -> str:
        return f'{self.city.province.name} {self.city.name}'
