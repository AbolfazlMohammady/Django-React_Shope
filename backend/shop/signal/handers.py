import os
from django.dispatch import receiver
from django.db.models.signals import pre_delete

from shop.models import Brand, Product


class RemoveImage:
    def __init__(self, model, name_file, signal_type=pre_delete):
        self.model = model
        self.name_file = name_file
        self.signal_type = signal_type
        self.custom_signal()  

    def custom_signal(self):
        @receiver(self.signal_type, sender=self.model)
        def delete_image_on_delete(sender, instance, **kwargs):

            file_field = getattr(instance, self.name_file, None)
            if file_field and file_field.path and os.path.isfile(file_field.path):
                os.remove(file_field.path)



remove_image = RemoveImage(model=Brand, name_file='logo')
remove_image = RemoveImage(model=Product, name_file='image')
