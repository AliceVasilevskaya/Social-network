const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
        posts: [
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'}
    ],
        newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: '❤ 20'
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText});

export default profileReducer;