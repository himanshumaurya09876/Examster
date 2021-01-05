import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="home__header">
            <div className="home__headerLeft">
                <i class="fas fa-laptop-code"></i>
            </div>
            <div className="home__headerRight">
                
                    <div className = "home__nav">
                        <h4>About</h4>
                    </div>
                    <div className = "home__nav">
                        <h4>Sign In</h4>
                    </div>
                    <div className = "home__nav">
                        <h4>Sign Up</h4>
                    </div>
                    
               
            </div>
        </div>
    )
}

export default Header;
