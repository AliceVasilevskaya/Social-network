import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
            <StoreContext.Consumer>
                {store => {

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (postText) => {
                        store.dispatch(updateNewPostTextActionCreator(postText))
                    }


                    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                    posts={store.getState().profilePage.posts}
                                    newPostText={store.getState().profilePage.newPostText}/>
                }}
            </StoreContext.Consumer>
    )
}
export default MyPostsContainer;