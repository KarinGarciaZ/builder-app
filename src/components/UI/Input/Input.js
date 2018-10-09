import React from 'react';
import classes from './Input.css';

const input = ( props ) => {
  let imputElement = null;

  switch( props.inputtype ) {
    case 'input':
      imputElement = <input className={ classes.InputElement } { ...props.elementConfig } value={ props.value } />
      break;
    case 'textarea':
      imputElement = <textarea className={ classes.InputElement } { ...props.elementConfig } value={ props.value } />
      break;
    default:
      imputElement = <input className={ classes.InputElement } { ...props.elementConfig } value={ props.value } />
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {imputElement}
    </div>
  );

}

export default input;