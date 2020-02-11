import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './login.css'
import NavBar from '../navBar/NavBar';

//Schema for login
const loginSchema = Yup.object().shape({
	username: Yup.string()
        .required('Username Required'),
    password: Yup.string()
        // .min(8)
        // .max(16)
        // .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$")
        .required('Password Required')
});

let loginError

class Login extends Component {
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
                                        initialValues={{username:"",password:""}}
                                        validationSchema={loginSchema}
                                        onSubmit={(values) => {
                                                let userList = JSON.parse(localStorage.getItem('users')) || []
                                                let usernameList  = userList.map((list)=>[list.username,list.password])
                                                usernameList.find(list => {
                                                    if(list[0]===values.username && list[1]===values.password)
                                                        {
                                                            console.log("SUCCESS!!")
                                                            return true
                                                        }
                                                    else
                                                        {
                                                            loginError=true
                                                            return false;
                                                        }
                                                })
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
                                                {loginError?
                                                    <div className="error text-center mt-4 m-0"><h4>Invalid Credentials</h4></div>:null}
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
