import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Salary from './pages/Salary';
import Jokes from './pages/Jokes';
import Task from './pages/Task';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/salary" element={<Salary />} />
              <Route path="/jokes" element={<Jokes />} />
              <Route path="/task" element={<Task />} />
            </Routes>
          </div>
        </div>
      </Router>
      <div>
        <Salary />
      </div>
    </>
  );
}

export default App;
