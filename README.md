# Reflection Chatbot _ECE496 2019-2020_ 

This project is to create a chatbot where it "chats" with the user through text to guide the user to reflect on their __behaviour__, particularly whether their actions match the __values__ [listed here on page 99](https://www.dropbox.com/s/hcczr2c5to8j29o/Motivational-Interviewing-Third-Edition-3rd-Edition-EBOOK5K-B00A5YPDMG.pdf?dl=0) they think are important to them.


This chatbot is using the framework rasa. [Rasa home page](https://rasa.com/). This [github project](https://github.com/JustinaPetr/Weatherbot_Tutorial/tree/master/Full_Code_Latest).


To run the django server (while in .../frontend/ReflectChatbot) This lets you run the rest calls:
	python manage.py runserver

From the root, this starts the react server. You can view the site by typing in http://localhost:8000/ into your browser:
	npm run dev

To run rasa chatbot:
	In one terminal:
		rasa run actions
	In another terminal:
		rasa train
		rasa shell
		For rest calls (instead of rasa shell):
			rasa run -m models --enable-api --cors "*" --debug