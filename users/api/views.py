from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from .serializers import UserCreateSerializer
from ..models import Profile


def home_page(request):
    return Response(request)


class UserCreateUser(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = UserCreateSerializer

#Creating OAuth Authorization... done
# Client:      
# <none>
# ID:          
# 38f49c57-f6a3-4309-bbc6-f883eebd1c8b
# Description: 
# getting started token
# Scope:       
# global
# Token:       
# ba6dd622-0ab5-43f0-b259-c11d776aa338
# Updated at:  
# Thu Apr 16 2020 10:19:44 GMT-0500 (Central Daylight Time) 
# (less than a minute ago)