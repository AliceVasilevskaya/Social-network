import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.updateNewPostText(postText);
    }


    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;