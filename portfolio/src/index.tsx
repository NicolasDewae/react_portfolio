// src/index.tsx
import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact';
import Blog from './pages/blog';
import ArticleDetail from './pages/articleDetail';
import NotFound from './pages/notFound';
import StreetView from './pages/project/streetView';
import Confinement from './pages/project/confinement';
import Canaries from './pages/project/canaries';
import Street from './pages/project/street';
import ScrollToTop from './components/scrollToTop';
import { GA_TRACKING_ID } from './data/globalVar';
import './index.css';

ReactGA.initialize(GA_TRACKING_ID);

interface AnalyticsTrackerProps {
  children: ReactNode;
}

const AnalyticsTracker = ({ children }: AnalyticsTrackerProps) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return <>{children}</>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <AnalyticsTracker>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/streetview" element={<StreetView />} />
            <Route path="/project/confinement" element={<Confinement />} />
            <Route path="/project/canaries" element={<Canaries />} />
            <Route path="/project/street" element={<Street />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </AnalyticsTracker>
    </Router>
  </React.StrictMode>
);
