import { useState } from 'react';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import projectsData from './data/projectsData';
import ProjectsListHome from "./components/projectListHome/ProjectsListHome";
import ScrollToTopBtn from "./components/scrollToTopBtn/ScrollToTopBtn";

function App() {
  
  // Get translate data
  let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
  // Convert translate data into a boolean
  defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

  const [translate, setTranslate] = useState(defaultValueTranslate);
  const handleTranslate = () => {
      localStorage.setItem('defaultValueTranslate', !translate);  
      setTranslate(!translate);
  }
  
  return (
    <div className="App">
      {/* Translation button */}
      <button className='translateBtn' onClick={handleTranslate}>
          <p className='translate'>
              {translate ? 'Fr' : 'En'}
          </p>
      </button>
      <Navbar data={translate} />
      <ProjectsListHome data={translate} projects={projectsData} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
}

export default App;