import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            placeholder={props.placeholder}
            className={classes.input}
        />
    )
}

export default Input;