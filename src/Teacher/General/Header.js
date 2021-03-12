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
                    }} style={{color:"white", marginRight : "2%" ,  fontSize:"1.5rem"}} replace><i class="fas fa-laptop-code"></i></Link>
                   
                    <h2>Hey! {user.name}</h2>
            </div>
            <div className="home__headerTeacherRight">
                <div className = "home__navTeacher">
                    <Link to={{
                        pathname: "/teacher/classList",
                        state: {  user: user }
                    }} style={{color:"white" , textDecorationLine :"none",}} replace><h3>Class</h3></Link>
                </div>
                <div className = "home__navTeacher">
                <Link to={{
                        pathname: "/teacher/paper",
                        state: {  user: user }
                    }} style={{color:"white", textDecorationLine :"none",}} replace><h3>Paper</h3></Link>
                </div>
                <div className = "home__navTeacher">
                    <h3>Profile</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;
