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
from rasa_sdk.forms import FormAction
from rasa_sdk import Tracker

value_meaning_dict = {
	"achievement" 		: "Achievement - to have important accomplishment",
	"family" 			: "Family - to have a happy, loving family",
	"fun" 				: "Fun - to play and have fun",
	"health" 			: "Health -  to be physically well and health",
	"mindfulness" 		: "Mindfulness - to live conscious and mindful of the present moment",
	"independence" 		: "Independence -  to be free from depending on others",
	"purpose" 			: "Purpose - to have meaning and direction in my life",
	"self-esteem" 		: "Self-esteem - to feel good about myself",
	"wealth" 			: "Wealth - to have plenty of money",
	"friendship" 		: "Friendship -  to have close, supportive friends",
	"morality" 			: "Morality - to live a morally pure and excellent life",
	"romance" 			: "Romance -  to have intense, exciting love in my life",
	"responsibility" 	: "Responsibility - to make and carry out responsible decision",
	"knowledge" 		: "Knowledge - to learn and contribute valuable knowledge",
	"acceptance" 		: "Acceptance - to be accepted as I am"
}

class ActionCheckValueNum(Action):
	def name(self):
		return 'check_value_num'

	def run(self, dispatcher, tracker, domain):
		num_value = 0
		value_list = []
		for value in tracker.get_latest_entity_values('value'):
			num_value += 1
			value_list.append(value)
		#dispatcher.utter_message(",".join(value_list)) # TODO - delete

		if num_value == 1:
			slot_num_value = 'one'
			return [SlotSet('num_value', slot_num_value), SlotSet('value_focus', value_list[0])]
		elif num_value == 0:
			dispatcher.utter_message("I didn't quite get that, please select a value important to you from the list above.")
			slot_num_value = 'zero'
		else:
			dispatcher.utter_message("You selected " + ", ".join(value_list) + ". Which one do you value the most?")
			slot_num_value = 'more'

		return [SlotSet('num_value', slot_num_value)]


class ActionExplainValue(Action):
	def name(self):
		return 'action_explain_value'

	def run(self, dispatcher, tracker, domain):
		num_value = 0
		value_list = []
		for value in tracker.get_latest_entity_values('value'):
			num_value += 1
			value_list.append(value)
		#dispatcher.utter_message(",".join(value_list)) # TODO - delete

		if num_value == 0:
			dispatcher.utter_message("A value is a person's belief or judgement of what is important in life. " + \
				"Ask me about a particular value, or choose your value to start!")
		else:
			dispatcher.utter_message("Meanings of the values are defined from Motivational Interviewing 3rd-Edition by W.R. Miller and S. Rollnick")
			for value in value_list:
				if value in value_meaning_dict.keys():
					dispatcher.utter_message(value_meaning_dict[value])
			dispatcher.utter_template("utter_select_a_value", tracker)

		return []

class ActionRepeat(Action):
	def name(self):
		return 'action_repeat'

	def run(self, dispatcher, tracker, domain):
		second_last_bot_msg = None
		first_bot_msg_found = False
		for item in reversed(tracker.events):
			if item.get('event') == 'bot':
				if not first_bot_msg_found:
					first_bot_msg_found = True
					print("first:")
					print(item.get('text'))
				else:
					print("second:")
					second_last_bot_msg = item.get('text')
					break
		if second_last_bot_msg is not None:
			dispatcher.utter_message(second_last_bot_msg)
		return []

class ActionCheckBehaviourNum(Action):
	def name(self):
		return 'check_behaviour_num'

	def run(self, dispatcher, tracker, domain):
		if tracker.get_slot('value_focus') is None:
			dispatcher.utter_message("Looks like you have not chosen a value for reflection.")
			dispatcher.utter_template("utter_select_a_value", tracker)
			return []

		num_action = 0
		action_list = []
		for action in tracker.get_latest_entity_values('activity'):
			num_action += 1
			action_list.append(action)
		#dispatcher.utter_message(",".join(action_list)) # TODO - delete

		if num_action == 3:
			return [SlotSet('num_act', 'three'), SlotSet('act_1', action_list[0]), SlotSet('act_2', action_list[1]), SlotSet('act_3', action_list[2])]
		elif num_action > 3:
			dispatcher.utter_message("I've detected more than three activities from your response" + \
				", ".join(action_list) + ". Please enter only the three activities you spend most of your time doing.")
			return [SlotSet('num_act', 'more')]
		elif num_action == 0:
			dispatcher.utter_message("I did not detect any activities from your response.")
			return [SlotSet('num_act', 'zero')]
		else:
			dispatcher.utter_message("I've only detected {} activity(ies) from your response".format(str(num_action)))
			return [SlotSet('num_act', 'less')]

class ActionFeedbackForm(FormAction):
	def name(self):
		return 'feedback_form'
	@staticmethod
	def required_slots(tracker):
			return[
			"question_1",
			"question_2",
			"question_3",
			"question_4",
			"question_5",
			"question_6",
			"question_7",
			"question_8",
			]
	def submit(self, dispatcher, tracker, domain):
		dispatcher.utter_message(template="utter_submit")
		return[]
	def slot_mapping (self):
		return {
			"feedback": self.from_entity(entity ="feedback"),
			"question_1":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_2":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_3":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_4":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_5":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_6":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_7":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
			"question_8":[
			self.from_intent(
			intent = ["feedbacks_num", "feedback_form"]
			)
			],
		}
	
