import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";

function Header() {
    return (
        <div className="home__header">
            <div className="home__headerLeft">
                <i class="fas fa-laptop-code"></i>
            </div>
            <div className="home__headerRight">
                
                    <div className = "home__nav">
                      <Link to="/teacher/classList"><h4>Class</h4></Link>
                    </div>
                    <div className = "home__nav">
                        <h4>Paper</h4>
                    </div>
                    <div className = "home__nav">
                        <h4>Profile</h4>
                    </div>
                    
               
            </div>
        </div>
    )
}

export default Header;
