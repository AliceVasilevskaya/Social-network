import React, {FC} from 'react'
import s from './Preloader.module.css'

type PropsType = {}
const Preloader: FC<PropsType> = () => {
    return <div className={s.preloader}>
        {/*<img  src={preloader}/>*/}
        Loading...
    </div>
}
export default Preloader