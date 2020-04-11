from django.urls import path
# from blog.api.views import api_detail_post_view
from blog.api.views import PostListAPIView
app_name='blog'

urlpatterns =[
    # path('<int:id>/', api_detail_post_view, name='detail'),
    path('', PostListAPIView.as_view(), name='list'),

]
