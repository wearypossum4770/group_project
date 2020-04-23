"""
Django settings for django_project project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

## https://florimondmanca.github.io/djangorestframework-api-key/
## https://github.com/RealmTeam/django-rest-framework-social-oauth2
## http://james1345.github.io/django-rest-knox/
##  https://github.com/aaronn/django-rest-framework-passwordless
## https://django-rest-auth.readthedocs.io/en/latest/installation.html
## https://github.com/sunscrapers/djoser
## https://github.com/ahknight/drf-httpsig
## https://github.com/etoccalino/django-rest-framework-httpsignature
## https://hawkrest.readthedocs.io/en/latest/
## https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#installation 
import os
from datetime import timedelta
##import django_heroku

CSRF_TRUSTED_ORIGINS = ['http://localhost','127.0.0.1','http://localhost:3000','127.0.0.1:3000']
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '9$tfgzgbxbr_b%e^2+txd98!_^0i&4^+ai33v2ey@(7s%4-r!s'
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['http://localhost','127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'crispy_forms',
    'django_extensions',
    ######### MY APPS ##########
    'blog.apps.BlogConfig',
	'users.apps.UsersConfig',
    #'user_chats.apps.UserChatsConfig',
    'django_restframework',
    'corsheaders',
  #  'knox',
    'rest_auth',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_api_key',
    ######### CHANNELS / PUSH NOTIFICATIONS ##########
    'channels', 
    # ######### WORKFLOW ##########
    # 'lbattachment',
    # 'lbworkflow',
    # 'lbadminlte',
    # 'lbutils',
    # 'compressor',
    # 'djangobower',
    # 'el_pagination',
    # 'stronghold',

]

MIDDLEWARE = [
    
    # 'django.middleware.csrf.CsrfViewMiddleware',
    
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    # 'corsheaders.middleware.CorsPostCsrfMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ######### WORKFLOW ##########
    # 'stronghold.middleware.LoginRequiredMiddleware',
]

ROOT_URLCONF = 'django_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_project.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            'TEST': {
            'NAME': os.path.join(BASE_DIR, 'db_test.sqlite3')
        }
    },

}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True
CORS_ORIGIN_ALLOW_ALL = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/


STATIC_URL = '/static/'

# SERVING STATIC FILES FROM CLOUD OR CDN IF USING THIS OPTION RUN f"django-admin collectstatic"
#### STATICFILES_STORAGE = 'myproject.storage.S3Storage'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

LOGIN_REDIRECT_URL = 'blog-home'
LOGIN_URL = 'login'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

#django_heroku.settings(locals())
# ###Instead of sending out real emails the console backend just writes the emails that would be sent to the standard output.###
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

CRISPY_TEMPLATE_PACK = 'bootstrap4'
CRISPY_CLASS_CONVERTERS = {'textinput': "textinput inputtext"}
############ DJANGO REST-FRAMEWORK ############
# API_KEY_CUSTOM_HEADER=None #To use Bearer Header
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        #'knox.auth.TokenAuthentication',
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    )
}
############# DJANGO CHANNELS ############
### couldn't get docker to run for this backend 'channels_redis.core.RedisChannelLayer'
ASGI_APPLICATION = "django_project.routing.application"
REDIS_HOST = 'localhost'
REDIS_PORT = 6379
CHANNEL_LAYERS = {
    'default': {
        # "ENGINE": "channels.layers.InMemoryChannelLayer",
        'BACKEND':  "channels_redis.core.RedisChannelLayer",
        'CONFIG': {
            "hosts": [("localhost", 6379,),],
            "symmetric_encryption_keys": [SECRET_KEY],
            },
    },
}
REDIS_HOST = 'localhost'
REDIS_PORT = 6379

