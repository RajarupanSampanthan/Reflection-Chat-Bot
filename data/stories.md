## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* goodbye
    - utter_ask_continue
* deny
    - action_deactivate_form
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: deny
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": null}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I study"}
    - slot{"requested_slot": "behaviour_2"}
* goodbye
    - utter_ask_continue
* deny
    - action_deactivate_form
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I sleep, eat, study, and play video games"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I have not done anything meaningful"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would learn a new skill such as music composing"}
    - form{"name": null}
    - slot{"requested_slot": null}
> value_form

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value
    - slot{"value_type": "health"}
    - slot{"user_info": {"actions": [], "current_value": "health", "user_values": ["health"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I eat, sleep and watch tv"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I have not done anything meaningful"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel to Asia"}
    - form{"name": null}
    - slot{"requested_slot": null}
> value_form
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "because I want to enjoy the world"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "by going to the gym"}
    - slot{"requested_slot": "value_goal"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal": "no"}
    - form{"name": null}
    - slot{"requested_slot": null}
> value_form_contd

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I eat, sleep, nothing else"}
    - slot{"requested_slot": "behaviour_2"}
* form: greet
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": null}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I have done nothing"}
    - slot{"requested_slot": "behaviour_3"}
* form: value_focus
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": null}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would sleep"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "stop"}
    - slot{"requested_slot": "value_2"}
* goodbye
    - utter_ask_continue
* deny
    - action_deactivate_form
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I eat, sleep"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I have done nothing meaningful"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would sleep"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "because I wanna be rich"}
    - slot{"requested_slot": "value_2"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_2": null}
    - slot{"requested_slot": "value_2"}
* form: greet
    - form: structured_q_form_value
    - slot{"value_2": null}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "by stealing from others"}
    - slot{"requested_slot": "value_goal"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal": "no"}
    - form{"name": null}
    - slot{"requested_slot": null}
> value_form_contd

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "friendship"}
    - slot{"value_type": "friendship"}
    - report_value
    - slot{"value_type": "friendship"}
    - slot{"user_info": {"actions": [], "current_value": "friendship", "user_values": ["friendship"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I work and hang out with friends"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I imporved my relationship with my friends"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel to Europe"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "because friends helped me, and I want to have good friends"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "by hanging out with them"}
    - slot{"requested_slot": "value_goal"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal": "no"}
    - form{"name": null}
    - slot{"requested_slot": null}
> value_form_contd
    - structured_q_form_value_ex
    - form{"name": "structured_q_form_value_ex"}
    - slot{"requested_slot": "value_goal_n_1"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_1": "My friends talked me out of suicide"}
    - slot{"requested_slot": "value_goal_n_2"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_2": "about a year ago, only happened once"}
    - slot{"value_goal_n_1": "about a year ago, only happened once"}
    - slot{"requested_slot": "value_goal_n_3"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_3": "that made me feel cared"}
    - slot{"requested_slot": "value_goal_n_4"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_4": "pretty well"}
    - slot{"requested_slot": "value_goal_n_5"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_5": "I would not"}
    - slot{"requested_slot": "value_goal_n_6"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_6": "because I don't feel the need to change my actions"}
    - slot{"requested_slot": "value_goal_n_7"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_7": "When I needed to prepare for my exam and didn't go to a friend's party"}
    - slot{"requested_slot": "value_goal_n_8"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_8": "my study"}
    - slot{"requested_slot": "value_goal_n_9"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_n_9": "I would not change anything, my exam was more important at the time"}
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - say_greet
    - slot{"user_info": {"actions": [], "current_value": null, "user_values": [], "value_to_actions": {}}}
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealth"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I eat sleep and play video games"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "developing my career"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "because I wanna be rich"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "by saving up money"}
    - slot{"requested_slot": "value_goal"}
* form: affirm
    - form: structured_q_form_value
    - slot{"value_goal": null}
    - slot{"requested_slot": "value_goal"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal": "yes, I want to be the richest person on the planet"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value_ex
    - form{"name": "structured_q_form_value_ex"}
    - slot{"requested_slot": "value_goal_y_1"}
* form: deny
    - form: structured_q_form_value_ex
    - slot{"value_goal_y_1": "no"}
    - slot{"requested_slot": "value_goal_y_1_1"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_y_1_1": "my laziness"}
    - slot{"requested_slot": "value_goal_y_2"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_y_2": "also my laziness"}
    - slot{"requested_slot": "value_goal_y_3"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_y_3": "developing my career"}
    - slot{"requested_slot": "value_goal_y_4"}
* form: inform
    - form: structured_q_form_value_ex
    - slot{"value_goal_y_4": "mostly just me"}
    - form{"name": null}
    - slot{"requested_slot": null}
