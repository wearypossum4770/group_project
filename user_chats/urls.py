from django.urls import(
    path,
    include,
)
from .views import chat, chat_room

app_name='user_chats'

urlpatterns=[
    path('', chat, name='user-chats-chats'),
    path('<str:room_name>/', chat_room, name='chat_room'),
]