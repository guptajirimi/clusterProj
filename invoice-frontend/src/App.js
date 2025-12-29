import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import Invoice from './components/Invoice';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFood from './components/FoodWeb/NavbarFood';
import HomeFood from './components/FoodWeb/HomeFood';

function App() {
  return (
    <Router>
      <Routes>
        
         
        <Route path="/" element={<NavbarFood />} />

         
        <Route path="/dashboard" element={<DashboardLayout />}>

           
          <Route path="home" element={<HomeFood />} />	
          <Route path="MyForm" element={<MyForm />} />
          <Route path="ResumeBuilder" element={<ResumeBuilder />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
/*import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import Invoice from './components/Invoice';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFood from './components/FoodWeb/NavbarFood';

function App() {
  return (
    <Router>
      <Routes>
        
         
        <Route path="/" element={<NavbarFood />} />

         
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