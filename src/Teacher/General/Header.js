import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";

function Header(props ) {
    const user = props.user;
    return (
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to={{
                        pathname: "/teacher/dashboard",
                        state: { user: user }
                    }}><i class="fas fa-laptop-code"></i></Link>
            </div>
            <div className="home__headerRight">
                <div className = "home__nav">
                    <Link to={{
                        pathname: "/teacher/classList",
                        state: {  user: user }
                    }}><h4>Class</h4></Link>
                </div>
                <div className = "home__nav">
                <Link to={{
                        pathname: "/teacher/paper",
                        state: {  user: user }
                    }}><h4>Paper</h4></Link>
                </div>
                <div className = "home__nav">
                    <h4>Profile</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;
