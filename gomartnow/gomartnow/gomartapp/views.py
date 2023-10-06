from django.http import JsonResponse
from rest_framework import serializers
from .models import Product , UserProfile
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import AbstractUser
from .serializers import UserSerializer ,UserProfileSerializer
# from .models import CustomUser
# from django.contrib.auth.models import AbstractUser
from django.db import models 
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
# from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price','image' ,'img1','img2', 'gender','category','brand', 'color','group' ]



def Product_list(request):
    Products = Product.objects.all()
    serializer = ProductSerializer(Products, many=True)
    return JsonResponse(serializer.data, safe=False)

@login_required
def get_user_name(request):
    user = request.user
    return JsonResponse({'username': user.username})
    

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        password = request.data.get('password')
        hashed_password = make_password(password)
        request.data['password'] = hashed_password
        return super().create(request, *args, **kwargs)


class UserLogin(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def add_to_cart(request):
    product_name = request.data.get('product_name')
    
    try:
        # Fetch the first product with the given name
        product = Product.objects.filter(name=product_name).first()
        if not product:
            return JsonResponse({'error': 'Product not found'}, status=404)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

    cart = request.session.get('cart', {})

    if product_name in cart:
        cart[product_name]['quantity'] += 1
    else:
        cart[product_name] = {
            'name': product.name,
            'price': str(product.price),
            'quantity': 1,
        }
    request.session['cart'] = cart
    return JsonResponse({'message': 'Product added to cart successfully'}, status=200)


def get_cart_data(request):
    cart = request.session.get('cart', {})
    return JsonResponse({'cart': cart})

class CreateProfile(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            UserProfile.objects.create(user=user, **serializer.validated_data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)