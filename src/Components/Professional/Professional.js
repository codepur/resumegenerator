import React, { Component } from 'react'
import { Container,Row,Label,Button } from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator';

export default class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professional:'',
     
    };
    this.validator = new SimpleReactValidator();
  }
  nextPage = (e) => {
    if (this.validator.allValid()) {
      this.props.nextPage(e,this.state);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  
  }
  handleChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value});
  }
  render() {
    return (
      <Container className='main'>
        <Row>
           <h1 className="text-center py-1 fw-bold">Professional</h1>
           <div className="form-group glass px-5 py-4">
             <Label>Review</Label>
             <textarea className="form-control" name="professional" value={this.state.professional} onChange={e => this.handleChange(e)} />
              {this.validator.message('review', this.state.professional, 'required|min:20|max:120')}
           </div>
        </Row>
        <Button color="dark" onClick={(e) => this.nextPage(e)}>
          Click Me
        </Button>
      </Container>
    )
  }
}
