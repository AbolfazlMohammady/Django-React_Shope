# Generated by Django 4.2 on 2024-03-17 20:20

from django.db import migrations


provinces_sql = open("core/data/provinces.sql", encoding="utf8")


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RunSQL(provinces_sql)
    ]