import React, {FC} from 'react'
import s from './Message.module.css'

type PropsType = {
    id: number
    message: string
}
const Message: FC<PropsType> = (props) => {
    return <div className={s.dialog}>
        {props.message}
    </div>
}
export default Message