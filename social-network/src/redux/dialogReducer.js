const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
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
    ],
    newMessageText: ''
};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                messages: state.newMessageText
            }

            return {
                ...state,
                messages:[...state.messages, {id:6, messages:newMessage}],
                newMessageText:''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: messageText});

export default dialogReducer;