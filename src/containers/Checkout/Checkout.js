import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

  state = {
    ingredients: {
      bacon: 1,
      salad: 1,
      cheese: 1,
      meat: 1
    }
  }

  cancelled = () => {
    this.props.history.replace('/')
    
  }

  continue = () => {
  }
   
  render () {
    console.log('this.props: ', this.props);
    return(
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.cancelled}
          checkoutContinue={this.continue}
          />
      </div>
    )
  }
}

export default Checkout;