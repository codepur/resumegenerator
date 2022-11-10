import React, { Component } from "react";
import {
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
} from "reactstrap";
import "./style.css";

export default class Generalinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      contact: "",
      address: "",
      dob: "",
      email:"",
      image: "",
      error: {},
    };
  }
  handleChange(e) {
    let { error } = this.state;
    error[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value, error: error });
  }
  nextPage = (e) => {
    const { error } = this.state;
    let obj = this.state;
    for (let key in obj) {
      if (obj[key] === "" && key !== "error") {
        error[key] = key + " is required";
      }
    }

    let errval = Object.values(error).filter((val) => val && val !== "");
    
    if (errval.length > 0) {
      this.setState({ error: error });
    } else {
      this.props.nextPage(e,this.state);
    }
  };
  handleFileChange(e){
    let files = e.target.files;
    const image = URL.createObjectURL(files[0])
    let { error } = this.state;
    error[e.target.name] = "";
    this.setState({image,error: error})
  }
   
 
  render() {
    const { error } = this.state;
    return (
      <Container className="main ">
        <h1 className="text-center py-1 fw-bold">General Information</h1>
        <Row >
            <Form className="glass px-5 py-4">
              <Row>
              <FormGroup className="col-5">
                <Label for="exampleEmail">First Name</Label>
                <Input
                  id="exampleEmail"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.firstName}</p>
              </FormGroup>
              <FormGroup className="col-5">
                <Label for="exampleEmail">Last Name</Label>
                <Input
                  id="exampleEmail"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.lastName}</p>
              </FormGroup>
              <FormGroup className="col-4">
                <Label for="exampleEmail">Email</Label>
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.email}</p>
              </FormGroup>
              <FormGroup className="col-4">
                <Label for="exampleEmail">Contact</Label>
                <Input
                  id="exampleEmail"
                  name="contact"
                  placeholder="Contact"
                  type="number"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.contact}</p>
              </FormGroup>
              
              <FormGroup className="col-3">
                <Label for="exampleEmail">Dob</Label>
                <Input
                  id="exampleEmail"
                  name="dob"  
                  placeholder="Date of Birth"
                  type="date"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.dob}</p>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Address</Label>
                <Input
                  id="exampleEmail"
                  name="address"
                  placeholder="Address"
                  type="address"
                  onChange={(e) => this.handleChange(e)}
                />
                <p className="error">{error.address}</p>
              </FormGroup>
              
              <FormGroup className="col-4">
                <Label for="exampleEmail">Profile Image</Label>
                <Input
                  name="image"  
                  placeholder="image"
                  type="file"
                  onChange={(e) => this.handleFileChange(e)}
                />
                <p className="error">{error.image}</p>
              </FormGroup>
              <img src={this.state.image} className="border border-dark m-0 p-0" style={{width : "90px"}} alt="" />
              <div className="col-12"></div>
              <Button className="col-1 text-center" color="dark" onClick={(e) => this.nextPage(e)}>
               Submit
              </Button>
              </Row>
            </Form>
           
        </Row>
        
        
      </Container>
    );
  }
}
