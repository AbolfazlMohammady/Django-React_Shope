# Generated by Django 4.2 on 2024-10-27 08:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_add_cities_data'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='city',
        ),
    ]