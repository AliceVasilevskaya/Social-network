import React from 'react'
import {actions} from '../../../redux/profileReducer'
import MyPosts, {MapDispatchPropsType, MapStatePropsType} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType,
    {} , AppStateType>(mapStateToProps, {addPost: actions.addPost})(MyPosts)
export default MyPostsContainer