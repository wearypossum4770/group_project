from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, request
from rest_framework.filters import(
    SearchFilter,
    OrderingFilter
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    UpdateAPIView,
    get_object_or_404,
)
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework_api_key.permissions import HasAPIKey
from blog.models import User
from users.models import Profile
from .permissions import IsOwnerOrReadOnly
from .serializers import (
    RegistrationListSerializer,
    RegistrationCreateSerailizer,
    RegistrationUpdateSerializer,
    RegistrationDeleteSerializer,
    RegistrationDetailSerializer,
)

# f"Authorization: Api-Key {CLIENT_API_KEY}""


class UserCreateAPIView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = RegistrationCreateSerailizer
    permission_classes = IsAuthenticated, IsAdminUser, IsOwnerOrReadOnly

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = RegistrationDetailSerializer
    permission_classes = IsAuthenticated, IsAdminUser
    filter_backends = [OrderingFilter,SearchFilter, DjangoFilterBackend]
    search_fields = ['first_name', 'last_name',
                     'username', 'mailing_city', 'mailing_state']

    # def get_object(self):
    #     obj = get_object_or_404(self.get_queryset(), pk=self.kwargs["pk"])
    #     self.has_permissions(self, self.request, self.view)
    #     self.check_object_permissions(self.request, obj)
    #     return obj


class UserListAPIView(RegistrationListSerializer):
    queryset = Profile.objects.all()
    serializer_class = ListAPIView
    permission_classes = AllowAny
    filter_backends = [OrderingFilter,SearchFilter, DjangoFilterBackend]
    search_fields = ['first_name', 'last_name',
                     'username', 'mailing_city', 'mailing_state']


class UserUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = RegistrationUpdateSerializer
    permission_classes = IsAdminUser, IsAuthenticated

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class UserDeleteAPIView(DestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = RegistrationDeleteSerializer
    lookup_field = 'slug'
    permission_class = IsAdminUser

    def destory(self, request, pk=None):
        pass
