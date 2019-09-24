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

class ActionReportValue(Action):
	def name(self):
		return 'report_value'
	def run(self, dispatcher, tracker, domain):
		value = tracker.get_slot('value_type')

		resonpse = "The value you chose to reflect on is {}.".format(value)
		dispatcher.utter_message(resonpse)
		return [SlotSet('value_type',value)]


class ActionReportBehaviour(Action):
	def name(self):
		return 'report_behaviour'
	def run(self, dispatcher, tracker, domain):
		value = tracker.get_slot('value_type')
		behaviour = tracker.latest_message['text']
		no_punc = [char for char in behaviour if char not in string.punctuation]
		no_punc = "".join(no_punc)
		clean_behaviour = [word for word in no_punc.split() if word.lower() not in stopwords.words('english')]
		clean_behaviour = ", ".join(clean_behaviour)

		resonpse = "value: " + value + "\nbehaviour: " + clean_behaviour
					
		dispatcher.utter_message(resonpse)
		return [SlotSet('behaviour', clean_behaviour)]

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









