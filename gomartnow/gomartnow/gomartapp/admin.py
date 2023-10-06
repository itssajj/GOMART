from django.contrib import admin
# from .models import CustomUser



from gomartapp.models import Product

from gomartapp.models import UserProfile

# Register your models here.

admin.site.register(Product)
admin.site.register(UserProfile)

# admin.site.register(CustomUser)
