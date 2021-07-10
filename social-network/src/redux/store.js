import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let store = {
    _callSubscriber() {
        console.log('state changed')
    },
    _state: {
        profilePage: {
            posts: [
                {message: 'post text', likes: '❤ 15'},
                {message: 'post text', likes: '❤ 15'},
                {message: 'post text', likes: '❤ 15'},
                {message: 'post text', likes: '❤ 15'},
                {message: 'post text', likes: '❤ 15'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state)


    }
}

export default store;