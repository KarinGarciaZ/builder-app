import React, {Component} from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  toggleDrawerCloseHandler = () => {
    this.setState( prev => {
      return {showSideDrawer: !this.state.showSideDrawer}
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar toggleClicked={this.toggleDrawerCloseHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )    
  }
}

export default Layout;