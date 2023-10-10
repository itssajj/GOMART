from django.conf import settings
from django.conf.urls.static import static

"""
URL configuration for gomartnow project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from gomartapp.views import Product_list,UserCreate,UserLogin,get_user_name ,get_cart_data ,CreateProfile
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/products/", Product_list, name="product-list"),
    path('api/register/', UserCreate.as_view(), name='user-create'),
    path('api/login/', UserLogin.as_view(), name='user-login'),
    path('api/get_user_name/', get_user_name, name='get_user_name'),
      path('api/get-cart-data/',get_cart_data, name='get_cart_data'),
 path('api/create-profile/', CreateProfile.as_view(), name='create-profile'),  ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
