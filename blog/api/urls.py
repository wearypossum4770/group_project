from django.urls import path
from blog.api.views import (
    PostListAPIView, 
    PostCreateAPIView,
    PostDetailAPIView,
    PostUpdateAPIView,
    PostDeleteAPIView,
)

app_name='blog'

urlpatterns =[
    # path('<int:id>/', api_detail_post_view, name='detail'),
    path('', PostListAPIView.as_view(), name='blog-api-list'),
    path('new/', PostCreateAPIView.as_view(), name='blog-api-create'),
    path('<int:pk>/', PostDetailAPIView.as_view(), name='blog-api-detail'),
    path('<int:pk>/update/', PostUpdateAPIView.as_view(), name='blog-api-update'),
    path('<int:pk>/delete/', PostDeleteAPIView, name='blog-api-delete'),

]
