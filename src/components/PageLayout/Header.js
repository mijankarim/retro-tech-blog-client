import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header py-5 bg-gray-500">
            <h1 className="logo text-4xl font-bold text-center"><Link to="/">Retro Tech Blog</Link></h1>
        </header>
    )
}

export default Header;
