## happy path
* greet
  - utter_greet
* mood_great
  - utter_happy

## sad path 1
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* affirm
  - utter_happy

## sad path 2
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* deny
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot

## interactive_story_0
* choose_value{"value": "family"}
  - check_value_num

## interactive_story_1
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - utter_confirm_value

## interactive_story_2
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "more"}

## happy_path
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_deny_decision
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* deny
    - utter_select_a_value
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_more_than_one_values
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_zero_values
* choose_value
    - check_value_num
    - slot{"num_value": "zero"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_ask_chatbot_purpose_boring
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* sounds_boring
    - utter_give_it_a_try
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_ask_chatbot_purpose_interesting
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* sounds_cool
    - utter_agree_interesting
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_general
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* deny
    - utter_select_a_value
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_explain_values
* explain_value
    - action_explain_value
* explain_value{"value": "achievement"}
    - action_explain_value
* explain_value{"value": "family"}
    - action_explain_value
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## stop_convo_path_affirm
* stop_convo OR goodbye
    - utter_ask_stop
* affirm
    - utter_goodbye
    - action_restart

## stop_convo_path_deny
* stop_convo OR goodbye
    - utter_ask_stop
* deny
    - action_repeat

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## interactive_story_1
* greet
    - utter_greet
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* explain_value{"value": "health"}
    - action_explain_value
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities

## interactive_story_1
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* stop_convo
    - utter_ask_stop
* affirm
    - utter_goodbye
    - action_restart

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "singing"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* affirm
    - utter_next_section

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "singing"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again



## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "playing video games"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "drinking alcohol"}
    - slot{"act_2": "sleeping"}
    - slot{"act_3": "playing video games"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again
* behaviour_describe{"activity": "singing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "singing"}
    - utter_confirm_activities
* affirm
    - utter_next_section

## interactive_story_1
* choose_value{"value": "fun"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "fun"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe
    - check_behaviour_num
    - slot{"num_act": "zero"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "fixing"}
    - check_behaviour_num
    - slot{"num_act": "less"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "more"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "drinking"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "working"}
    - slot{"act_2": "sleeping"}
    - slot{"act_3": "drinking"}
    - utter_confirm_activities
* affirm
    - utter_next_section
##happy path
* feedbacks_num
    - feedback_form
    - utter_ask_question_1
    - form{"question_1": "feedback_form"}
    - form{"question_1": null}
    - utter_ask_question_2
    - form{"question_2": "feedback_form"}
    - form{"question_2": null}
    - utter_ask_question_3
    - form{"question_3": "feedback_form"}
    - form{"question_3": null}
    - utter_ask_question_4
    - form{"question_4": "feedback_form"}
    - form{"question_4": null}
    - utter_ask_question_5
    - form{"question_5": "feedback_form"}
    - form{"question_5": null}
    - utter_ask_question_6
    - form{"question_6": "feedback_form"}
    - form{"question_6": null}
    - utter_ask_question_7
    - form{"question_7": "feedback_form"}
    - form{"question_7": null}
    - utter_ask_question_8
    - form{"question_8": "feedback_form"}
    - form{"question_8": null}
