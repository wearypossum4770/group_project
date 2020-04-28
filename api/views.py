from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,    
    UpdateAPIView,
    )
from users.models import Profile, User
from blog.models import Post
from api.serializers import (
    ApprenticeSerializer,
    ApprenticeSupervisorSerializer,
    ProfileSerializer,
)

