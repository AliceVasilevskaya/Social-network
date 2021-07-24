import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../Assets/Images/userPhoto.png';
const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
       return  <div className={s.users}>
           <div>
           {
               pages.map(p => {
             return <span className={props.currentPage === p && s.selectedPage}
                            onClick={() => {props.onPageClick(p) }}>{p}</span>
           }
           )}
           </div>

           {
            props.users.map(u => < div key={u.id}>
                <span className ={s.user}>
                <img src = {u.photos.small != null ? u.photos.small: userPhoto}/>
                {u.name}
                <span  className={s.usersInform}>
                  <div className={s.followed}>
                       {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                           : <button onClick={()=>{
                               props.follow(u.id)}}>Follow</button>}
                  </div>
                 </span>
              </span>
            </div>)
        }
    </div>
}
        export default Users;