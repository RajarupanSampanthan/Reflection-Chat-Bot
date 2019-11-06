## interactive_story_1
* greet
    - say_greet
* value_focus
    - utter_didnt_get_value
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "I spend most of my time playing the piano"}
    - utter_ask_if_behaviour_help_value

## interactive_story_1
* greet
    - say_greet
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value
    - slot{"value_type": "health"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "working, gym"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect

## interactive_story_1
* greet
    - say_greet
* value_focus{"value_type": "family"}
    - slot{"value_type": "family"}
    - report_value
    - slot{"value_type": "family"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "making, music"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect

## interactive_story_1
* greet
    - say_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "working"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect
    - slot{"self_refl_behvr_value": "Yes, working, helps, make, money"}

## interactive_story_1
* greet
    - say_greet
* value_focus{"value_type": "family"}
    - slot{"value_type": "family"}
    - report_value
    - slot{"value_type": "family"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "watching, television"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect
    - slot{"self_refl_behvr_value": "Yes, watching, television, helps, bond, family"}

## interactive_story_1
* greet
    - say_greet
* value_focus{"value_type": "creativity"}
    - slot{"value_type": "creativity"}
    - report_value
    - slot{"value_type": "creativity"}
    - utter_ask_behaviour
* behaviour_describe
    - report_behaviour
    - slot{"behaviour": "spend, time, painting"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect
    - slot{"self_refl_behvr_value": "Yes, painting, helps, improve, creativity"}

## interactive_story_1
* greet
    - say_greet
* ask_for_values
    - utter_didnt_get_value
* value_focus{"value_type": "Health"}
    - slot{"value_type": "Health"}
    - report_value
    - slot{"value_type": "Health"}
    - utter_ask_behaviour
* behaviour_describe{"behaviour": "sleep"}
    - slot{"behaviour": "sleep"}
    - report_behaviour
    - slot{"behaviour": "sleep"}
    - utter_ask_if_behaviour_help_value
* self_refl_behvr_value
    - report_self_reflect
    - slot{"self_refl_behvr_value": "Ya"}

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "Health"}
    - slot{"value_type": "Health"}
    - report_value
    - slot{"value_type": "Health"}
    - slot{"user_info": {"actions": [], "current_value": "Health", "user_values": ["Health"], "value_to_actions": {}}}
    - utter_ask_behaviour
* self_refl_behvr_value
    - report_behaviour
    - utter_ask_if_behaviour_help_value
* affirm
    - utter_ask_continue_explore_values
* affirm
    - utter_ask_what_value_next
* value_focus{"value_type": "Wealth"}
    - slot{"value_type": "Wealth"}
    - report_value
    - slot{"value_type": "Wealth"}
    - slot{"user_info": {"actions": [], "current_value": "Wealth", "user_values": ["Health", "Wealth"], "value_to_actions": {}}}
    - utter_ask_behaviour
* self_refl_behvr_value
    - report_behaviour
    - slot{"behaviour": "shopping"}
    - slot{"user_info": {"actions": ["shopping"], "current_value": "Wealth", "user_values": ["Health", "Wealth"], "value_to_actions": {"Wealth": ["shopping"]}}}
    - utter_ask_if_behaviour_help_value
* affirm
    - utter_ask_continue_explore_values
* deny
    - utter_goodbye

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "hEALTH"}
    - slot{"value_type": "hEALTH"}
    - report_value
    - slot{"value_type": "hEALTH"}
    - slot{"user_info": {"actions": [], "current_value": "hEALTH", "user_values": ["hEALTH"], "value_to_actions": {}}}
    - utter_ask_behaviour
* self_refl_behvr_value
    - report_behaviour
    - slot{"behaviour": "Eating"}
    - slot{"user_info": {"actions": ["Eating"], "current_value": "hEALTH", "user_values": ["hEALTH"], "value_to_actions": {"hEALTH": ["Eating"]}}}
    - utter_ask_if_behaviour_help_value
* affirm
    - utter_ask_continue_explore_values
* affirm
    - utter_ask_what_value_next
* value_focus{"value_type": "Wealth"}
    - slot{"value_type": "Wealth"}
    - report_value
    - slot{"value_type": "Wealth"}
    - slot{"user_info": {"actions": ["Eating"], "current_value": "Wealth", "user_values": ["hEALTH", "Wealth"], "value_to_actions": {"hEALTH": ["Eating"]}}}
    - utter_ask_behaviour
* self_refl_behvr_value
    - report_behaviour
    - slot{"behaviour": "Working"}
    - slot{"user_info": {"actions": ["Eating", "Working"], "current_value": "Wealth", "user_values": ["hEALTH", "Wealth"], "value_to_actions": {"Wealth": ["Working"], "hEALTH": ["Eating"]}}}
    - utter_ask_if_behaviour_help_value
* affirm
    - utter_ask_continue_explore_values
* deny{"deny": "No"}
    - utter_goodbye
