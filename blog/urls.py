from django.urls import(
    path,
    include,
)
from rest_framework.routers import DefaultRouter
from .views import (
    about,
    teapot,
    home,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView,
)

urlpatterns = [
    path('', home, name='blog-home'),
    path('418/', teapot, name='blog-teapot'),
    path('about/', about, name='blog-about'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete', PostDeleteView.as_view(), name='post-delete'),

]
