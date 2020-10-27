import React, { Component } from 'react';
import axios from 'axios';
import DeliveryTableRow from './deliveryTableRow';

import * as Icon from 'react-bootstrap-icons';
import { Button, Label } from 'reactstrap';

import 'jspdf-autotable';
import jsPDF from 'jspdf';

export default class deliveryIndex extends Component {

  constructor(props) {
      super(props);
      this.state = {delivery: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4002/delivery')
        .then(response => {
          this.setState({ delivery: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    DeliverytabRow(){
      return this.state.delivery.map(function(object, i){
          return <DeliveryTableRow obj={object} key={i} />;
      });
    }


    //Report Generation
    exportDeliveryMenPDF = () => {
      console.log("Report Downloaded")


      const unit = "pt";
      const size = "A3";
      const orientation = "landscape";
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);

      const title = "FASHOW Gems & Jewelleries - Report of Applicants for Deliverymen";
      const headers = [["Date","First_Name", "Last_Name", "NIC", "Mobile", "Email", "Gender", "Type"]];

       const delivery = this.state.delivery.map(
        delivery => [
          delivery.date,
          delivery.first_name,
          delivery.last_name,
          delivery.nic,
          delivery.mobile,              
          delivery.email,
          delivery.gender,
          delivery.type        
      ]
    );

      let content = {
          startY: 50,
          head: headers,
          body: delivery
      };
      doc.setFontSize(20);
      doc.text(title, marginLeft, 40);
      require('jspdf-autotable');
      doc.autoTable(content);
      doc.save("FASHOW_Gems_&_Jewelleries_Deliverymen_Applicants_Report.pdf")
  }




    render() {
      return (        
        <div>
          <div>
            <Label><b>Search<Icon.Search/></b></Label><br></br>             
            <input style={{ width: "200px", marginTop:"10px"}}
                type="number"
                placeholder="Search by NIC"
                label="Search"
                onChange={(e) => {
                    this.setState({
                      searchDelivery: e.target.value
                    });
                }}
            />
          </div>

          <Button className="btn btn-success float-right" onClick={this.exportDeliveryMenPDF}>Report <Icon.FileEarmarkArrowDownFill/></Button>
          
          <h3 align="center">Deliverymen List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>NIC</th>
                <th>Mobile</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th>Type</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.DeliverytabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }