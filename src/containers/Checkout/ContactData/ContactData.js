import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    ingredients: {},
    customerInfo: {},
    total_price: 0,    
    loading: false
  }

  componentDidMount() {
    console.log('this.props: ', this.props);
    this.setState({ 
      ingredients: this.props.ingredients, 
      total_price: this.props.total       
    })
  }

  makeOrder = ( event ) => {
    event.preventDefault();
    this.setState({ loading: true });
     const order = {
       salad: this.state.ingredients.salad,
       bacon: this.state.ingredients.bacon,
       cheese: this.state.ingredients.cheese,
       meat: this.state.ingredients.meat,
       total_price: this.state.total_price,
       customer: 'Karin',
       address: 'Marcos Gordoa 51',
       email: 'karin@gmail.com'
     }
     axios.post('/order/', order)
       .then( responce => {
        console.log('responce: ', responce);
        this.setState({ loading: false });
        this.props.history.push('/')
       } )
       .catch( error => {
         console.log('error: ', error);
         //this.setState({ loading: false, purchasing: false })     
       })
  }

  render () {
    let form = (<form>
      <input className={classes.Input} type="text" name="customer" placeholder="Your name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your email" />
      <input className={classes.Input} type="text" name="address" placeholder="Your address" />
      <Button btnType="SuccessButton" clicked={this.makeOrder} disabled >Order</Button>
    </form>);

    if( this.state.loading )
      form = <Spinner />
    return(
      <div className={classes.ContactData}>
        <h3>Enter your contact data!</h3>
        {form}
      </div>
    )
  }
}

export default ContactData;