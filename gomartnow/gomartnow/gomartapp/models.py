from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group,Permission
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User



    
class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default=' New on gomart')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(upload_to='gomartfiles/static/', blank=True, null=True)  
    img1 = models.ImageField(upload_to='gomartfiles/static/', blank=True, null=True)  
    img2 = models.ImageField(upload_to='gomartfiles/static/', blank=True, null=True)  
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('U', 'Unisex'),
         ('B', 'BOY'),
          ('G', 'GIRL'),
           ('W', 'WATCHES'),

    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='U') 

    CATEGORY_CHOICES = (
        ('B', 'BLACK'),
        ('W', 'WHITE'),
        ('N', 'NEW'),
        ('N', 'NONE'),
        
    )
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='N') 


    COLOR_CHOICES= (
        ('BLACK', 'BLACK'),
        ('WHITE', 'WHITE'),
        ('NEON', 'NEON'),
        ('RED', 'RED'),
        ('BLUE', 'BLUE'),
         ('BROWN', 'BROWN'),
        ('YELLOW', 'YELLOW'),
        ('GREY', 'GREY'),
        ('PINK', 'PINK'),
        ('GREEN', 'GREEN'),
        ('ORANGE', 'ORANGE'),
        ('PURPLE', 'PURPLE'),
        ('N', 'NONE'),
    )
    color = models.CharField(max_length=20, choices=COLOR_CHOICES, default='N') 

    GROUP_CHOICES= (
        ('SHIRT', 'SHIRT'),
        ('TROUSER', 'TROUSER'),
        ('SHORTS', 'SHORTS'),
        ('SNEAKER', 'SNEAKER'),
        ('CAP', 'CAP'),
         ('HOODIE', 'HOODIE'),
        ('TSHIRT', 'TSHIRT'),
        ('JERSEY', 'JERSEY'),
        ('CAP', 'CAP'),
        ('BELT', 'BELT'),
        ('SOCKS', 'SOCKS'),
        ('WATCHES', 'WATCHES'),
        ('BAGS', 'BAGS'),

        ('N', 'NONE'),
    )
    group = models.CharField(max_length=20, choices=GROUP_CHOICES, default='N') 


    BRAND_CHOICES = (
            ('Gucci', 'Gucci'),
            ('Nike', 'Nike'),
            ('Hublot', 'Hublot'),
            ('Northface', 'Northface'),
            ('Ellesse', 'Ellesse'),
            ('Balenciaga', 'Balenciaga'),
            ('vincero', 'vincero'),
            ('Vinchigo', 'Vinchigo'),
            ('Tommy Hilfiger', 'Tommy Hilfiger'),
            ('Jersy', 'Jersy'),
            ('Converse', 'Converse'),
            ('Reebok', 'Reebok'),
            ('Adidas', 'Adidas'),
            ('Puma', 'Puma'),
            ('Drm', 'Drm'),
            ('Keppa', 'Keppa'),
            ('Palace', 'Palace'),
            ('Converse', 'Converse'),
            ('Metalica', 'Metalica'),
            ('Under', 'Under'),


            ('N', 'None')   
    )
    brand = models.CharField(max_length=20, choices=BRAND_CHOICES, default='N') 


    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    first_name = models.CharField(max_length=255, blank=True, default='N')
    email = models.EmailField(blank=True)
    location = models.CharField(max_length=255, blank=True, default='N')

    def __str__(self):
        return self.user.username