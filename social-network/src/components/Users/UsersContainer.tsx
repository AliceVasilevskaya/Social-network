import React from 'react'
import s from './Users.module.css'
import {
    follow,
    unfollow,
    setUsers, requestUsers
} from '../../redux/usersReducer'
import {connect} from 'react-redux'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/usersSelectors'
import {UserType} from '../../types/types'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
    currentPage: number
    pageSize:number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number) => void
    setUsers:(pageNumber:number, pageSize:number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
type OwnPropsType = {

}
type PropsType =  MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageClick = (pageNumber: number) => {
        const {setUsers} = this.props
        setUsers(pageNumber, this.props.pageSize)
    }
    // onPageClick = (pageNumber:number) => {
    //     const {pageSize} = this.props
    //     this.props.getUsers(pageNumber, pageSize)
    // }

    render() {
        return <>
            <div className={s.preloader}>{this.props.isFetching ? <Preloader/> : null}</div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageClick={this.onPageClick}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {
            follow, unfollow,
            setUsers, getUsers: requestUsers
        })
    , WithAuthRedirect)(UsersContainer)

