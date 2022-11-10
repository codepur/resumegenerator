import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'

export default class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {fielddata} = this.props;
    const values = fielddata.values;
    console.log(fielddata);
    return (
      <div className="bg-light">
      
        <div className="card bg-white border-0 mb-5 shadow-sm p-5">
          <div className="card-body d-flex align-items-center justify-content-start p-5 flex-sm-column flex-column flex-md-row">
            <img src="https://raw.githubusercontent.com/neeraj15022001/bootstrap-resume/master/logo.png" className=" bg-secondary mb-sm-4 mb-4 mb-md-0" alt="profile" width="200"/>
            <div className="d-flex flex-column align-items-center align-items-sm-center align-items-md-start justify-content-between ms-0 ms-md-4 mb-sm-5 mb-5 mb-md-0 ">
              <h1 className="display-4 fw-bold mb-0">{fielddata.firstName+" " +fielddata.lastName}</h1>
              <p className="fs-3 fw-normal">Developer</p>
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-dark rounded-circle fs-4 p-0" style={{ height: "40px", width: "40px" }}>
                  <FontAwesomeIcon icon={faCoffee} />
                </button>
               
              </div>
            </div>
            <div className="flex-fill d-flex align-items-center justify-content-center justify-content-md-end">
              <button className="btn btn-primary btn-lg">
                <i className="bi bi-person-lines-fill me-3"></i>Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="container h-100">
          <div className="row pb-5">
            <div className="col-12 col-lg-8 overflow-auto">
              <div className="card rounded border-0 mb-3 shadow-sm p-3">
                <div className="card-body">
                  <h2 className="card-title fs-1 mb-5 fw-bold">About Me</h2>
                  <p className="card-text">
                    {fielddata.professional}
                  </p>
                </div>
              </div>

              <div className="card border-0 rounded shadow-sm p-3 mb-3">
                <div className="card-body">
                  <h2 className="card-title fs-1 mb-5 fw-bold">
                    Work Experience
                  </h2>
                  <div>
                    <p>
                      <span className="fw-bold text-secondary fs-5">
                        Founder and Lead Developer
                      </span>
                      <span className="text-muted">- Project 1</span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum eos similique voluptatibus, reprehenderit
                      ab dicta explicabo dolores porro id sint! Totam
                      consequatur sapiente beatae quos necessitatibus excepturi
                      cum qui! Accusantium aut, vitae, consequuntur nesciunt
                      accusamus nisi voluptatem illum quos qui laborum
                      consequatur quis, alias soluta. Quo esse, excepturi in
                      dignissimos minus eveniet nihil expedita. Expedita quae
                      eveniet nemo rem.
                    </p>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            </div>
            <div className="col-0 col-lg-4 overflow-auto">
              <div className="card border-0 rounded shadow-sm mb-3 p-3">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-start">
                    <div className="text-center mb-2">
                      <h1>Information</h1>  
                    </div>
                    <span className=""><strong>Dob : </strong>{fielddata.dob}</span>
                    <span className=""><strong>Contact : </strong>{fielddata.contact}</span>
                    <span className=""><strong>Address : </strong>{fielddata.address}</span>
                  </div>
                </div>
              </div>
             
              <div className="card border-0 rounded shadow-sm mb-3 p-3">
                <div className="card-body">
                  <h2 className="card-title fs-3 fw-bold mb-4">Education</h2>
                  {values.map((val) => {
                     return (<div className="d-flex align-items-center justify-content-start mb-3 border">
                     <strong className="font-weight-bold ">🏫</strong>
                   <div className="d-flex flex-column align-items-start justify-content-center ms-3">
                     <p className="fw-bold text-secondary mb-0">
                       {val.college}
                     </p>
                     <p className="text-muted mb-0">{val.degree} ({val.duration})</p>
                     <p className="text-muted"><i>Grade</i> {val.grade}</p>
                   </div>
                 </div>)
                  }  ) }
                  
                </div>
              </div>
              <div className="card border-0 rounded shadow-sm p-3">
                <div className="card-body">
                  <h2 className="card-title fs-3 fw-bold mb-4">Languages</h2>
                  <div
                    className="
                  d-flex
                  flex-column
                  align-items-start
                  justify-content-center
                  mb-3
                "
                  >
                    <p className="text-muted mb-1">
                      <span className="fw-bold text-secondary">English: </span>
                      Proficient
                    </p>
                    <div
                      className="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-warning
                  "
                    >
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
