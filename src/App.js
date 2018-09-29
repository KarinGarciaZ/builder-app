import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Aux from './hoc/Aux'
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Aux>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/" component={BurgerBuilder}/>
            </Switch>
          </Layout>
        </Aux>      
      </BrowserRouter>
    );
  }
}

export default App;
