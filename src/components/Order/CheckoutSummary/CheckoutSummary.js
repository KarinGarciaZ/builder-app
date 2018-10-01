import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>I hope this works!</h1>
      <div style={{width: '100%', height: '100%', margin:'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="CancelButton" clicked={props.checkoutCancelled} disabled>Cancel</Button>
      <Button btnType="SuccessButton" clicked={props.checkoutContinue} disabled>Continue</Button>
    </div>
  )
}

export default checkoutSummary;