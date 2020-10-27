import React, { Component } from 'react';
import axios from 'axios';
import {Alert, Card , CardHeader, CardBody, CustomInput, Input, Button} from 'reactstrap';
import * as icon from 'react-bootstrap-icons';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default class paymentDetails extends Component {

        constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeDeliMeth = this.onChangeDeliMeth.bind(this);
        this.onChangePayMeth = this.onChangePayMeth.bind(this);
        this.onChangeOrdCha = this.onChangeOrdCha.bind(this);
        this.onChangeDeliCha = this.onChangeDeliCha.bind(this);
        this.onChangeTotPay = this.onChangeTotPay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          date:'',
          first_name: '',
          last_name: '',
          mobile:'',
          deli_meth:'',
          address:'',
          pay_meth:'',
          ord_cha:Math.floor((Math.random() * 10) + 1) * 10000,
          deli_cha:150,
          tot_pay:'',
          
          firstNameError:'',
          lastNameError:'',
          mobileError:'',
          addressError:'',
        }
      }
      onChangeDate(e){
        this.setState({
          date: e.target.value
        });
      }
      onChangeFirstName(e) {
        this.setState({
          first_name: e.target.value
        });
      }
      onChangeLastName(e) {
        this.setState({
          last_name: e.target.value
        })  
      }
      onChangeMobile(e) {
        this.setState({
          mobile: e.target.value
        })
      }
      onChangeDeliMeth = input => e => {
        this.setState({
          [input]: e.target.value 
        })
      }
      onChangeAddress(e){
          this.setState({
              address: e.target.value
          })
      }
      onChangePayMeth = input => e => {
        this.setState({
          [input]: e.target.value 
        })
      }
      onChangeOrdCha(e){
        this.setState({          
          ord_cha:e.target.value
        })
      }
      onChangeDeliCha(e){
        this.setState({          
          deli_cha:e.target.value
        })
      }
      onChangeTotPay(e){
        this.setState({          
          tot_pay:e.target.value
        })
      }

      
    

              
        // var elem = document.getElementById('paydetails'),
        //     checkBox = document.getElementById('recidetails');
        // checkBox.checked = false;
        // checkBox.onchange = function() {
        //   elem.style.display = this.checked ? 'block' : 'none';
        //  };
        // checkBox.onchange();
      
      
       showHidePayDetails(){
         if(document.getElementById('recipientInfo').checked){
             document.getElementById('paydetails').style.display='block'
         }else{
             document.getElementById('paydetails').style.display='none'
         }
       }

       showHideBillDetails(){
        if(document.getElementById('paydetailscheck').checked){
            document.getElementById('billdetails').style.display='block'
        }else{
            document.getElementById('billdetails').style.display='none'
        }
      }

      showHideSubmitBtn(){
        if(document.getElementById('billdetailscheck').checked){
            document.getElementById('submitbtn').style.display='block'
        }else{
            document.getElementById('submitbtn').style.display='none'
        }
      }

        validate = () => {
        let isError = false;
        
        const errors = {
          firstNameError: "",
          lastNameError: "",
          mobileError:"",
          addressError: ""
        };
        
        if (this.state.first_name.length < 2) {
          isError = true;
          errors.firstNameError = <Alert color="danger">First name needs to be atleast 2 characters long</Alert>;
        }
    
        if (this.state.last_name.length < 2) {
          isError = true;
          errors.lastNameError = <Alert color="danger">Last name needs to be atleast 2 characters long</Alert>;
        }
    
        if (this.state.mobile.length < 10) {
          isError = true;
          errors.mobileError = <Alert color="danger">Requires a valid mobile number</Alert>;
        }
    
        if (this.state.address.length < 10) {
          isError = true;
          errors.emailError = <Alert color="danger">Requires a valid address</Alert>;
        }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };
      

       onSubmit(e) {
         e.preventDefault();
         const err = this.validate();
        if (!err) {
          // clear form
           const obj = {
             date:this.state.date,
             first_name: this.state.first_name,
             last_name: this.state.last_name,
             mobile: this.state.mobile,
             deli_meth: this.state.deli_meth,
             address: this.state.address,
             pay_meth: this.state.pay_meth,
             ord_cha: this.state.ord_cha,
             deli_cha: this.state.deli_cha,
             tot_pay:this.state.ord_cha+this.state.deli_cha

                         
           };
           axios.post('http://localhost:4002/payment/add', obj)
               .then(res => console.log(res.data));

          
           this.setState({
             date:'',
             first_name: '',
             last_name: '',
             mobile:'',
             deli_meth:'',
             address:'',
             ord_cha:'',
             deli_cha:'',
             tot_pay:''
             
           })
           window.location = 'paySuccess'
        }
        
       }
     

      //   state = {
      //    selectedFile:null
      //  }
    
      //   fileSelectHandler = event =>{
      //    this.setState({
      //       selectedFile: event.target.files[0]
      //    })
      //   }
       
      //   fileUploadHandler = () =>{
      //    const fd = new FormData();
      //    fd.append('image', this.state.selectedFile, this.state.selectedFile.name );
      //    axios.post('http://localhost:4002/Images/image',fd)
      //    .then(res => {
      //      console.log(res);
      //    });
      //   }

      demoClicked(){
        this.setState({
            date:'2020-10-20',
            first_name:'Nimesha',
            last_name:'Abesinghe',
            mobile:'0781112221',
            address:'72/6, ABC Road, Malabe',
        })
      }    

    render() {
      
        return (
            <div style={{marginTop: 10}}>
              <form onSubmit={this.onSubmit}>
              <Card body outline color="success" >
              <h2 style={{fontSize :'30px'}} className="navbar-brand" class="mx-auto">Payment and Delivery Details</h2>              
              <CardHeader>Step 1 of 3</CardHeader>
              <CardBody>
                <div id="recidetails">
                  <h3>Recipient Details</h3>
                    <div className="form-group">                    
                      <label>Date: </label>
                      <Input
                        type="date"
                        name="date"
                        id="Date"
                        className="form-control"
                        placeholder="date placeholder"
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        required/>
                      </div>
                      <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.first_name}
                               onChange={this.onChangeFirstName}
                               required/>
                               {this.state.firstNameError}
                    </div>
                    <div className="form-group">
                        <label>Last Name:  </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.last_name}
                               onChange={this.onChangeLastName}
                               required/>
                               {this.state.lastNameError}
                    </div>
                    <div className="form-group">
                        <label>Mobile: </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.mobile}
                               onChange={this.onChangeMobile}
                               required/>
                               {this.state.mobileError}
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.address}
                               onChange={this.onChangeAddress}
                               required
                              />
                              {this.state.addressError}
                    </div>
                </div>

                <div>                
                <h5>Delivery Method</h5>
                
                <FormControl component="fieldset">
                        <RadioGroup onChange={this.onChangeDeliMeth("deli_meth")}>

                            <FormControlLabel 
                                control={<Radio required/>}
                                name="deli_meth"
                                value="In-Person Pickup" 
                                label="In-Person Pickup" 
                            />

                            <FormControlLabel 
                                control={<Radio required/>}
                                name="deli_meth" 
                                value="Courier Service" 
                                label="Courier Service"
                            />
                        </RadioGroup> 
                </FormControl>
                </div>

                 {/* <div>
                  <input type="file" onChange={this.fileSelectHandler} />
                  <button onClick={this.fileUploadHandler}>Upload</button>
                </div> */}
                

                {/* <div>
                <input type="file" className="form-control" name="file" />
                </div> */}

                <CustomInput 
                  type="checkbox" 
                  id="recipientInfo" 
                  name="recipientInfo" 
                  value="yes" 
                  onClick={this.showHidePayDetails}
                  label="The above provided details are correct."/>

                 {/* Demo button */}
                  <Button size = "sm" onClick={() => this.demoClicked()} className="btn btn-success float-right"><icon.CaretRightFill/>Demo</Button>

                </CardBody>
                </Card>

                
                <div id="paydetails" style={{display: 'none'}}>
                <Card body outline color="success">
                <CardHeader>Step 2 of 3</CardHeader>
                <CardBody>
                  <h3>Payment Details</h3>
                  <FormControl component="fieldset">
                        <RadioGroup onChange={this.onChangePayMeth("pay_meth")}>

                            <FormControlLabel 
                                control={<Radio required/>}
                                name="pay_meth"
                                value="Bank Transfers and Deposits" 
                                label="Bank Transfers and Deposits" 
                            />
                        </RadioGroup>
                  </FormControl>
                  <br/>
                  <CustomInput 
                    type="checkbox" 
                    id="paydetailscheck" 
                    name="paydetailscheck" 
                    value="yes" 
                    onClick={this.showHideBillDetails}
                    label="The above provided details are correct."/>
                
                </CardBody>
                </Card>
                </div>
                
                <div id="billdetails" style={{display: 'none'}}>
                <Card body outline color="success">                
                <CardHeader>Step 3 of 3</CardHeader>
                <CardBody>
                  <h3>Billing Details</h3>
                    
                    First Name: <br/><b>{this.state.first_name}</b><br/><br/>
                    Last Name: <br/><b>{this.state.last_name}</b><br/><br/>
                    Mobile: <br/><b>{this.state.mobile}</b><br/><br/>
                    Address: <br/><b>{this.state.address}</b><br/><br/>
                    Delivery Method: <br/><b>{this.state.deli_meth}</b><br/><br/>
                    Payment Method: <br/><b>{this.state.pay_meth}</b><br/><br/>

                    Order Charges: <b>Rs.<Input type="text" size="sm" style={{ borderColor: 'white',backgroundColor: 'white',width: "100px", fontWeight: 'bold'}} className="form-control" value={this.state.ord_cha} onChange={this.onChangeOrdCha} readOnly/></b><br/>
                    Delivery Charges: <b>Rs.<Input type="text" size="sm" style={{ borderColor: 'white',backgroundColor: 'white',width: "100px", fontWeight: 'bold'}} className="form-control" value={this.state.deli_cha} onChange={this.onChangeDeliCha} readOnly/></b><br/>
                    Total Payment: <b>Rs.<Input type="text" size="sm" style={{ borderColor: 'white',backgroundColor: 'white',width: "100px", fontWeight: 'bold'}} className="form-control" value={this.state.ord_cha+this.state.deli_cha} onChange={this.onChangeTotPay} readOnly/></b><br/>

                    <CustomInput 
                      type="checkbox" 
                      id="billdetailscheck" 
                      name="billdetailscheck" 
                      value="yes" 
                      onClick={this.showHideSubmitBtn}
                      label="The above provided details are correct."/>
                
                </CardBody>
                </Card>
                </div>

                    <br/>
                    <div id="submitbtn" style={{display: 'none'}} className="form-group" >
                      <input type="submit" value="Confirm" className="btn btn-primary float-right"/>                      
                    </div>
                </form>
            </div>
        )
    }
}