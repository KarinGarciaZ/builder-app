import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
      return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>      
      <p><strong>Total price: ${props.price.toFixed(2)}</strong></p>
      <button className={classes.CancelButton} onClick={props.cancelPurchase}>Cancel</button>
      <button className={classes.SuccessButton} onClick={props.continuePurchase}>Continue</button>
    </Aux>
  )
}

export default orderSummary;