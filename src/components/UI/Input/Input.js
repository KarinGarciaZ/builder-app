import React from 'react';
import classes from './Input.css';

const input = ( props ) => {
  let imputElement = null;
  let inputClasses = [ classes.InputElement ]

  if ( !props.valid && props.shouldValidate && props.touched )
    inputClasses.push(classes.Invalid);
  if ( props.valid && props.shouldValidate && props.touched ) 
    inputClasses.push(classes.Valid);

  switch( props.inputtype ) {
    case 'input':
      imputElement = <input className={ inputClasses.join(' ') } { ...props.elementConfig } value={ props.value } onChange={props.changed}/>
      break;
    case 'textarea':
      imputElement = <textarea className={ inputClasses.join(' ') } { ...props.elementConfig } value={ props.value } onChange={props.changed}/>
      break;
    default:
      imputElement = <input className={ inputClasses.join(' ') } { ...props.elementConfig } value={ props.value } onChange={props.changed}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {imputElement}
    </div>
  );

}

export default input;