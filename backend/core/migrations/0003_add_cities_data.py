# Generated by Django 4.2 on 2024-03-17 21:12

from django.db import migrations


cities_sql = open("core/data/cities.sql", encoding="utf8")


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_add_provinces_data'),
    ]

    operations = [
        migrations.RunSQL(cities_sql)
    ]
