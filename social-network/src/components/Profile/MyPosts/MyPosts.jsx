import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../../Assets/FormsControl/FormsControl";


const MyPosts = (props) => {
    let onAddPost = (values) => {
        props.addPost(values.newPostBody)
    }
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <AddPostReduxForm onSubmit = {onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
const maxLength10 = maxLengthCreator(10)
const AddPostForm =(props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field component = {Textarea}
               placeholder ={'Enter your message'}
               name = {'newPostBody'}
               validate={[ required, maxLength10]}
        />
        <button >Add post</button>


    </form>
}
const AddPostReduxForm = reduxForm({
    form: 'addPost',
})(AddPostForm)
export default MyPosts;