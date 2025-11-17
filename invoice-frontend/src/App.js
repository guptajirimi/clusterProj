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
        
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard (Parent) */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* Child Routes */}
          <Route path="home" element={<Home />} />
          <Route path="MyForm" element={<MyForm />} />
          <Route path="ResumeBuilder" element={<ResumeBuilder />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
