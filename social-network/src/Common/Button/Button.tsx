import s from './Button.module.css'
import React, { FC } from "react";
import classNames from "classnames";

type ButtonType = {
    children: string
    onClick?: any
    disabled?: any
    active?: any
    className?: any
}

export const Button: FC<ButtonType> = ({children, onClick, disabled, active, className, ...props}) => {
    const classes = classNames(
        s.button,
        className,
        {active}
    )
    return (
        <div>
            <button
                {...props}
                className={classes}
                onClick={onClick}
                disabled={disabled}
            >{children}</button>
        </div>
    )
};

