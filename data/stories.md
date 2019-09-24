## interactive_story_1
* greet
    - utter_greet
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
    - utter_greet
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
    - utter_greet
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
    - utter_greet
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
    - utter_greet
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
    - utter_greet
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
    - utter_greet
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
