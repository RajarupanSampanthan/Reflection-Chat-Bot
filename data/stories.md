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

## say goodbye
* goodbye
  - utter_goodbye

## help reflect
* greet
  - utter_greet
* ask_for_values
  - utter_value_list

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "friendship"}
    - slot{"value_type": "friendship"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "world peace"}
    - slot{"value_type": "world peace"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "family"}
    - slot{"value_type": "family"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "Family"}
    - slot{"value_type": "Family"}
    - report_value
* value_focus{"value_type": "Friendship"}
    - slot{"value_type": "Friendship"}
    - report_value

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}

## interactive_story_2
* greet
    - utter_greet
* ask_for_values
    - utter_value_list
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value
    - slot{"value_type": "health"}

## interactive_story_1
* greet
    - utter_greet
* ask_for_values
    - utter_value_list
* value_focus
    - utter_didnt_get_value
* value_focus{"value_type": "friendship"}
    - slot{"value_type": "friendship"}
    - report_value
    - slot{"value_type": "friendship"}
