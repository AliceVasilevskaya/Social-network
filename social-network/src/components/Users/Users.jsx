import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Paginator from "../../Common/Paginator/Paginator";

const Users = ({totalUsersCount, pageSize, currentPage, onPageClick, followingInProgress, unfollow, follow, users}) => {
    return <div className={s.users}>
        <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}
                   onPageClick={onPageClick}/>
        {users.map(u => <User
            key={u.id}
            user={u}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
        />)}
    </div>
}
export default Users;