import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>
                        User1
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>
                        User2
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>
                        User3
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}>
                        User4
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.active}>
                        User5
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' activeClassName={s.active}>
                        User6
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7' activeClassName={s.active}>
                        User7
                    </NavLink>
                </div>

            </div>
            <div className={s.message}>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>
                <div className={s.dialog}>
                    text message
                </div>


            </div>
        </div>
    )
}
export default Dialogs;