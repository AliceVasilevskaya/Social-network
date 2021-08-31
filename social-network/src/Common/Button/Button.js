import s from './Button.module.css'
import React from "react";
import classNames from "classnames";

export const Button = ({children, onClick, disabled, active, className, ...props}) => {
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

