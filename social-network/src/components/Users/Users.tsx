import React, {FC} from 'react'
import s from './Users.module.css'
import User from './User/User'
import Paginator from '../../Common/Paginator/Paginator'
import {UserType} from '../../types/types'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageClick: (pageNumber:number) => void
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UserType>
}
const Users: FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageClick,
                                  followingInProgress, unfollow, follow, users}) => {
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
export default Users