import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Pen Testing Lab</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/module1">Module 1</Link></li>
                    <li><a href="#module2">Module 2</a></li>
                    <li><a href="#module3">Module 3</a></li>
                    <li><a href="#module4">Module 4</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
