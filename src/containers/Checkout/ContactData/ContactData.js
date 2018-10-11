import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    customerInfo: {

      customer: {
        elementType: 'input',
        valid: false,
        touched: false, 
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        validation: {
          required: true,
          maxLength: 100
        }
      },

      address: {
        elementType: 'input',
        valid: false,
        touched: false, 
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your address'
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 150
        }
      },

      email: {
        elementType: 'input',
        value: '',
        valid: false,
        touched: false,
        elementConfig: {
          type: 'email',
          placeholder: 'Your mail'
        }, 
        validation: {
          mailValidation: true,
          maxLength: 100
        }
      },
    },    
    ingredients: {},
    total_price: 0,    
    loading: false
  }

  componentDidMount() {
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
       customer: this.state.customerInfo.customer.value,
       address: this.state.customerInfo.address.value,
       email: this.state.customerInfo.email.value
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

  checkValidity(value, rules) {
    let isValid = [];

    if( rules.required )
      isValid.push(value.trim() !== '');

    if( rules.minLength )
      isValid.push(value.trim().length >= rules.minLength);

    if( rules.maxLength )
      isValid.push(value.trim().length <= rules.maxLength);

    if( rules.mailValidation ) 
      if ( value.includes('@') ) {
        let arrMail = value.split('@')
        if ( arrMail.length <= 2 ) {
          if ( arrMail[0].length > 0 && arrMail[1].length > 2 ) {
            if ( arrMail[1].includes('.') )
              isValid.push(true); 
            else isValid.push(false);
          } else isValid.push(false);    
        } else isValid.push(false);
      } else isValid.push(false);

    for( let bool of isValid )
      if ( !bool ) return false;
    return true;
    
  }

  changedValueInput = ( id, event ) => {
    let customer = { ...this.state.customerInfo }
    let values = { ...customer[id] }
    values.value = event.target.value;
    values.valid = this.checkValidity( values.value, values.validation )
    values.touched = true
    customer[id] = values;
    this.setState({ customerInfo: customer })
  }

  render () {
    
    let formElementArray = [];
    for ( let key in this.state.customerInfo ) {
      formElementArray.push( {
        id: key,
        config: this.state.customerInfo[key]
      })
    }

    let form = (<form onSubmit={this.makeOrder}>      
      {formElementArray.map( formElement => {
        return <Input 
          key={formElement.id} 
          inputtype={formElement.config.elementType} 
          elementConfig={formElement.config.elementConfig} 
          value={formElement.config.value} 
          changed={( event ) => this.changedValueInput(formElement.id, event)}
          valid={formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          />
      })}
      <Button btnType="SuccessButton" disabled >Order</Button>
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