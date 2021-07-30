import React from 'react';
import preloader from '../../Assets/Images/preloader.png'
import s from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={s.size}>
        <img  src={preloader}/>
    </div>
}
export default Preloader;