import React from 'react';
import About from './components/About';
import JobModel from './components/JobModel';
import Navbar from './components/Navbar';
import Top from './components/Top';

function App() {
  return (
    <div>
      <main 
        style={{ 
          backgroundColor: 'var(--background)', 
          color: 'var(--blue-one)' }} 
        className={`text-gray-400 body-font p-0`}
      >
        <Navbar />
        <Top />
        <About />
        <JobModel />
      </main>
    </div>
  );
}

export default App;
