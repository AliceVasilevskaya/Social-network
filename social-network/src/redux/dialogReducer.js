const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    dialogs: [
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1}
    ],
    messages: [
        {id: 1,message: 'text message'},
        {id: 2,message: 'text message'},
        {id: 3,message: 'text message'},
        {id: 4,message: 'text message'},
        {id: 5,message: 'text message'}
    ]

};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages:[...state.messages, {id:6,message:action.newMessageBody}]
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogReducer;