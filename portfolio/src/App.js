import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from './config/data';
import ProjectsList from "./components/projectList/ProjectsList";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <ProjectsList projects={data}/>
      <Footer/>
    </div>
  );
}

export default App;