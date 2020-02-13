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
                    <Link to="/SignUp" className="text-info text-decoration-none"><button className="btn btn-outline-light text-info mx-3 p-2 px-2"><span className="fa fa-user-plus fa-lg mx-2"></span>Sign Up</button></Link>
                    <Link to="/Login" className="text-danger text-decoration-none"><button className="btn btn-outline-light text-danger mx-3 p-2 px-3"><span className="fa fa-sign-in fa-lg mr-2"></span>Log In</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
