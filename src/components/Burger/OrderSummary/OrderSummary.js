import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
        <Button btnType="CancelButton"  clicked={this.props.cancelPurchase} disabled>Cancel</Button>
        <Button btnType="SuccessButton" clicked={this.props.continuePurchase} disabled>Continue</Button>
      </Aux>
    )
  }
  
}

export default OrderSummary;