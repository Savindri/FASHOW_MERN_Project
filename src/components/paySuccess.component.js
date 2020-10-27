import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

export default class paySuccess extends Component {
    render() {
        return (
            <div>
               <Alert color="success">                    
                    <h4 className="alert-heading"><Icon.CheckSquareFill/> CONFIRMED!</h4><br/>
                    <p>
                    Your order has been successfully placed and we will begin processing it soon.<br/>
                     Thank You for shopping with us!<br/>
                     Have a Nice Day!
                    </p>
                    <hr />
                    <p className="mb-0">
                    For any inquiries and further information, please <Link to={'/'} className="alert-link">contact us<Icon.TelephoneFill/></Link>.
                    
                    </p>
                </Alert>
            </div>
        )
    }
}
