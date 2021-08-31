import React from 'react';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../Common/Images/userPhoto.png';
import {Button} from "../../../Common/Button/Button";

const User = ({user, followingInProgress, unfollow, follow}) => {
    let disabled = (user) => {followingInProgress.some(id => user.id === id)}

    return <div key={user.id}>
               <span className={s.user}>
               <NavLink to={'/profile' + user.id}>
                  <img alt ={'userPhoto'} src={user.photos.small != null ? user.photos.small : userPhoto}/>
               </NavLink>
                   {user.name}
                   <span className={s.usersInform}>
                  <div className={s.followed}>
                       {user.followed
                           ? <Button children={'Unollow'}
                                     disabled={disabled(user)}
                                     onClick={() => {unfollow(user.id)}}
                           />
                           : <Button children={'Follow'}
                                     disabled={disabled(user)}
                                     onClick={() => {follow(user.id)}}
                                     />
                       }
                  </div>
                 </span>
              </span>
    </div>
}
export default User;