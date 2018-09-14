import React from 'react';
import clases from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {

  let allControls = controls.map( control => {
    return <BuildControl 
      clickedButton={( moreLess ) => props.clickedButton( control.type , moreLess)} 
      key={control.label} 
      label={control.label} 
      disabledButton={props.disabledButtons[control.type]}/>
  })

  return (
    <div className={clases.BuildControls}>
      <div>
        Current price: ${props.price.toFixed(2)}
      </div>
      <div>
        <button className={clases.OrderButton} disabled={!props.purchasable}>Purchase</button>
      </div>
      {allControls}
    </div>    
  )
}

export default buildControls;