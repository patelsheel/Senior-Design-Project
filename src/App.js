import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Modules from './components/Modules';
import Module1 from './components/Module1';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Modules />} />
                    <Route path="/module1" element={<Module1 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
