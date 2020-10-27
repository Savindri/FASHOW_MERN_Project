import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';


import paymentDetails from './components/paymentDetails.component';
import Index from './components/index.component';
import paySuccess from './components/paySuccess.component';

import createDelivery from './components/createDeliverymen.component';
import editDelivery from './components/editDelivery.component';
import deliveryIndex from './components/deliveryIndex.component';
import deliveryJobInfo from './components/deliveryJobInfo.component';


class App extends Component {

    // constructor(props) {
    //   super(props);
    //   this.historyChange = this.historyChange.bind(this);
    // }

    // historyChange(){
    //   this.props.history.push('/index');
    // }

    // constructor(props) {
    //   super(props);
    //   this.handleCreateNavigation = this.handleCreateNavigation.bind(this);
    // }

    // handleCreateNavigation(){ 
    //   this.props.history.push('/create') 
    // } 

  render() {
    return (
      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">          
          <img src="fashowlogo.jpeg" alt="Logo" width="90px"/>
            <h1 style={{fontSize :'40px'}} className="navbar-brand" class="font-italic">FASHOW Gems and Jewellery</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link" style={{marginLeft:'50px'}} ><Icon.HouseFill/>Home</Link>
              </li>               
              <li className="nav-item">
                <Link to={'/deliveryJobInfo'} className="nav-link" style={{marginLeft:'50px'}}><Icon.PeopleFill/>  Job-Opportunities</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link" style={{marginLeft:'50px'}}><Icon.CartFill/>Cart</Link>
              </li>
              </ul>
            </div>            
          </nav>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-info navbar-dark sticky-top">            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={'/paymentDetails'} className="nav-link" style={{color:'white'}}>Checkout<Icon.BagCheckFill/></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link" style={{color:'white',marginLeft:'600px'}}>Payments<Icon.ClipboardData/></Link>
                </li>
                <li className="nav-item nav-link" style={{color:'white',marginLeft:'50px'}}> | </li>
                <li className="nav-item">
                  <Link to={'/deliveryIndex'} className="nav-link" style={{color:'white',marginLeft:'50px'}}>Deliverymen-Applicants <Icon.ClipboardData/></Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/paymentDetails' component={ paymentDetails } />              
              <Route path='/index' component={ Index } />
              <Route path='/paySuccess' component={ paySuccess } />

              <Route path='/createDelivery' component={ createDelivery } />
              <Route path='/edit/:id' component={ editDelivery } />
              <Route path='/deliveryIndex' component={ deliveryIndex } />
              <Route path='/deliveryJobInfo' component={ deliveryJobInfo } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;