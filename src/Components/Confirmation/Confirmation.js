import React, { Component } from 'react'
import { Container,Row,Label,Button } from 'reactstrap'

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  nextPage = (e) => {
    this.props.nextPage(e,this.state);
  }
  render() {
    const {fielddata}= this.props;
    console.log(fielddata);
    return (
      <Container>
        <Row>
           <h1>Confirmation</h1>
           <Label>Professional summary</Label>
           <textarea/>  
           
        </Row>
        <Button color="dark" onClick={(e) => this.nextPage(e)}>
          Click Me
        </Button>
      </Container> 
    )
  }
}
