import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';

export default class deliveryJobInfo extends Component {

    render() {
        return (
            <div>
                <Alert color="success">
                <h3 className="alert-heading" class="mx-auto">VACANCIES AVAILABLE!</h3>
                <p>We are looking to hire reliable Deliverymen to deliver packages to customers.</p>
                
                <h4><Icon.InfoSquareFill/> Deliverymen Responsibilities:</h4>
                <ol>
                   <li>Distributing various packages to specified locations within a given time frame.</li> 
                   <li>Planning daily travel routes based on locations and time frames.</li>
                   <li>Carefully loading and unloading all packages.</li>
                   <li>Answering customers’ questions and responding to complaints in a professional manner.</li>
                   <li>Investigating any discrepancies with the delivered packages.</li>
                   <li>Obtaining customers' signatures on delivery papers upon completion of each delivery.</li>
                   <li>Cleaning, washing, refueling, and maintaining the company vehicle.</li>
                   <li>Promptly reporting any road accidents and traffic violations to the company.</li>
                </ol>
                
                <h4><Icon.InfoSquareFill/> Requirements:</h4>
                <ol>
                   <li>Males Only.</li>
                   <li>Valid driver's license.</li> 
                   <li>Clean driving record.</li>
                </ol>
                
                <p >
                Those who are interested can <Link to={'/createDelivery'}>Apply Now <Icon.PencilSquare/></Link> !
                </p>
               </Alert>
            </div>

            
            
            
        )
    }
}