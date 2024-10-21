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
                    <li><Link to="/module2">Module 2</Link></li>
                    <li><Link to="/module3">Module 3</Link></li>
                    <li><Link to="/module4">Module 4</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
