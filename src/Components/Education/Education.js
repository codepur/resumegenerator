import React, { Component } from 'react'
import { Container,Row,Button,FormGroup,Label,Input, Form, } from 'reactstrap'


export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{ degree: "", college: "",grade:"",duration:"" }],
      error:[{}]
    };
  }
  handleChange = (e, key) => {
    e.preventDefault();
    let values = [...this.state.values];
    let error =[...this.state.error];
    error[key][e.target.name]= "" ;
    let obj = values[key];
    obj[e.target.name] = e.target.value;
    this.setState({ values,error });
    
  }
  add = () => {
    const {error}= this.state;
    return (
      <div>
        {
        this.state.values.map((item, key) => {
          return (<Row key={key} className="border   p-3 my-1 dashboard">
            <FormGroup className='col-1'>
              <Label for="">Sr No.</Label>
              <Button>{key+1}</Button>
              </FormGroup>
            <FormGroup className='col-2'>
              <Label for=""> Degree </Label>
              <Input   name="degree" placeholder="Degree" type="text" value={item.degree} onChange={(e) => this.handleChange(e, key)}/>
              <p className="error">{error[key].degree}</p>
            </FormGroup>
            <FormGroup className='col-4'>
              <Label for=""> College </Label>
              <Input  name="college" placeholder="College" type="text" value={item.college} onChange={(e) => this.handleChange(e, key)}/>
              <p className="error">{error[key].college}</p>
            </FormGroup>
            <FormGroup className='col-2'>
              <Label for=""> Grade </Label>
              <Input  name="grade" placeholder="Grade" type="text" value={item.grade} onChange={(e) => this.handleChange(e, key)}/>
              <p className="error">{error[key].grade}</p>
            </FormGroup>
            <FormGroup className='col-2'>
              <Label for=""> Duration </Label>
              <Input   name="duration" placeholder="Duration" type="date" value={item.duration} onChange={(e) => this.handleChange(e, key)}/>
              <p className="error">{error[key].duration}</p>
            </FormGroup>
            <FormGroup className='col-1'>
              <Label for="">Remove</Label>
              <Button color='danger' onClick={() => this.remove(key)}>➖</Button>
            </FormGroup>
          </Row>)
        })
        }
      </div>
    )
  }
  remove = (key) => {
    let rev = [...this.state.values];
    rev.splice(key, 1);
    this.setState({ values: rev });
  }
  addItem = () => {
    let arr = [...this.state.values];
    arr.push({ degree: "", college: "",grade:"",duration:"" });
    this.setState({ values: arr })
    this.setState(prevState => ({ error: [...prevState.error,{} ]}))
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    const { error } = this.state;
    let values= this.state.values;
    values.forEach((val,ind) =>{
      let obj = val;
      for (let key in obj) {
        if (obj[key] === "" ) {
          error[ind][key] = key + " is required";
        }
      }
    })

    let len = 0;
    error.forEach(inx =>{
     let  errval = (Object.values(inx).filter((val) => val && val !== ""));
       len += errval.length 
    } ) 

    if (len > 0) {
      this.setState({ error: error });
    } else {
      this.props.nextPage(e,this.state);
    }

  }
 
  render() {
    return (
      <Container className='main'> 
        <Row>
          <h1 className="text-center py-1 fw-bold">Education</h1>
          <Form className="form-group glass px-5 py-4" onSubmit={(e) => this.handleSubmit(e)}>
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
