## no_goal_story
* greet
    - say_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - slot{"user_info": {"actions": [], "current_value": "wealth", "user_values": ["wealt"], "value_to_actions": {}}}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I study and go to school in most days of my week. I also go to the gym when I am free."}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I spent most of my time in the past year working. I also travelled with my family few times. Go to the gym when I am free."}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel to Europe or Asia with friends."}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "I choose this value because I am broke, and I would like to save some money for my future."}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "By saving up money earned."}
    - slot{"requested_slot": "value_goal"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal": "no"}
    - slot{"requested_slot": "value_goal_n_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_1": "When I was deciding whether to travel during vacation, since it would be quite a spending."}
    - slot{"requested_slot": "value_goal_n_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_2": "yes it happens all the time when I decide to buy something."}
    - slot{"requested_slot": "value_goal_n_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_3": "It makes me feel aware of my spendings but also anxious."}
    - slot{"requested_slot": "value_goal_n_4"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_4": "I think my actions reflect well with the value, since I was working to save money and also pursuing a degree that will help me get more opportunity in the future."}
    - slot{"requested_slot": "value_goal_n_5"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_5": "I would be starting to look for a job sooner so I can start earning money."}
    - slot{"requested_slot": "value_goal_n_6"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_6": "Because it takes time and I have studies to work on."}
    - slot{"requested_slot": "value_goal_n_7"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_7": "online shopped something I don't need."}
    - slot{"requested_slot": "value_goal_n_8"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_8": "My desire to have fun prevents me to prioritize this value."}
    - slot{"requested_slot": "value_goal_n_9"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_9": "I would stop going online, or get rid of my online shopping account."}
    - form{"name": null}
    - slot{"requested_slot": null}
    - utter_ask_continue_explore_values
* affirm
    - utter_ask_what_value_next
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value
    - slot{"value_type": "health"}
    - slot{"user_info": {"actions": [], "current_value": "health", "user_values": ["wealth", "health"], "value_to_actions": {}}}

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
    - slot{"behaviour_1": "I spend 50% of my time studying, the rest 50% I spend for gym"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I was working to develop my career, excercise regularily to improve my health"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel to Hawaii"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "I chose this value because I want to live a luxiourous live"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "By saving up my earnings"}
    - slot{"requested_slot": "value_goal"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal": "no"}
    - slot{"requested_slot": "value_goal_n_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_1": "this value influenced me to prevent myself to spend too much money on unnecessary stuff"}
    - slot{"requested_slot": "value_goal_n_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_2": "This happens often"}
    - slot{"requested_slot": "value_goal_n_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_3": "Feels good to hold myself back from my urges"}
    - slot{"requested_slot": "value_goal_n_4"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_4": "I think very well."}
    - slot{"requested_slot": "value_goal_n_5"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_5": "I would start looking for a job so I don't have a gap after I graduate."}
    - slot{"requested_slot": "value_goal_n_6"}
* form: inform
    - form: structured_q_form_value
    - action_listen
    - slot{"value_goal_n_6": "Because I spend too much time on my studies"}
    - slot{"requested_slot": "value_goal_n_7"}
* form: deny
* form: inform
    - structured_q_form_value
    - slot{"value_goal_n_7": "the situation was I spend too much money on games"}
    - slot{"requested_slot": "value_goal_n_8"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_8": "I desire to play game prevented my to prioritize this value in the situation"}
    - slot{"requested_slot": "value_goal_n_9"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_n_9": "I would play less video games"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - utter_ask_continue_explore_values
* deny
    - utter_goodbye
