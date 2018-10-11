import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {

  state = {
    ingredients: {
      bacon: 1,
      salad: 1,
      cheese: 1,
      meat: 1
    },
    total_price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);    
    const ingredients = {};
    for (let param of query.entries()){
      if(this.state.ingredients[param[0]])
        ingredients[param[0]] = +param[1]
      else
        this.setState({total_price: param[1]})
    }
    this.setState({ingredients})
  }

  cancelled = () => {
    this.props.history.goBack()
    
  }

  continue = () => {
    this.props.history.replace(this.props.match.url + '/contactinfo')
    
  }
   
  render () {
    return(
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.cancelled}
          checkoutContinue={this.continue}
          />
          <Route path="/checkout/contactinfo" render={ (props) => (<ContactData ingredients={this.state.ingredients} total={this.state.total_price} {...props}/>) }/>
      </div>
    )
  }
}

export default Checkout;