from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
# from django.contrib.auth.views  import views as auth_views
from django.contrib.auth.views import (
    LoginView,
    LogoutView,
    PasswordResetView,
    PasswordResetConfirmView,
    PasswordResetCompleteView, 
    PasswordResetDoneView,
    PasswordChangeDoneView,
    )
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
    )
from users.views import profile, register


urlpatterns = [
    path('', include('blog.urls')),
    path('chat/', include("user_chats.urls")),
    path('admin/', admin.site.urls),
    path('profile/', profile, name="profile"),
    path('register/', register, name="register"),
    path('login/', LoginView.as_view(
        template_name='users/login.html'), name='login'),
    path('logout/', LogoutView.as_view(
        template_name='users/logout.html'), name='logout'),
    ######## RESET PASSWORD #######
    path('password-reset/', PasswordResetView.as_view(
             template_name='users/password_reset.html'), name='password_reset'),
    path('password-reset/done/', PasswordResetDoneView.as_view(
             template_name='users/password_reset_done.html'), name='password_reset_done'),
    path('password-reset-complete/',PasswordResetCompleteView.as_view(
             template_name='users/password_reset_complete.html' ), name='password_reset_complete'),    
    path('password-reset-confirm/<uidb64>/<token>/',PasswordResetConfirmView.as_view(
             template_name='users/password_reset_confirm.html'), name='password_reset_confirm'),
    ######## REST PATHWAYS #######
    path('blog-api/', include('blog.api.urls'), name='blog-api'),
    path('', include('users.api.urls'), name='user-api'),
    ######## SIMPLE JWT REST PATHWAYS #######
    # path('api/token/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    ######## JWT REST PATHWAYS #######
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verify/', verify_jwt_token),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
                          
                          
                          
                          
                          
                          
                          ''' 
                          from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
# from django.contrib.auth.views  import views as auth_views
from django.contrib.auth.views import (
    LoginView,
    LogoutView,
    PasswordResetView,
    PasswordResetConfirmView,
    PasswordResetCompleteView, 
    PasswordResetDoneView,
    PasswordChangeDoneView,
    )
from django.urls import path, include
#from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)
#from rest_framework_jwt.views import (obtain_jwt_token,refresh_jwt_token,verify_jwt_token,    )
from users.views import profile, register


urlpatterns = [
    path('', include('blog.urls')),
    path('chat/', include("user_chats.urls")),
    path('admin/', admin.site.urls),
    path('profile/', profile, name="profile"),
    path('register/', register, name="register"),
    path('login/', LoginView.as_view(
        template_name='users/login.html'), name='login'),
    path('logout/', LogoutView.as_view(
        template_name='users/logout.html'), name='logout'),
    ######## RESET PASSWORD #######
    path('password-reset/', PasswordResetView.as_view(
             template_name='users/password_reset.html'), name='password_reset'),
    path('password-reset/done/', PasswordResetDoneView.as_view(
             template_name='users/password_reset_done.html'), name='password_reset_done'),
    path('password-reset-complete/',PasswordResetCompleteView.as_view(
             template_name='users/password_reset_complete.html' ), name='password_reset_complete'),    
    path('password-reset-confirm/<uidb64>/<token>/',PasswordResetConfirmView.as_view(
             template_name='users/password_reset_confirm.html'), name='password_reset_confirm'),
    ######## REST PATHWAYS #######
    path('api/blog/', include('blog.api.urls'), name='blog-api'),
    path('api/user/', include('users.api.urls'), name='user-api'),
    
    path('api/auth/', include('knowx.urls')),
    
    ######## SIMPLE JWT REST PATHWAYS #######
#    path('api/token/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
 #   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    ######## JWT REST PATHWAYS #######
  #  path('api-token-auth/', obtain_jwt_token),
    #path('api-token-refresh/', refresh_jwt_token),
   # path('api-token-verify/', verify_jwt_token),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

                          '''
