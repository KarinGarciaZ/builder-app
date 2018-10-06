import React from 'react';
import classes from './Order.css';

const order = (props) => (


  <div className={classes.Order}>
    <p>{props.order.order_id}</p>
    <p>Ingredients: Bacon ({props.order.bacon}), salad ({props.order.salad}), meat ({props.order.meat}), cheese ({props.order.cheese})</p>
    <p>Price:  <strong>USD {props.order.total_price.toFixed(2)}</strong></p>
  </div>
);

export default order;