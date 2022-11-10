import React, { Component } from 'react'
import { Container,Row,Button,FormGroup,Label,Input, Form, } from 'reactstrap'


export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesOfex: [{ company: "", job: "",location:"",start:"",end:"",skills:"",describe:"" }]
    };  
  }
  handleChange = (e, key) => {
    e.preventDefault();
    let valuesOfex = [...this.state.valuesOfex];
    let obj = valuesOfex[key];
    obj[e.target.name] = e.target.value;
    this.setState({ valuesOfex });

  }
  add = () => {
    return (
      <div>
        {this.state.valuesOfex.map((item, key) => {
          return (<Row key={key} className="border rounded border-dark p-3 my-1" >
            <Row>
            <FormGroup className='col-11'>
              <Button color="success">{key+1}</Button>
            </FormGroup>
            <FormGroup className='col-1 text-end'>
              <Button color='danger' onClick={() => this.remove(key)}><strong>X</strong></Button>
            </FormGroup>
            </Row>
           
            <FormGroup className='col-6'>
              <Label for=""> Company Name </Label>
              <Input   name="company" placeholder="Company" type="text" value={item.company} onChange={(e) => this.handleChange(e, key)}/>
              </FormGroup>
            <FormGroup className='col-6'>
              <Label for=""> Job Title </Label>
              <Input  name="job" placeholder="Job" type="text" value={item.job} onChange={(e) => this.handleChange(e, key)}/>
            </FormGroup>
            <FormGroup className='col-4'>
              <Label for=""> Location </Label>
              <Input  name="location" placeholder="Location" type="text" value={item.location} onChange={(e) => this.handleChange(e, key)}/>
            </FormGroup>
            <FormGroup className='col-2'>
              <Label for="">Start </Label>
              <Input   name="start" placeholder="" type="date" value={item.start} onChange={(e) => this.handleChange(e, key)}/>
            </FormGroup>
           
            <FormGroup className='col-2'>
              <Label for="">End</Label>
              <Input   name="end" placeholder="" type="date" value={item.end} onChange={(e) => this.handleChange(e, key)}/>
            </FormGroup>
            <FormGroup className='col-4'>
              <Label for="">Skills</Label>
              <Input  name="skills" placeholder="C++ Java Python Javascript" type="text" value={item.skills} onChange={(e) => this.handleChange(e, key)}/>
            </FormGroup>
            <FormGroup className='col-12'>
              <Label for="">Description</Label>
              <textarea className="form-control" placeholder='description' name="describe" value={this.state.describe} onChange={e => this.handleChange(e)} />
              
            </FormGroup>
          </Row>)
        })
        }
      </div>
    )
  }
  remove = (key) => {
    let rev = [...this.state.valuesOfex];
    rev.splice(key, 1);
    this.setState({ valuesOfex: rev });
  }
  addItem = () => {
    let arr = [...this.state.valuesOfex];
    arr.push({ company: "", job: "",location:"",start:"",end:"",skills:"" });
    this.setState({ valuesOfex: arr })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.nextPage(e,this.state);
  }
 
  render() {
    return (
      <Container className='main'> 
        <Row>
          <h1 className="text-center py-1 fw-bold">Experience</h1>
          <Form className='form-group glass px-5 py-4' onSubmit={(e) => this.handleSubmit(e)}>
            {this.add()}
            <Row className='justify-content-center'>
                <FormGroup className='col-1 '>
                  <Button color='warning' onClick={this.addItem}>➕</Button>
                </FormGroup>
                <FormGroup className='col-1 '>
                  <Button type="submit">Submit</Button>
                </FormGroup>
            </Row> 
          </Form>
        </Row>

      </Container>
    );
  }
}
