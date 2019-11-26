from rest_framework import serializers
from chatbot_messages.models import chatbot_message

# message serializer
class ChatbotMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = chatbot_message
        fields = '__all__'