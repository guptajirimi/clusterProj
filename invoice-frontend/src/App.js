import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demand from './components/Demand';

function App() {
  return (
    <Router>
      <Routes>

        {/* Default page */}
        <Route path="/" element={<Demand />} />

         

      </Routes>
    </Router>
  );
}

export default App;



/* 
import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        
         
        <Route path="/" element={<Login />} />

         
        <Route path="/dashboard" element={<DashboardLayout />}>

           
          <Route path="home" element={<Home />} />	
          <Route path="MyForm" element={<MyForm />} />
          <Route path="ResumeBuilder" element={<ResumeBuilder />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
 */