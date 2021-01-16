import { Button } from '@material-ui/core';
import React ,{useState} from 'react';
import { Link , Redirect} from 'react-router-dom';
import './Header.css';

function Header(props) {
    const user = props.user;
    return (
        <div className="home__header">
            <div className="home__headerLeft">
            <Link to={{
                        pathname: "/student/dashboard",
                        state: { user: user },
                        
                    }}
                    replace
                    style={{color:"white" , marginRight : "2%"}}>
                    <i class="fas fa-laptop-code"></i>
            </Link> 
                <h3>Hey! {user.name}</h3>
            </div>
            <div className="home__headerRight">
                
                    <div className = "home__nav">
                        <Link to={{
                            pathname: "/student/EnrolledClasses",
                            state: { user: user }}}
                            style={{color:"white"}}
                            replace
                            >                                 
                            <h4>Class</h4>
                            </Link>
                    </div>
                    <div className = "home__nav">
                        <h4>Profile</h4>
                    </div>
                    <div className = "home__nav">
                        <h4>LogOut</h4>
                    </div>
                   
            </div>
        </div>
    )
}

export default Header; 
