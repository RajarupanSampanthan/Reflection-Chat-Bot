
from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from rasa_sdk import Action
from rasa_sdk.events import SlotSet
from rasa_sdk.forms import FormAction
from rasa_sdk import Tracker

from nltk.corpus import stopwords
import string 

import os
import json

FILE_PATH = os.path.dirname(__file__)

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
		resonpse = "I will now ask you some questions on your actions. Please be patient and answer them all :)"
		dispatcher.utter_message(resonpse)
		return [SlotSet('value_type',value), SlotSet('user_info',user_info)]


class StructuredQFormBehaviour(FormAction):
	def name(self):
		return 'structured_q_form_behaviour'

	@staticmethod
	def required_slots(tracker: Tracker):
		return ["behaviour_1", "behaviour_2", "behaviour_3"]

	def slot_mappings(self):
		return {
			"behaviour_1" : self.from_text(),
			"behaviour_2" : self.from_text(),
			"behaviour_3" : self.from_text()
		}

	def submit(
		self,
		dispatcher,
		tracker,
		domain):
		dispatcher.utter_template("utter_submit_behaviour", tracker)
		return []

	def validate_behaviour_1(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"behaviour_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_behaviour", tracker)
			return {"behaviour_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"behaviour_1" : None}

	def validate_behaviour_2(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"behaviour_2" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_behaviour", tracker)
			return {"behaviour_2" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"behaviour_2" : None}

	def validate_behaviour_3(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"behaviour_3" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_behaviour", tracker)
			return {"behaviour_3" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"behaviour_3" : None}

'''
General questions about the user's value, includes:
- why important?
- how your express this value
- do you have goals
Based on whether the user has goals surrounding the value, goal/plan oriented form
'''
class StructuredQFormValue(FormAction):
	def name(self):
		return 'structured_q_form_value'

	@staticmethod
	def required_slots(tracker: Tracker):
		return ["value_1", "value_2", "value_goal"]

	def slot_mappings(self):
		return {
			"value_1" : self.from_text(),
			"value_2" : self.from_text(),
			"value_goal" : [
							self.from_intent(intent="deny", value="no"),
							self.from_text(intent="inform"),
							self.from_text()
							]
		}

	def validate_value_1(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_1" : None}

	def validate_value_2(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_2" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_2" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_2" : None}

	def validate_value_goal(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform' or \
			tracker.latest_message['intent'].get('name') == 'deny':
			return {"value_goal" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal" : None}

	def submit(
		self,
		dispatcher,
		tracker,
		domain):
		dispatcher.utter_template("utter_submit_value", tracker)
		return []
		


class StructuredQFormValueGoal(FormAction):
	def name(self):
		return 'structured_q_form_value_ex'

	@staticmethod
	def required_slots(tracker: Tracker):

		if tracker.get_slot("value_goal") == 'no':
			return ["value_goal_n_1", "value_goal_n_2", "value_goal_n_3", "value_goal_n_4",
					"value_goal_n_5", "value_goal_n_6", "value_goal_n_7",
					"value_goal_n_8", "value_goal_n_9"]
		elif tracker.get_slot("value_goal") is None:
			return ["value_1", "value_2", "value_goal"]
		else:
			if tracker.get_slot("value_goal_y_1") == 'no':
				return ["value_goal_y_1", "value_goal_y_1_1",
						"value_goal_y_2", "value_goal_y_3", "value_goal_y_4"]
			else:
				return ["value_goal_y_1", "value_goal_y_2", 
						"value_goal_y_3", "value_goal_y_4"]

	def slot_mappings(self):
		return {
			"value_goal_y_1" : [
								self.from_intent(intent="deny", value="no"),
								self.from_text(intent="inform"),
								self.from_text()
							],
			"value_goal_y_1_1" : self.from_text(),
			"value_goal_y_2" : self.from_text(),
			"value_goal_y_3" : self.from_text(),
			"value_goal_y_4" : [
								self.from_text(intent="inform"),
								self.from_intent(intent="deny", value="no"),
								self.from_text()
							],

			"value_goal_n_1" : self.from_text(),
			"value_goal_n_2" : self.from_text(),
			"value_goal_n_3" : self.from_text(),
			"value_goal_n_4" : self.from_text(),
			"value_goal_n_5" : self.from_text(),
			"value_goal_n_6" : self.from_text(),
			"value_goal_n_7" : self.from_text(),
			"value_goal_n_8" : self.from_text(),
			"value_goal_n_9" : self.from_text()
		}

	def validate_value_goal_y_1(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform' or \
			tracker.latest_message['intent'].get('name') == 'deny':
			return {"value_goal_y_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_y_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_y_1" : None}

	def validate_value_goal_y_1_1(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_y_1_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_y_1_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_y_1_1" : None}

	def validate_value_goal_y_2(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_y_2" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_y_2" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_y_2" : None}

	def validate_value_goal_y_3(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_y_3" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_y_3" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_y_3" : None}

	def validate_value_goal_y_4(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform' or \
			tracker.latest_message['intent'].get('name') == 'deny':
			return {"value_goal_y_4" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_y_4" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_y_4" : None}

	def validate_value_goal_n_1(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_1" : None}

	def validate_value_goal_n_2(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_1" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_1" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_1" : None}

	def validate_value_goal_n_3(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_3" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_3" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_3" : None}

	def validate_value_goal_n_4(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_4" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_4" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_4" : None}

	def validate_value_goal_n_5(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_5" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_5" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_5" : None}

	def validate_value_goal_n_6(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_6" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_6" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_6" : None}

	def validate_value_goal_n_7(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_7" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_7" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_7" : None}

	def validate_value_goal_n_8(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_8" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_8" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_8" : None}

	def validate_value_goal_n_9(
		self, 
		value, 
		dispatcher,
		tracker,
		domain):
		if tracker.latest_message['intent'].get('name') == 'inform':
			return {"value_goal_n_9" : value}
		elif tracker.latest_message['intent'].get('name') == 'explain':
			dispatcher.utter_template("utter_explain_value", tracker)
			return {"value_goal_n_9" : None}
		else:
			dispatcher.utter_message("I can't understand, rephrase or use a longer sentence.")
			return {"value_goal_n_9" : None}

	def submit(
		self,
		dispatcher,
		tracker,
		domain):
		dispatcher.utter_template("utter_submit_value", tracker)
		return []



