import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Modules from './components/Modules';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
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
                    <Route path="/module2" element={<Module2 />} />
                    <Route path="/module3" element={<Module3 />} />
                    <Route path="/module4" element={<Module4 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
