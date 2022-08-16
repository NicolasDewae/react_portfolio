import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import projectsData from './config/projectsData';
import ProjectsListHome from "./components/projectListHome/ProjectsListHome";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <ProjectsListHome projects={projectsData}/>
      <Footer/>
    </div>
  );
}

export default App;