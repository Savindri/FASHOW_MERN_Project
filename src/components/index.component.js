import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

import 'jspdf-autotable';
import jsPDF from 'jspdf';

import { Button, Label } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';

export default class Index extends Component {

    constructor(props) {
        super(props);
        //this.getSum = this.getSum.bind(this);

        this.state = {payment: [],
         //searchPayment : ""
        };
      }
      componentDidMount(){
        axios.get('http://localhost:4002/payment')
          .then(response => {
            this.setState({ payment: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      tabRow(){
        return this.state.payment.map(function(object,i){
            return <TableRow obj={object} key={i} />;
        });
      }


      // getSum() {
      //   let sum = 0;
      //   const rowSum = this.state.rowData.map(
      //     row => (row.Quantite * row.Prix) || 0
      //   );
      //   if (rowTotals.length > 0) {
      //     grandTotal = rowTotals.reduce((acc, val) => acc + val);
      //   }
      //   return grandTotal;
      // }

    //   deletePayment(id){
    //     axios.delete('http://localhost:4002/payment/' + id)
    //     .then(res => console.log(res.data));
    //     this.setState({
    //         payment : this.state.payment.filter(pay => pay._id !== id)
    //     })
    // }

      // tabRow2(){
      //   return this.state.payment.map(function(object,currentpayment,i){
      //         return <TableRow obj={object} payment={currentpayment} key={i}/>;
      //   })
      // }

    //   searchPaymentList(){

    //     return this.state.payment.map((currentpayment) => {
    //         if (
    //             this.state.searchPayment ==
    //             currentpayment.first_name
    //         ){
    //             return (
    //                 <tr>

    //                 <td>{currentpayment.date}</td>
    //                 <td>{currentpayment.first_name}</td>
    //                 <td>{currentpayment.last_name}</td>
    //                 <td>{currentpayment.mobile}</td>
    //                 <td>{currentpayment.address}</td>
    //                 <td>{currentpayment.deli_meth}</td>
    //                 <td>{currentpayment.pay_meth}</td>  
                    
    //                 </tr>
    //             );
    //         }
    //     });
    // }



    //Report generation part starting from here
    //FASHOW Gems & Jewelleries- Payment and Delivery Report
    exportPaymentsPDF = () => {
      console.log("Report Downloaded")


      const unit = "pt";
      const size = "A3";
      const orientation = "landscape";
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);

      const title = "FASHOW Gems & Jewelleries - Payment and Delivery Records Report";
      const headers = [["Date","First_Name", "Last_Name", "Mobile", "Address", "Delivery_Method", "Payment_Method", "Order_Charge","Delivery_Charge","Total_Payment"]];

       const payment = this.state.payment.map(
       payment => [
          payment.date,
          payment.first_name,
          payment.last_name,
          payment.mobile,
          payment.address,              
          payment.deli_meth,
          payment.pay_meth,
          payment.ord_cha,
          payment.deli_cha,
          payment.tot_pay        
      ]
    );

      let content = {
          startY: 50,
          head: headers,
          body: payment
      };
      doc.setFontSize(20);
      doc.text(title, marginLeft, 40);
      require('jspdf-autotable');
      doc.autoTable(content);
      doc.save("FASHOW_Gems_&_Jewelleries_Payment_and_Delivery_Report.pdf")
  }


    render() {
        return (
        <div>
          <div>
            <Label><b>Search<Icon.Search/></b></Label><br></br>             
            <input style={{ width: "200px", marginTop:"10px"}}
                type="text"
                placeholder="Search by Name"
                label="Search"
                onChange={(e) => {
                    this.setState({
                      searchPayment: e.target.value
                    });
                }}
            />
          </div>
          
          <Button className="btn btn-success float-right" onClick={this.exportPaymentsPDF}>Report <Icon.FileEarmarkArrowDownFill/></Button>
          
          <h3 align="center">Payment List</h3><br/>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Delivery Method</th>
                <th>Payment Method</th>
                <th>Order Charge</th>
                <th>Delivery Charge</th>
                <th>Total Payment</th>
                <th colSpan="2">Action</th>
              </tr>
              
            </thead>
            <tbody>
              {this.tabRow()}
              {/* { this.state.searchPayment == "" ? this.tabRow2() : this.searchPaymentList() } */}
            </tbody>
            {/* <tr>Sum.......................................</tr> */}

          </table>
        </div>
        )
    }
}