import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Credentials from './components/Credentials';
import JobModel from './components/JobModel';
import Navbar from './components/Navbar';
import Professionals from './components/Professionals';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Top from './components/Top';

function App() {
  return (
    <div>
      <main 
        style={{ 
          backgroundColor: 'var(--background)', 
          color: 'var(--blue-one)' }} 
        className={`text-xl text-gray-400 body-font p-0`}
      >
        <Navbar />
        <Top />
        <About />
        <JobModel />
        <Projects />
        <Professionals />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
