import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import NavBar from '../navBar/NavBar';

//Schema for login
const loginSchema = Yup.object().shape({
    name: Yup.string()
        .min(6)
        .max(50)
        .required('Name Required'),
    username: Yup.string()
        .min(6,"Username must be longer than 6 characters")
        .max(50)
        .required('Username Required'),
    email: Yup.string()
        .email()
        .required('Email Required'),
    userPassword: Yup.string()
        .min(8,"Password must be long than 8 characters")
        .required('Password Required'),
        // .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$")
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('userPassword'), null], 'Passwords must match'),
});

class SignUp extends Component {
    render() {
        return (
            <div className="homePage">
            {/** navigation menu */}
                <NavBar/>
                {/** body container */}
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                            {/** card layout consisting of the info about the website */}
                            <div className="card bg-light m-4 border-dark" style={{border:"10px solid",borderRadius:"20px"}}>
                                {/** Card Heading */}
                                <h2 className="card-heading text-center bg-secondary text-light py-2" style={{borderRadius:"8px 8px 0 0"}}>
                                    Register
                                </h2>
                                {/** Card Body */}
                                <div className="card-body d-flex justify-content-center">
                                    <Formik
                                        initialValues={{name:"",username:"",email:"",userPassword:"",confirmPassword:""}}
                                        validationSchema={loginSchema}
                                        onSubmit={(values) => {
                                            let userList = JSON.parse(localStorage.getItem('users')) || []
                                            var users = {
                                                name:values.name,
                                                email:values.email,
                                                username:values.username,
                                                password:values.userPassword
                                            }
                                            userList.push(users)
                                            localStorage.setItem('users',JSON.stringify(userList))?console.log("SUCCESS"):console.log(userList)
                                        }}
                                    >
                                        {(props) => (
                                            <Form className="form-group">
                                                <Field
                                                    name="name"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                    className="form-control"
                                                />
                                                {props.errors.name && props.touched.name ? <div className="error">{props.errors.name}</div> :<br/>}
                                                
                                                <Field
                                                    name="username"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    className="form-control"
                                                />
                                                {props.errors.username && props.touched.username ? <div className="error">{props.errors.username}</div> :<br/>}

                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                    className="form-control"
                                                />
                                                {props.errors.email && props.touched.email ? <div className="error">{props.errors.email}</div> :<br/>}

                                                <Field
                                                    type="password"
                                                    name="userPassword"
                                                    placeholder="Password"
                                                    className="form-control"
                                                />    
                                                {props.errors.userPassword && props.touched.userPassword ? <div className="error">{props.errors.userPassword}</div> :<br/>}
                                                
                                                <Field
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    className="form-control"
                                                />    
                                                {props.errors.confirmPassword && props.touched.confirmPassword ? <div className="error">{props.errors.confirmPassword}</div> :<br/>}

                                                <button 
                                                type="submit"
                                                className="btn btn-lg w-50 btn-info font-weight-bold signup-btn">
                                                    SignUp
                                                </button>
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

export default SignUp
