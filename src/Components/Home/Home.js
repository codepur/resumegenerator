import React, { Component } from 'react'
import {Generalinfo} from '../Generalinfo/index'
import {Professional} from '../Professional/index'
import {Education} from '../Education/index'
import {Experience} from '../Experience/index'
// import {Confirmation} from '../Confirmation/index'
import {Final} from '../Final/index'

export default class Home extends Component {
    constructor(props)
    { 
      super(props)
      this.state=({
          step : 3,
          fielddata:{

          } 
         
      })
    }
    nextPage =(e,data) =>{
      
      e.preventDefault();
      let {step} = this.state
      let fielddata = {...this.state.fielddata,...data}
      this.setState({ step: step+1 , fielddata:fielddata})
      console.log(fielddata);
    }  
    prevPage = (e) => {
      e.preventDefault();
      const { step } = this.state;
      this.setState({ step: step - 1 });
    };
    
  
    render() {
      const {step} = this.state;
      const {fielddata}  = this.state; 
      switch(step)
      { 
        default :
           return(<p>error</p>)
        case 1:
           return (
            <Generalinfo nextPage={this.nextPage} />
           )
        case 2:
           return (
            <Professional nextPage={this.nextPage} prevPage={this.prevPage}/>
           )  
        case 3:
           return (
            <Education nextPage={this.nextPage}  prevPage={this.prevPage}/>
         )  
        case 4:
            return(
             <Experience nextPage={this.nextPage} prevPage={this.prevPage}/>
          ) 
        // case 5:
        //   return(
        //     <Confirmation nextPage={this.nextPage} prevPage={this.prevPage} fielddata={fielddata}/>
        //   )
        case 5:
          return(
             <Final fielddata={fielddata}/>
          )  

  
      }
      
    }
}
