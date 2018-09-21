import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('jejeje');
  }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} cancelPurchase={this.props.cancelPurchase}/>
        <div 
        className={classes.Modal}
        style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
          {this.props.children}
        </div>
      </Aux>
      
    );
  }
} 

export default Modal;