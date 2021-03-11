import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";

function Header(props ) {
    const user = props.user;
    return (
        <div className="home__headerTeacher">
            <div className="home__headerTeacherLeft">
                <Link to={{
                        pathname: "/teacher/dashboard",
                        state: { user: user }
                    }} style={{color:"white", marginRight : "2%"}} replace><i class="fas fa-laptop-code"></i></Link>
                    <h3>Hey! {user.name}</h3>
            </div>
            <div className="home__headerTeacherRight">
                <div className = "home__navTeacher">
                    <Link to={{
                        pathname: "/teacher/classList",
                        state: {  user: user }
                    }} style={{color:"white"}} replace><h4>Class</h4></Link>
                </div>
                <div className = "home__navTeacher">
                <Link to={{
                        pathname: "/teacher/paper",
                        state: {  user: user }
                    }} style={{color:"white"}} replace><h4>Paper</h4></Link>
                </div>
                <div className = "home__navTeacher">
                    <h4>Profile</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;
