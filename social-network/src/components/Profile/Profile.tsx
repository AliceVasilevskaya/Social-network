import React, { FC } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../types/types'

type PropsType = {
    saveProfile: (profile: ProfileType) => Promise<any>
    isOwner:boolean
    savePhoto: (file:File) => void
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}
const Profile: FC<PropsType> = ({profile, status, updateUserStatus,
                                savePhoto, saveProfile, isOwner}) => {
    return <div>
        <ProfileInfo profile={profile} status={status}
                     updateUserStatus={updateUserStatus}
                     savePhoto={savePhoto}
                     saveProfile ={saveProfile}
                     isOwner={isOwner}/>
        <div><MyPostsContainer/></div>
    </div>
}
export default Profile