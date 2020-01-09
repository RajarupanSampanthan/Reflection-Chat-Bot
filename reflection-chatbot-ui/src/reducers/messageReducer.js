import { FETCH_MESSAGES, SEND_MESSAGE } from '../actions/types';

const initialState = {
    messages: [{id:1, sender:'Bot', receiver:'User', message:'Say hello to begin.\n Currently supported values include: \n 1. Achievement \n 2. Family \n 3. Fun/Adventure \n 4. Physical Health \n 5. Minfulness/ Mental Health \n 6. Independence \n 7. Purpose \n 8. Self-esteem \n 9. Wealth \n 10. Friendship \n 11. Virtue / Morality \n 12. Romance \n 13. Responsibility \n 14. Knowledge \n 15. Acceptance'}],
    numMsgs: 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_MESSAGES:
            return {
                ...state,
                items: action.payload
            };
        case SEND_MESSAGE:
                let num = state.numMsgs;
                return {
                    ...state,
                    numMsgs: state.numMsgs+2,
                    messages: [...state.messages, {...action.userMsg, id: num+1}, {...action.botMsg, id: num+2}]
                };
        default:
            return state;
    }
}