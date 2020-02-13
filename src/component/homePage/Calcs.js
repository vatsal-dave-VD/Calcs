import React from 'react'
import './Calcs.css';
import NavBar from '../navBar/NavBar';

function Calcs() {
    return (
        // main home page 
        <div className="homePage">
        {/** navigation menu */}
            <NavBar />
            {/** body container */}
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        {/** card layout consisting of the info about the website */}
                        <div className="card bg-light m-4 border-dark" style={{border:"10px solid",borderRadius:"20px"}}>
                            {/** Card Heading */}
                            <h2 className="card-heading text-center bg-secondary text-light py-2" style={{borderRadius:"8px 8px 0 0"}}>
                                HELLO VOID!!!
                            </h2>
                            {/** Card Body */}
                            <h4 className="card-body pt-2 ">
                                <u>Welcome =&gt; CALCs</u><br/><br/>
                                <center className="h4">THis is ! just simple calculator.</center><br/>
                                <p className="font-weight-normal text-left h6">
                                    <strong>&lt;Loremipsum&gt;</strong><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu sem velit. 
                                    Integer ultricies tristique nulla, vel suscipit elit molestie vitae. Etiam dignissim velit 
                                    id elit egestas ultrices at vitae nibh. Maecenas purus ipsum, pretium eleifend dui et, 
                                    scelerisque malesuada quam. Ut ultricies blandit diam et vestibulum. Proin luctus, nisi id 
                                    tincidunt maximus, massa velit lobortis tellus, a venenatis metus ligula nec augue. 
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    Vivamus blandit congue neque, et commodo est vehicula elementum. Integer vel ante enim <br /><strong className="float-right">&lt; /Loremipsum &gt;</strong>
                                </p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calcs
