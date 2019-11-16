from chatbot_messages.models import chatbot_message
from rest_framework import viewsets, permissions
from .serializers import ChatbotMessageSerializer

# Chatbot message ViewSet
class ChatbotMessageViewSet(viewsets.ModelViewSet):
    queryset = chatbot_message.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ChatbotMessageSerializer