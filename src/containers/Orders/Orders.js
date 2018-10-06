import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  
  state = {
    orders: [],
    loading: false
  }

  componentWillMount() {
    this.setState({ loading: true })
    axios.get('/order/')
    .then( res => {
      this.setState({ loading: false })
      this.setState({ orders: res.data })
    })
    .catch( eror => {
      this.setState({ loading: false })
    })
  }

  render () {

    let orders = this.state.orders.map( order => {
      return <Order key={order.order_id} order={order}/>
    })

    if( this.state.loading )
      orders = <Spinner />

    return (
      <div>
        {orders}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);