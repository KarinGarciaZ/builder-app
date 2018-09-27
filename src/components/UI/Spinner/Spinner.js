import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => {
  return(
    <div className={classes.ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default spinner;