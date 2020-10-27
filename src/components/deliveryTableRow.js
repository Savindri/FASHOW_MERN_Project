import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';

class deliveryTableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4002/delivery/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
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
            {this.props.obj.nic}
          </td>
          <td>
            {this.props.obj.mobile}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.gender}
          </td>
          <td>
            {this.props.obj.type}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-outline-primary"><Icon.PencilFill/></Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-outline-danger"><Icon.TrashFill/></button>
          </td>
        </tr>
    );
  }
}

export default deliveryTableRow;