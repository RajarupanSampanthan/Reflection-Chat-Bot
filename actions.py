
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

class ActionStructuredQ(Action):

	def name(self):
		return 'structured_q'

	def run(self, dispatcher, tracker, domain):
		with open(os.path.join(FILE_PATH, 'data/structured_questionnaires.json'), 'r') as JSON:
			json_dict = json.load(JSON)

		dispatcher.utter_message("I would like to ask you questions about the chosen value.")
			
		for key in json_dict['common'].keys():
			dispatcher.utter_message(json_dict['common'][key]['text'])
			#dispatcher.action_listen()
			#dispatcher.utter_message("current state = ".format(", ".join(tracker.current_state().keys())))
			tracker.trigger_followup_action(action_listen)
		return None


class StructuredQFormBehaviour(FormAction):
	def name(self):
		return 'structured_q_form_behaviour'

	@staticmethod
	def required_slots(tracker: Tracker):
		return ["behaviour_1", "behaviour_2", "behaviour_3"]

	def slot_mappings(self):
		return {
			"behaviour_1" : self.from_text(intent="inform"),
			"behaviour_2" : self.from_text(intent="inform"),
			"behaviour_3" : self.from_text(intent="inform")
		}

	def submit(
		self,
		dispatcher,
		tracker,
		domain):
		dispatcher.utter_template("utter_submit_behaviour", tracker)
		return []


class StructuredQFormValue(FormAction):

	def name(self):
		return 'structured_q_form_value'

	@staticmethod
	def required_slots(tracker: Tracker):

		if tracker.get_slot("value_goal") == 'no':
			return ["value_1", "value_2", "value_goal", "value_goal_n_1",
					"value_goal_n_2", "value_goal_n_3", "value_goal_n_4",
					"value_goal_n_5", "value_goal_n_6", "value_goal_n_7",
					"value_goal_n_8", "value_goal_n_9"]
		elif tracker.get_slot("value_goal") is None:
			return ["value_1", "value_2", "value_goal"]
		else:
			if tracker.get_slot("value_goal_y_1") == 'no':
				return ["value_1", "value_2", "value_goal", "value_goal_y_1", "value_goal_y_1.1",
						"value_goal_y_2", "value_goal_y_3", "value_goal_y_4"]
			else:
				return ["value_1", "value_2", "value_goal", "value_goal_y_1",
						"value_goal_y_2", "value_goal_y_3", "value_goal_y_4"]

	def slot_mappings(self):
		return {
			"value_1" : self.from_text(intent="inform"),
			"value_2" : self.from_text(intent="inform"),
			"value_goal" : [
								self.from_intent(intent="deny", value="no"),
								self.from_text(not_intent="deny")
							],

			"value_goal_y_1" : [
								self.from_intent(intent="deny", value="no"),
								self.from_text(not_intent="deny")
							],
			"value_goal_y_1.1" : self.from_text(intent="inform"),
			"value_goal_y_2" : self.from_text(intent="inform"),
			"value_goal_y_3" : self.from_text(intent="inform"),
			"value_goal_y_4" : [self.from_text(intent="inform"),self.from_intent(intent="deny", value="no")],

			"value_goal_n_1" : self.from_text(intent="inform"),
			"value_goal_n_2" : self.from_text(intent="inform"),
			"value_goal_n_3" : self.from_text(intent="inform"),
			"value_goal_n_4" : self.from_text(intent="inform"),
			"value_goal_n_5" : self.from_text(intent="inform"),
			"value_goal_n_6" : self.from_text(intent="inform"),
			"value_goal_n_7" : self.from_text(intent="inform"),
			"value_goal_n_8" : self.from_text(intent="inform"),
			"value_goal_n_9" : self.from_text(intent="inform")
		}

	def submit(
		self,
		dispatcher,
		tracker,
		domain):
		dispatcher.utter_template("utter_submit_value", tracker)
		return []




