import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map( igKey => {
      return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>      
        <p><strong>Total price: ${this.props.price.toFixed(2)}</strong></p>
        <button className={classes.CancelButton} onClick={this.props.cancelPurchase}>Cancel</button>
        <button className={classes.SuccessButton} onClick={this.props.continuePurchase}>Continue</button>
      </Aux>
    )
  }
  
}

export default OrderSummary;