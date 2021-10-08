export type PostType = {
    id: number
    message: string
    likes: string
}
export type PhotosType = {
    large: string | null
    small: string | null
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed?: boolean
}
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}