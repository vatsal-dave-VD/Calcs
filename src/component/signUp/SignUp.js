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
        .required('Password Required')
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
                                        onSubmit={async(values) => {
                                            let userList = JSON.parse(localStorage.getItem('users')) || []
                                            var users = {
                                                name:values.name,
                                                email:values.email,
                                                username:values.username,
                                                password:values.userPassword
                                            }
                                            if(!userList.map((list)=>list.username===values.username).includes(true)){
                                                if(!userList.map((list)=>list.email===values.email).includes(true)){
                                                    userList.push(users)
                                                    localStorage.setItem('users',JSON.stringify(userList))
                                                    ?alert("Registration Unsuccessfull!!")
                                                    :alert("Registration Successfull!!")
                                                    await(
                                                        values.name='',
                                                        values.email='',
                                                        values.username='',
                                                        values.userPassword='',
                                                        values.confirmPassword=''
                                                    )
                                                }
                                                else {
                                                    alert("Email already registered!!!")
                                                }
                                            }
                                            else{
                                                alert("Username unavilable!!!\nSelect unique username")
                                            }
                                        }}
                                    >
                                        {(props) => (
                                            <Form className="form-group">
                                                <Field
                                                    name="name"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                    className="form-control my-3"
                                                />
                                                {props.errors.name && props.touched.name ? <div className="error my-3">{props.errors.name}</div> :null}

                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                    className="form-control my-3"
                                                />
                                                {props.errors.email && props.touched.email ? <div className="error my-3">{props.errors.email}</div> :null}

                                                <Field
                                                    name="username"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    className="form-control my-3"
                                                />
                                                {props.errors.username && props.touched.username ? <div className="error my-3">{props.errors.username}</div> :null}

                                                <Field
                                                    type="password"
                                                    name="userPassword"
                                                    placeholder="Password"
                                                    className="form-control my-3"
                                                />    
                                                {props.errors.userPassword && props.touched.userPassword ? <div className="error my-3">{props.errors.userPassword}</div> :null}
                                                
                                                <Field
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    className="form-control mt-3"
                                                />    
                                                {props.errors.confirmPassword && props.touched.confirmPassword ? <div className="error my-3">{props.errors.confirmPassword}</div> :<br/>}

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
