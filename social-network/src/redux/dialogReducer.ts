import {InferActionTypes} from './redux-store'

const initialState = {
    dialogs: [
        {name: 'User1', id: 1},
        {name: 'User2', id: 2},
        {name: 'User3', id: 3},
        {name: 'User4', id: 4},
        {name: 'User5', id: 5}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'text message'},
        {id: 2, message: 'text message'},
        {id: 3, message: 'text message'},
        {id: 4, message: 'text message'},
        {id: 5, message: 'text message'}
    ] as Array<MessageType>

}

const dialogReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/dialogPage/SEND_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'social-network/dialogPage/SEND_MESSAGE', newMessageBody} as const)
}

type ActionTypes = InferActionTypes<typeof actions>
type DialogType = {
    name: string
    id: number
}
type MessageType = {
    id: number
    message: string
}
export type InitialStateType = typeof initialState

export default dialogReducer