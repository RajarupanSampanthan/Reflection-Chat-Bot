
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
