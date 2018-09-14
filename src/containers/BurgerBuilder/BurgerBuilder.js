import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  salad: .4,
  meat: 1.3,
  bacon: .7,
  cheese: .5
}

class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false
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
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          clickedButton={this.clickedButonControl} 
          disabledButtons={disabledIngredient}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;