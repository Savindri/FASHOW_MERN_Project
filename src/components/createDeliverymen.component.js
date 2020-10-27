import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Card , CardHeader, CardBody, Input, Button } from 'reactstrap';
import * as icon from 'react-bootstrap-icons';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

export default class createDelivery extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date:'',
      first_name: '',
      last_name: '',
      nic:'',
      mobile:'',
      email:'',
      gender:'',
      type:'',

      firstNameError:'',
      lastNameError:'',
      nicError:'',
      mobileError:'',
      emailError:'',
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
  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    })
  }
  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeGender = input => e => {
    this.setState({
      [input]: e.target.value 
    })
  }
  onChangeType = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  


  validate = () => {
    let isError = false;
    
    const errors = {
      firstNameError: "",
      lastNameError: "",
      nicError: "",
      mobileError:"",
      emailError: ""
    };

    if (this.state.first_name.length < 2) {
      isError = true;
      errors.firstNameError = <Alert color="danger">First name needs to be atleast 2 characters long</Alert>;
    }

    if (this.state.last_name.length < 2) {
      isError = true;
      errors.lastNameError = <Alert color="danger">last name needs to be atleast 2 characters long</Alert>;
    }

    if (this.state.nic.length < 12) {
      isError = true;
      errors.nicError = <Alert color="danger">Provide a valid NIC number</Alert>;
    }

    if (this.state.mobile.length < 10) {
      isError = true;
      errors.mobileError = <Alert color="danger">Provide a valid mobile number</Alert>;
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = <Alert color="danger">Provide a valid email</Alert>;
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
        date: this.state.date,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        nic: this.state.nic,
        mobile: this.state.mobile,
        email: this.state.email,
        gender: this.state.gender,
        type: this.state.type
      };
      axios.post('http://localhost:4002/delivery/add', obj)
          .then(res => console.log(res.data));
      
      this.setState({
        date:'',
        first_name: '',
        last_name: '',
        nic: '',
        mobile:'',
        email:'',
        gender:'',
        type:''
      })
      window.location = 'createdelivery'
    }
  }

  demoClicked(){
    this.setState({
        date:'2020-10-20',
        first_name:'Nimesh',
        last_name:'Abesinghe',
        nic:'923344550987v',
        mobile:'0781112221',
        email:'nimash@gmail.com',
    })
  }

  
 
  render() {
    return (
      
      <div style={{ marginTop: 10 }}>
        <Card body outline color="success" >
          <CardHeader><h3>Application for delivary men Jobs</h3></CardHeader>            
            <form onSubmit={this.onSubmit}>
            <CardBody>
             <div className="form-group">
              <label>Date: </label>
              <Input
                type="date"
                name="date"
                className="form-control"
                id="Date"
                placeholder="date placeholder"
                value={this.state.date}
                onChange={this.onChangeDate}
                required
              />
              </div>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.first_name}
                      onChange={this.onChangeFirstName}
                      required
                      />
                      {this.state.firstNameError}
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      required
                      />
                      {this.state.lastNameError}
                </div>
                <div className="form-group">
                    <label>NIC: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.onChangeNic}
                      required
                      />
                      {this.state.nicError}
                </div>
                <div className="form-group">
                    <label>Mobile: </label>
                    <input type="number" 
                      className="form-control"
                      value={this.state.mobile}
                      onChange={this.onChangeMobile}
                      required
                      />
                      {this.state.mobileError}
                </div>
                <div className="form-group">
                    <label>E-mail: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      required
                      />
                      {this.state.emailError}
                </div>
                <div>
                gender
                <br/>
                <FormControlLabel
                    control={<Checkbox required/>} 
                    onChange={this.onChangeGender("gender")}
                    name="gender" 
                    value="Male"
                    label="Male"
                    />
                </div>
                <div>
                Type<br/>
                <FormControl component="fieldset">
                        <RadioGroup onChange={this.onChangeType("type")}>

                            <FormControlLabel 
                                control={<Radio required/>}
                                name="type"
                                value="Part Time" 
                                label="Part Time" 
                            />

                            <FormControlLabel 
                                control={<Radio required/>}
                                name="type" 
                                value="Full Time" 
                                label="Full Time" 
                            />
                        </RadioGroup> 
                </FormControl>
                </div>
              </CardBody>

                {/* Demo button */}
                <Button size = "sm" onClick={() => this.demoClicked()} className="btn btn-success"><icon.CaretRightFill/>Demo</Button>          
                
                <div className="form-group">
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-primary float-right"/>
                </div>
                
            </form>
            </Card>    
        </div>
    )
  }
}


