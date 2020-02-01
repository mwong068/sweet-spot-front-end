import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
        return (
            <div id="container">
                <div>
                    <h3><Link to="/">Home</Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/about">About</Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/favorites">Favorites</Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/profile">Profile</Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/signup">Signup</Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/login">Login</Link></h3>
                </div>
            </div>
        )
}
