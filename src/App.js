import './App.css';
import Header from './components/Header/header';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skill from './components/Skills/skill';
import Project from './components/projects/project'; 
import Education from './components/Education/education';
import Internship from './components/Internship/internship';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    loading === true ?
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <span class="mr-4 loader"></span>
        <span className='text-[20px] text-[#008bc6]'>Loading...</span>
      </div>
    :
    <>
      <div className="mainContainer">
        <Header/>
        <Intro/>
      </div>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <Internship/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
