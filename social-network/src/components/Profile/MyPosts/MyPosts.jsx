import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

     let posts = [
         {message:'post text', likes:'❤ 15'},
         {message:'post text', likes:'❤ 15'},
         {message:'post text', likes:'❤ 15'},
         {message:'post text', likes:'❤ 15'},
         {message:'post text', likes:'❤ 15'}
     ]
    let postsElements = posts.map(p => <Post message={p.message} likes = {p.likes}/>)
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;