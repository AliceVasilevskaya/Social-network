import React from 'react';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../Assets/Images/userPhoto.png';
const User = ({user, followingInProgress, unfollow, follow}) => {

    return < div key={user.id}>
                <span className={s.user}>
               <NavLink to={'/profile' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
               </NavLink>
                    {user.name}
                    <span className={s.usersInform}>
                  <div className={s.followed}>
                       {user.followed
                           ? <button disabled={followingInProgress.some(id => user.id === id)}
                                     onClick={() => {
                                         unfollow(user.id)
                                     }}> Unfollow</button>
                           : <button disabled={followingInProgress.some(id => user.id === id)}
                                     onClick={() => {
                                         follow(user.id)
                                     }}> Follow </button>}
                  </div>
                 </span>
              </span>
    </div>
}
export default User;