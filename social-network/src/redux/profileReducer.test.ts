import profileReducer, {actions} from './profileReducer'

let state = {
    posts: [
        {id: 1, message: 'post text', likes: '❤ 15'},
        {id: 2, message: 'post text', likes: '❤ 15'},
        {id: 3, message: 'post text', likes: '❤ 15'},
        {id: 4, message: 'post text', likes: '❤ 15'},
        {id: 5, message: 'post text', likes: '❤ 15'}
    ],
    profile: null,
    status: '',
    newPostText: ''
}
it('length of post should be incremented', () => {
    let action = actions.addPost('test message')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(6)
})
it('message of new post should be correct', () => {
    let action = actions.addPost('test message')
    let newState = profileReducer(state, action)
    expect(newState.posts[5].message).toBe('test message')
})
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = actions.deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})