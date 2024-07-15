import React, { Component } from 'react'
import '../shared/css/external.css'
import { Outlet, Link } from 'react-router-dom'
import data from '../shared/constant/constantdata'


 class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            term: false,
        }
    }
    inputChangeHandle = (event) => {
        const { type, name, value, checked } = event.target;
        this.setState({ [name]: (type === "checkbox") ? checked : value });
    };

    checkData = (event) => {
        event.preventDefault();

        if (this.state.email === "") {
            window.alert("email is required");

            return false;
        }
        if (this.state.password === "") {
            window.alert("Password is required");
            return false;
        }
        if (this.state.term === false) {
            window.alert("Please Accept terms and condition");
            return false;
        }
        window.alert(JSON.stringify(this.state));
    };

    render() {
        const { email, password } = this.state;

        return (

            <div>
                {/* <div className='form-sigin'>

                    <form onSubmit={this.checkData} id="formDesign">
                        <Link to="signin" >SignIn</Link>

                        <div id="form-inline">
                            <label className="form-label">Enter Your Email:</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                onChange={this.inputChangeHandle}
                                value={email}
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
                            />
                        </div>

                        <div id="form-inline">
                            <label className="form-check-label mt-1">
                                <input type="checkbox" name="term" className="form-check-input" onChange={this.inputChangeHandle} />{" "}
                                Remember Me
                            </label>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <Link to="signup"  >SignUp</Link>

                        <Outlet />
                    </form>

                </div> */}


              <div className='sign-in'>
                <div className='signin-parent'>
                    <div className='sign-in-child'>
                    <img src={data.sign1} style={{ width: "110%", height: "90vh" }} ></img>

                    </div>
                    <div className='sign-in-child'>

                    <form onSubmit={this.checkData} id="formsignin">
                    <img src={data.signinlogo}  ></img>

                        <h2>Sign In</h2>

                        <div id="form-inline">
                            <input
                                type="text"
                                name="email"
                                className="form-control rounded-pill"
                                onChange={this.inputChangeHandle}
                                value={email}
                                placeholder='Email Address'
                            />
                        </div>
                        <div id="form-inline">
                            <input
                                style={{marginTop:"20px"}}

                                type="text"
                                name="password"
                                className="form-control rounded-pill input-lg "
                                onChange={this.inputChangeHandle}
                                value={password}
                                placeholder='Password*'
                            />
                        </div>
                        <div className='remember-forget'>
                          <label><input type='checkbox'/> Remember me</label>
                          <Link className='a'>Forget password?</Link>
                        </div>
                       
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                            SIGN IN
                            </button>
                        </div>
                      
                        <Link to="signup">Don't have an account SignUp</Link>
                    {/* <p><strong style={{color:"black"}}>Dont't have an account?  </strong><Link to="signup">signup</Link></p> */}
                        <Outlet />
                    </form>

                </div>
                    </div>

                </div>

              </div>


        )
    }
}

export default SignIn
