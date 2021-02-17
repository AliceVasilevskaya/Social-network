import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
My posts
        <div>
            New post
        </div>
        <div className={s.posts}>
           <Post message = 'hi' likes = '15'/>
           <Post message = 'haw are you?' likes = '20'/>
        </div>
    </div>
}
export default MyPosts;