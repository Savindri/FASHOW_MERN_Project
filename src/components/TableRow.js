import React, { Component } from 'react';
import axios from 'axios';
import 'jspdf-autotable';
import * as Icon from 'react-bootstrap-icons';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        //  this.state = {
        //    isToggleOn:false
        //  }
        //  this.statusHandler = this.statusHandler.bind(this);       
    }
    delete() {
        axios.get('http://localhost:4002/payment/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    //  statusHandler(){
    //    //change status
    //    this.setState(state =>({
    //        isToggleOn:!state.isToggleOn
    //    }));
    //  }

    
  render() {
    return (
        
        <tr>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.mobile}
          </td>
          <td>
            {this.props.obj.address}
          </td>
          <td>
            {this.props.obj.deli_meth}
          </td>
          <td>
            {this.props.obj.pay_meth}
          </td>
          <td>
          {this.props.obj.ord_cha}
          </td>
          <td>
            {this.props.obj.deli_cha}
          </td>
          <td>
            {this.props.obj.tot_pay}
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-outline-danger"><Icon.TrashFill/></button>
          {/* <button onClick={this.statusHandler} className="btn btn-info">{this.state.isToggleOn ? "Done":"Ongoing"}</button> */}
          {/* if true-ongoing,else-done */}
          {/* {this.state.isInEditMode ? this.editView() : this.defaultView()} */}
          </td>          
        </tr>                               
    );
    
  }
}

export default TableRow;