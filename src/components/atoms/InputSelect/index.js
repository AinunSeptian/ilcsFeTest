import React from 'react';

import Select from 'react-select';
import classes from './InputSelect.module.css';

const InputSelect = (props) => {
  return (
    <Select options={props.options} id={props.id} placeholder="" className={classes.select} />
  )
}

export default InputSelect;