from rest_framework import status
from rest_framework.generics import (
    ListAPIView,

    )
from rest_framework.response import Response
from rest_framework.decorators import api_view
from blog.models import Post
from users.models import Profile 
from .serializers import PostSerializer


# @api_view(['GET',])
# def api_detail_post_view(request, slug):
#     post= Post.objects.get(slug=slug)
#     serializer = PostSerializer(post)
#     return Response(serializer.data)
    # try:
    #     post= Post.objects.get(slug=slug)
    #     serializer = PostSerializer(post)
    #     return Response(serializer.data)
    # except Post.DoesNotExists:
    #     return Response(status.HTTP_404_NOT_FOUND)
    
class PostListAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer = PostSerializer()
    
