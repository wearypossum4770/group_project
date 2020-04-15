from rest_framework.serializers import (
    ListSerializer, 
    ModelSerializer,
    )
from blog.models import Post

class PostCreateSerailizer(ModelSerializer):
    class Meta:
        model = Post
        fields=['title','contents','author']

class PosteDeleteSerializer(ModelSerializer):
    class Meta:
        model = Post

class PostDetailSerializer(ModelSerializer):
    class Meta:
        model=Post
        fields='__all__'

class PostListSerializer(ListSerializer):
    class Meta:
        model=Post
        fields=['author','title','contents']

class PostUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields=['title','contents','author']
