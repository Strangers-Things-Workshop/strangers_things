import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='navbar'>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;