import React from 'react';
import s from './Post.module.css';
import user from '../../../../Assets/Images/user.jpg'

const Post = (props) => {
    return <div className={s.item}>
        <img src={user}/>
        <span className={s.postText}> {props.message}
            <span className={s.likes}>{props.likes}</span>
        </span>
    </div>
}
export default Post;