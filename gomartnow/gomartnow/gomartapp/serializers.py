from rest_framework import serializers
from .models import Product ,UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','email', 'password']  
        extra_kwargs = {
            'password': {'write_only': True},
        }
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image', 'img1', 'img2', 'gender', 'category', 'brand', 'color','group']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['profile_picture', 'first_name', 'email', 'location']