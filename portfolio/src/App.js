import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import PreviewProject from "./components/previewProject/PreviewProject";
import Footer from "./components/footer/Footer";
import Split from './components/split/Split';
import Contact from "./pages/contact/Contact";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <PreviewProject/>
      <Split/>
      <PreviewProject/>
      <Split/>
      <Footer/>
    </div>
  );
}

export default App;