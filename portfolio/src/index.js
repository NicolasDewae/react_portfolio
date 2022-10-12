import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Article from './pages/article/Article';
import Works from './pages/works/Works';
import StreetView from './pages/project/streetView/StreetView';
import Confinement from './pages/project/confinement/Confinement';
import Canaries from './pages/project/canaries/Canaries';
import Street from './pages/project/street/Street';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/works" element={ <Works /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/blog/:id" element={ <Article /> } />
          <Route path="/project/streetview" element={ <StreetView /> } />
          <Route path="/project/confinement" element={ <Confinement /> } />
          <Route path="/project/canaries" element={ <Canaries /> } />
          <Route path="/project/street" element={ <Street /> } />
        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
