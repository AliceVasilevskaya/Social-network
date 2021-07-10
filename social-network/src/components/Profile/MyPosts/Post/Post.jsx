import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.item}>

        <img
            src='https://st2.depositphotos.com/3730475/6441/i/600/depositphotos_64411041-stock-photo-starry-night-sky-with-stars.jpg'/>
        <span className={s.postText}> {props.message} <span className={s.likes}>{props.likes}</span></span>



        <div>

        </div>


    </div>
}
export default Post;