import React from 'react';
import clases from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Button from '../../UI/Button/Button';

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
        <Button btnType={'OrderButton'} disabled={props.purchasable} clicked={props.clickPurchase}>Purchase</Button>
      </div>
      {allControls}
    </div>    
  )
}

export default buildControls;