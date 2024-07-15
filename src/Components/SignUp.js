import React, { Component } from 'react'
import '../shared/css/external.css'
import data from '../shared/constant/constantdata'
import facein from '../shared/images/facein.jpg'



class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fname: "",
      email: "",
      password: "",
      cpassword: "",
      term: false,
    }
  }
  inputChangeHandle = (event) => {
    const { type, name, value, checked } = event.target;
    this.setState({ [name]: (type === "checkbox") ? checked : value });
  };
  checkData = (event) => {
    event.preventDefault();

    if (this.state.fname === "") {
      window.alert("fname is required");
      return false;
    }
    if (!this.state.fname.match("[a-zA-Z]{2,15}")) {
      window.alert("fname must be only charactr min-2 and max-15 ");
      return false;
    }
    if (this.state.email === "") {
      window.alert("email is required");
      return false;
    }
    if (this.state.password === "") {
      window.alert("Password is required");
      return false;
    }
    if (this.state.cpassword === "") {
      window.alert("Cpassword is required");
      return false;
    }
    if (this.state.term === false) {
      window.alert("Please Accept terms and condition");
      return false;
    }
    window.alert(JSON.stringify(this.state));
  };
  render() {
    const { fname, email, password, cpassword } = this.state;

    return (
      <div>
        <div className="signup">

          <form onSubmit={this.checkData} className="form-signup" >
            <h4>Create Your Account</h4>
            <div id="form-inline" >
              <label className="form-label">Enter Your Full Name:</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                onChange={this.inputChangeHandle}
                value={fname}
                placeholder='Your Name'
              />
            </div>
            <div id="form-inline">
              <label className="form-label">Enter Your Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={this.inputChangeHandle}
                value={email}
                placeholder='name@gmail.com'
              />
            </div>
            <div id="form-inline">
              <label className="form-label">Enter Your Password:</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={this.inputChangeHandle}
                value={password}
                placeholder='........'
              />
            </div>
            <div id="form-inline">
              <label className="form-label">Confirm Password:</label>
              <input
                type="text"
                name="cpassword"
                className="form-control"
                onChange={this.inputChangeHandle}
                value={cpassword}
                placeholder='........'

              />
            </div>
            <hr></hr><strong>or</strong><hr></hr>
            <div id="form-inline">
              <img src={data.insta}  alt='instagram'/>
              <img src={facein}  alt='Facebook'/>
            </div>
            <div id="form-inline">
              <label className="form-check-label mt-1">
                <input type="checkbox" name="term" className="form-check-input" onChange={this.inputChangeHandle} />{" "}
                I Accept Your Term And Condition
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
