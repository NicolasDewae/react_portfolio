// src/App.tsx
import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/main';
import ProjectsListHome from './components/projectListHome';
import ScrollToTopBtn from './components/scrollToTopBtn';
import TranslateButton from './components/translateButton';
import useTranslate from './hooks/useTranslate';
import projectsData from './data/projectsData';
import './App.css';

const App = () => {
  const { translate, handleTranslate } = useTranslate();

  return (
    <div className="App">
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <Main data={translate} />
      <ProjectsListHome data={translate} projects={projectsData} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default App;
