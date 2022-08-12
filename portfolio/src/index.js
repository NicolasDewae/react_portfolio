import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
