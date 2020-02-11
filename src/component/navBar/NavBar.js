import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                {/** website name */}
                <div className="navbar-header">
                    <h1><Link to="/" className="text-light text-decoration-none">CALCs</Link></h1>
                </div>
                {/** login and signup buttons */}
                <div className="navbar-right">
                    <button className="btn btn-outline-light text-info mx-3 p-2 px-2"><span className="fa fa-user-plus fa-lg mx-2"></span><Link to="/SignUp" className="text-info text-decoration-none">Sign Up</Link></button>
                    <button className="btn btn-outline-light text-danger mx-3 p-2 px-3"><span className="fa fa-sign-in fa-lg mr-2"></span><Link to="/Login" className="text-danger text-decoration-none">Log In</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
