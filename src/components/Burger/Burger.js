import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from 'react-router-dom';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map( ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map( (_,i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (!transformedIngredients.length){
    transformedIngredients = <p>Please add ingredients.</p>
  }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {
        transformedIngredients
      }
        <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default withRouter( burger );