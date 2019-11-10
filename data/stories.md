## no_goal_story
* greet
    - utter_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
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

## yes_goal_yes_progress_story
* greet
    - utter_greet
* value_focus{"value_type": "health"}
    - slot{"value_type": "health"}
    - report_value
    - slot{"value_type": "health"}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I study"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I work"}
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
    - slot{"value_1": "I pick this value because I want to live longer"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "by going to the gym frequently"}
    - slot{"requested_slot": "value_goal"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal": "yes, I want to be illness free in my whole life"}
    - slot{"requested_slot": "value_goal_y_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_1": "yes, I go to gym"}
    - slot{"requested_slot": "value_goal_y_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_2": "I haven't died yet."}
    - slot{"requested_slot": "value_goal_y_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_3": "Going to the gym. being physically strong keeps the sickness away"}
    - slot{"requested_slot": "value_goal_y_4"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_4": "not really"}
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "friendship"}
    - slot{"value_type": "friendship"}
    - report_value
    - slot{"value_type": "friendship"}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "I spend 40% of my time studying, 40% sleeping and eating, 10% spending time with friends, and 10% going to the gym."}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I spend most of my time working."}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would travel to Asia and visit my family and old friends."}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "This became an important value of mine because I want people to support and accept me."}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "I express this value by spending time with friends and make more."}
    - slot{"requested_slot": "value_goal"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal": "Yes, I want to have close friends that we will still see each other even we grow old"}
    - slot{"requested_slot": "value_goal_y_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_1": "I think so, I am getting along with my friends well at the moment."}
    - slot{"requested_slot": "value_goal_y_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_2": "My studies are taking a lot of my time from my friends."}
    - slot{"requested_slot": "value_goal_y_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_3": "Spending time with them would definitely help"}
    - slot{"requested_slot": "value_goal_y_4"}
* form: deny

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "friendship"}
    - slot{"value_type": "friendship"}
    - report_value
    - slot{"value_type": "friendship"}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "Studying and assignments 60%, watching tv 10%, playing guitar 5%, spending time with friends 25%"}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "Dating 20%, developing career 30%, education 30%, improving fitness 20%"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "Travel across Europe and discover myself"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "Feel that I need a better balance in my life since it is too focused on education. This is one area in which I am lacking the most."}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "I try to put effort into every relationship I have and be friendly to others"}
    - slot{"requested_slot": "value_goal"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal": "yes, make 5 new friends this year"}
    - slot{"requested_slot": "value_goal_y_1"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal_y_1": "no"}
    - slot{"requested_slot": "value_goal_y_1.1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_1.1": "course work takes up a lot of time and makes it hard to arrange time for social activities"}
    - slot{"requested_slot": "value_goal_y_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_2": "course work"}
    - slot{"requested_slot": "value_goal_y_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_3": "Dating and spending time with friends"}
    - slot{"requested_slot": "value_goal_y_4"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_4": "Studying and assignments"}
    - form{"name": null}
    - slot{"requested_slot": null}

## interactive_story_1
* greet
    - utter_greet
* value_focus{"value_type": "wealth"}
    - slot{"value_type": "wealth"}
    - report_value
    - slot{"value_type": "wealth"}
    - structured_q_form_behaviour
    - form{"name": "structured_q_form_behaviour"}
    - slot{"requested_slot": "behaviour_1"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_1": "50% studying, 30% sleeping and eating, 20% going to the gym."}
    - slot{"requested_slot": "behaviour_2"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_2": "I focused on career development, maintaining a good relationship with family and friends"}
    - slot{"requested_slot": "behaviour_3"}
* form: inform
    - form: structured_q_form_behaviour
    - slot{"behaviour_3": "I would learn a new skill such as martial arts or fine arts."}
    - form{"name": null}
    - slot{"requested_slot": null}
    - structured_q_form_value
    - form{"name": "structured_q_form_value"}
    - slot{"requested_slot": "value_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_1": "I picked this as an important value because I want to be able to afford a house"}
    - slot{"requested_slot": "value_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_2": "I express this value by saving up my earnings."}
    - slot{"requested_slot": "value_goal"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal": "Yes, my goal is to earn 200k a year"}
    - slot{"requested_slot": "value_goal_y_1"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_1": "I believe I am in the progress of achieving it."}
    - slot{"requested_slot": "value_goal_y_2"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_2": "Lack of experience prevents me from achieving this goal at the moment"}
    - slot{"requested_slot": "value_goal_y_3"}
* form: inform
    - form: structured_q_form_value
    - slot{"value_goal_y_3": "studying and develop my career will definitely help"}
    - slot{"requested_slot": "value_goal_y_4"}
* form: deny
    - form: structured_q_form_value
    - slot{"value_goal_y_4": "no"}
    - form{"name": null}
    - slot{"requested_slot": null}
