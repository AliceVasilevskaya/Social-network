import React, { FC } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm'
import {PostType} from '../../../types/types'

export type MapDispatchPropsType = {
    addPost: (newPostBody: string) => void
}
export type MapStatePropsType = {
    posts: Array<PostType>
}
const MyPosts: FC<MapDispatchPropsType & MapStatePropsType> = (props) => {

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostBody)
    }
    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <h3>Feed</h3>
        <div>
            <AddPostForm onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>
    </div>
}
const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized