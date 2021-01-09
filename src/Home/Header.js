import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="home__header">
            <div className="home__headerLeft">
            <Link to="/Home"><i class="fas fa-laptop-code"></i></Link>
            </div>
            <div className="home__headerRight">
                
                <div className = "home__nav">
                    <h4>About</h4>
                </div>
                <div className = "home__nav">
                    <Link to="/Login"> <h4>Sign In</h4></Link>
                </div>
                <div className = "home__nav">
                    <Link to="/SignUp"> <h4>Sign Up</h4></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
