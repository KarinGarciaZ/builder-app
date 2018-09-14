import React from 'react';
import clases from './BuildControl.css';

const buildControl = (props) => {
  return(
    <div className={clases.BuildControl}>
      <div className={clases.Label}>{props.label}</div>
      <button className={clases.Less} onClick={props.clickedButton.bind(this, -1)} disabled={props.disabledButton}>Less</button>
      <button className={clases.More} onClick={props.clickedButton.bind(this, 1)}>More</button>
    </div>
  )
}

export default buildControl;