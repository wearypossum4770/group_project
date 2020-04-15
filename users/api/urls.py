from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserDetailAPIView,
    UserCreateAPIView,
    UserDeleteAPIView,
    UserListAPIView,
    UserUpdateAPIView,
)

app_name='users'

urlpatterns =[
path('',UserListAPIView,name='user-list'),
path('<int:pk>/detail/',UserDetailAPIView.as_view(), name='user-details'),
path('new/',UserCreateAPIView.as_view(),name='user-create'),
path('<int:pk>/update/',UserUpdateAPIView.as_view(),name='user-update'),
path('<int:pk>/delete/',UserDeleteAPIView, name='user-delete'),
]
