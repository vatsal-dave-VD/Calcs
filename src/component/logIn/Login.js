import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import {Redirect} from 'react-router-dom';
import * as Yup from 'yup';
import './login.css'
import NavBar from '../navBar/NavBar';

//Schema for login
const loginSchema = Yup.object().shape({
	username: Yup.string()
        .required('Username Required'),
    password: Yup.string()
        .required('Password Required')
});

class Login extends Component {

    loginError = null;
    loginErrorMsg = null;

    state = ({
        username:'',
        password:''
    })
    render() {
        return (
            // main home page 
            <div className="homePage">
            {/** navigation menu */}
                <NavBar />
                {/** body container */}
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                            {/** card layout consisting of the info about the website */}
                            <div className="card bg-light m-4 border-dark" style={{border:"10px solid",borderRadius:"20px"}}>
                                {/** Card Heading */}
                                <h2 className="card-heading text-center bg-secondary text-light py-2" style={{borderRadius:"8px 8px 0 0"}}>
                                    LOGIN
                                </h2>
                                {/** Card Body */}
                                <div className="card-body d-flex justify-content-center p-5">
                                    <Formik
                                        initialValues={{username:'',password:''}}
                                        validationSchema={loginSchema}
                                        onSubmit={(values) => {
                                                let userList = JSON.parse(localStorage.getItem('users')) || []
                                                let usernameList  = userList.map((list)=>[list.username,list.password])
                                                usernameList.every(list => {
                                                    if(list[0]===values.username && list[1]===values.password)
                                                        {
                                                            this.loginErrorMsg = false;
                                                            this.forceUpdate()
                                                            return false;
                                                        }
                                                    else
                                                        {
                                                            this.loginErrorMsg = true;
                                                            this.forceUpdate()
                                                            return true;
                                                        }
                                                })
                                                if(this.loginErrorMsg === true){
                                                    this.loginError = <div className="error text-center mt-4 m-0"><h4>Invalid Credentials</h4></div>
                                                    this.forceUpdate()
                                                }
                                                else if(this.loginErrorMsg === false){
                                                    this.loginError = <Redirect to="/Calculator" />
                                                    this.forceUpdate()
                                                }
                                                else{
                                                    this.loginError = null
                                                    this.forceUpdate()
                                                }
                                                // console.log(this.loginErrorMsg)
                                            }
                                        }
                                    >
                                        {(props) => (
                                            <Form className="form">
                                                <Field
                                                    name="username"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    className="form-control"
                                                />
                                                {props.errors.username && props.touched.username ? <div className="error">{props.errors.username}</div> :<br/>}

                                                <Field
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    className="form-control"
                                                />    
                                                {props.errors.password && props.touched.password ? <div className="error">{props.errors.password}</div> :<br/>}
    
                                                <button 
                                                type="submit"
                                                className="btn btn-lg btn-outline-success font-weight-bold login-btn">
                                                    Submit
                                                </button>
                                                
                                                {
                                                    this.loginError
                                                    // (this.loginError===true||this.loginError===false)
                                                    // ?console.log("success")
                                                    // :console.log("fail")                                                    
                                                    // this.loginError===true?<div className="error text-center mt-4 m-0"><h4>Invalid Credentials</h4></div>:<Redirect to="/Calculator" />
                                                }
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
