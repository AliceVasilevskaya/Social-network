import React from 'react';
import s from './Post.module.css';
import user from '../../../../Assets/Images/user.jpg'

const Post = (props) => {
    return <div className={s.item}>
        <img src={user}/>
        <div  className={s.postText}>
            <span> {props.message}</span>
            <span className={s.likes}>{props.likes}</span>
        </div>

    </div>
}
export default Post;