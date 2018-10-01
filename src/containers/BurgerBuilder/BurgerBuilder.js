import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICES = {
  salad: .4,
  meat: 1.3,
  bacon: .7,
  cheese: .5
}

class BurgerBuilder extends Component {
  
  state = {
    ingredients: null,
    totalPrice: 2,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  componentDidMount () {
    axios
      .get('/order/initialIngredients').then( res => {
        this.setState({ ingredients: res.data })
      })
      .catch( error => {

      })
  }

  updatePurchaseState () {
    const ingredients = {...this.state.ingredients}
    let sum = 0;
    for(let key in ingredients)
      sum = sum + ingredients[key]    
    this.setState({
      purchasable: sum > 0
    })
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  continuePurchaseHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push(encodeURIComponent('total_price') + '=' + encodeURIComponent(this.state.totalPrice))
    const stringQuery = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + stringQuery
    });
  }

  clickedButonControl = (ingredient, plusLess) => {
    let updatedIngredients = {...this.state.ingredients}    
    updatedIngredients[ingredient] = updatedIngredients[ingredient] + plusLess;
    if(updatedIngredients[ingredient] < 0)
      return;
    this.setState((prev, props) => {
      return {                
        ingredients : updatedIngredients,
        totalPrice: prev.totalPrice + INGREDIENTS_PRICES[ingredient] * plusLess
      }
    },() => this.updatePurchaseState())
  }

  render () {
    const disabledIngredient = {...this.state.ingredients}
    for(let key in disabledIngredient)
      disabledIngredient[key] = disabledIngredient[key] <= 0

    let orderSummary = null;

    let burger = <Spinner />;

    if( this.state.ingredients ) {
      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        cancelPurchase={this.cancelPurchaseHandler} 
        continuePurchase={this.continuePurchaseHandler}
        price={this.state.totalPrice}/>;

      burger = (
        <Aux>         
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
            clickedButton={this.clickedButonControl} 
            disabledButtons={disabledIngredient}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            clickPurchase={this.purchaseHandler}/>
        </Aux>
      );
    }    
    
    if( this.state.loading ) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>      
        <Modal show={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>        
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);