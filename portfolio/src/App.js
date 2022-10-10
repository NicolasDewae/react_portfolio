import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import projectsData from './config/projectsData';
import ProjectsListHome from "./components/projectListHome/ProjectsListHome";
import { useState } from 'react';
import ScrollToTopBtn from "./components/scrollToTopBtn/ScrollToTopBtn";

function App() {
  const [translate, setTranslate] = useState(false);
  const handleTranslate = () => {
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
      <Main data={translate} />
      <ProjectsListHome data={translate} projects={projectsData} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
}

export default App;