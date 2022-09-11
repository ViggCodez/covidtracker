import React, { Component } from "react";
import FormValidator from "./FormValidator";
import "./Formdata.css";
import "./bootstrap.min.css";

class Formdata extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: "dose",
        method: "isEmpty",
        type: "radio",

        options: [
          { value: "Yes", name: "Yes" },
          { value: "No", name: "No" },
        ],
        validWhen: false,
        message: "\n Please Select if yes or No",
      },
      {
        field: "full_name",
        method: "isEmpty",
        validWhen: false,

        required: true,
        message: "Enter fulll name",
      },
      {
        field: "date",
        method: "isEmpty",
        validWhen: false,

        required: true,
        message: "Please Enter your birth date",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter valid email address.",
      },
      {
        field: "phone",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number.",
      },
      {
        field: "phone",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number.",
      },
      {
        field: "sex",
        method: "isEmpty",
        type: "radio",
        options: [
          { value: "Male", name: "Male" },
          { value: "Female", name: "Female" },
          { value: "Other", name: "Other" },
        ],
        validWhen: true,
        message: "\n Please Select Gender",
      },

      {
        field: "location",
        method: "isEmpty",
        validWhen: false,

        required: true,
        message: "Enter location",
      },
      {
        field: "address",
        method: "isEmpty",
        validWhen: false,

        required: true,
        message: "Enter your full address",
      },

      {
        field: "age",
        method: "isEmpty",
        validWhen: false,

        required: true,
        message: "Please select your age",
      },
    ]);
    this.state = {
      dose: "",
      full_name: "",
      date: "",
      email: "",
      Age: "",
      phone: "",
      sex: "",
      location: "",
      age: "",
      address: "",
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }

  passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  };

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="registrationForm">
              <h1 className="h">COVID-19 Vaccination Registration Form</h1>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="dose" style={{ width: "500px" }}>
                  Have you previously received a COVID-19 vaccine dose?
                </label>
                <br></br>
                <input
                  type="radio"
                  value="Yes"
                  name="gender"
                  onChange={this.handleInputChange}
                />{" "}
                Yes <br></br>
                <input
                  type="radio"
                  value="No"
                  name="gender"
                  onChange={this.handleInputChange}
                />{" "}
                No <br></br>
                <span className="help-block">
                  {validation.dose.message}{" "}
                </span>{" "}
              </div>{" "}
              <br></br>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="string"
                  className="form-control"
                  name="full_name"
                  placeholder="Full Name"
                  style={{ width: "600px" }}
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.full_name.message}
                </span>{" "}
              </div>
              <br></br>
              <div className={validation.date.isInvalid && "has-error"}>
                <label htmlFor="date">Date of birth</label>
                <input
                  type="string"
                  className="form-control"
                  name="date"
                  placeholder="Enter birth date"
                  style={{ width: "600px" }}
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.date.message}</span>{" "}
              </div>{" "}
              <br></br>
              <div style={{ width: "600px" }}>
                <label htmlFor="Age">Age :</label>

                <select
                  class="form-control"
                  name="Age"
                  onChange={this.handleInputChange}
                >
                  <option selected>Choose your Age Group</option>
                  <option value="1">under 18</option>
                  <option value="2">18-24</option>
                  <option value="3">25-34</option>
                  <option value="3">35-44</option>
                  <option value="3">45-54</option>
                  <option value="3">55-64</option>
                  <option value="3">65-97</option>
                  <option value="3">98+</option>
                </select>
              </div>{" "}
              <br></br>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  style={{ width: "600px" }}
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.email.message}</span>{" "}
              </div>
              <br></br>
              <div className={validation.phone.isInvalid && "has-error"}>
                <label htmlFor="phone">Phone(enter only 10 digit number)</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  style={{ width: "600px" }}
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.phone.message}</span>{" "}
              </div>
              <br></br>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="sex" style={{ width: "500px" }}>
                  Sex{" "}
                </label>
                <br></br>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={this.handleInputChange}
                />
                Male <br></br>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={this.handleInputChange}
                />{" "}
                Female <br></br>
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  onChange={this.handleInputChange}
                />{" "}
                Other <br></br>
                <span className="help-block">
                  {validation.sex.message}{" "}
                </span>{" "}
              </div>{" "}
              <br></br>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>Address :</label>
                  <textarea
                    style={{ width: "600px" }}
                    name="address"
                    class="form-control"
                    onChange={this.handleInputChange}
                  />
                  <span className="help-block">
                    {validation.address.message}
                  </span>
                </div>
              </div>{" "}
              <br></br>
              <div className={validation.location.isInvalid && "has-error"}>
                <label htmlFor="location">
                  Which Location do you prefer for vaccination dose?
                </label>
                <input
                  type="string"
                  className="form-control"
                  name="location"
                  placeholder="Which location do you prefer"
                  style={{ width: "600px" }}
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.location.message}
                </span>{" "}
              </div>
              <br></br>
              <button
                style={{ width: "600px" }}
                onClick={this.handleFormSubmit}
                className="btn btn-primary"
              >
                {" "}
                Register{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Formdata;
