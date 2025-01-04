import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Works from './pages/works/Works';
import StreetView from './pages/project/streetView/StreetView';
import Confinement from './pages/project/confinement/Confinement';
import Canaries from './pages/project/canaries/Canaries';
import Street from './pages/project/street/Street';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Blog from './pages/blog/Blog';
import NotFound from './pages/notFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={ <App /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/works" element={ <Works /> } />
          <Route path="/contact" element={ <Contact /> } />
          
          {/* Projects routes */}
          <Route path="/project/streetview" element={ <StreetView /> } />
          <Route path="/project/confinement" element={ <Confinement /> } />
          <Route path="/project/canaries" element={ <Canaries /> } />
          <Route path="/project/street" element={ <Street /> } />
        
          {/* 404 */}
          <Route path='*' element={<NotFound />}/>

          {/* Blog routes */}
          <Route path="/blog" element={ <Blog /> } />

        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
