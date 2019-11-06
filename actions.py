# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message("Hello World!")
#
#         return []

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from rasa_sdk import Action
from rasa_sdk.events import SlotSet

from nltk.corpus import stopwords
import string 


def getListString(givenList):
	if len(givenList) == 0:
		return "\n There are no values in the value list\n"
	text = "The values are " + ", ".join(givenList);	
	return text;


class ActionUtterGreet(Action):
	def name(self):
		return 'say_greet'


	def initializeUserInformation (self, userName):
		userInfo = {}
		userInfo["user_values"] = []
		userInfo["actions"] = []
		userInfo["value_to_actions"] = {}
		userInfo["current_value"] = None 
		return userInfo

	def run(self, dispatcher, tracker, domain):
		response = "Hi! Welcome the Reflection Chatbot app. My name is Idunn. Which value can I help you focus today?"
		dispatcher.utter_message(response);

		user_info = self.initializeUserInformation("Random User")

		stringToSay = getListString(user_info["user_values"])
		dispatcher.utter_message(stringToSay);

		return [SlotSet('user_info', user_info)]




class ActionReportValue(Action):
	def name(self):
		return 'report_value'
	def run(self, dispatcher, tracker, domain):
		value = tracker.get_slot('value_type')

		user_info = tracker.get_slot('user_info')
		user_values = user_info['user_values']	
		user_values.append(value)
		user_info["user_values"] = user_values
		user_info["current_value"] = value;

		stringToSay = getListString(user_info["user_values"])
		dispatcher.utter_message(stringToSay);

		resonpse = "The value you chose to reflect on is {}.".format(value)
		dispatcher.utter_message(resonpse)
		return [SlotSet('value_type',value), SlotSet('user_info',user_info)]


class ActionReportBehaviour(Action):
	def name(self):
		return 'report_behaviour'
	def run(self, dispatcher, tracker, domain):
		value = tracker.get_slot('value_type')
		user_info = tracker.get_slot('user_info')
		actions = user_info["actions"]
		value_to_actions = user_info["value_to_actions"]
		

		behaviour = tracker.latest_message['text']
		no_punc = [char for char in behaviour if char not in string.punctuation]
		no_punc = "".join(no_punc)
		clean_behaviour = [word for word in no_punc.split() if word.lower() not in stopwords.words('english')]
		clean_behaviour = ", ".join(clean_behaviour)

		actions.append(clean_behaviour)
		if value not in value_to_actions:
			value_to_actions[value] = []
		value_to_actions[value].append(clean_behaviour)
		user_info["actions"] = actions
		user_info["value_to_actions"] = value_to_actions 


		resonpse = "value: " + value + "\nbehaviour: " + clean_behaviour
					
		dispatcher.utter_message(resonpse)
		return [SlotSet('behaviour', clean_behaviour), SlotSet('user_info',user_info)]

class ActionReportSelfReflct(Action):
	def name(self):
		return 'report_self_reflect'
	def run(self, dispatcher, tracker, domain):
		reflection = tracker.latest_message['text']
		no_punc = [char for char in reflection if char not in string.punctuation]
		no_punc = "".join(no_punc)
		clean_reflection = [word for word in no_punc.split() if word.lower() not in stopwords.words('english')]
		clean_reflection = ", ".join(clean_reflection)

		resonpse = "Relfection: " + clean_reflection
		dispatcher.utter_message(resonpse)
		return [SlotSet('self_refl_behvr_value', clean_reflection)]


class ActionAskOrderValues(Action):
	def name(self):
		return 'ask_order_values'

	def run(self, dispatcher, tracker, domain):
		user_info = tracker.get_slot("user_info")
		response = "Your values are ".join(user_info['user_values']) 
		response = response + " . Please list them from most important to least important"
		dispatcher.utter_message(resonpse)








