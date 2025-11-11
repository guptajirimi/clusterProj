import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Router>
    <Login/>
      {/* <Container fluid>
        <Row>
          
          <Col md="4" style={{ backgroundColor: 'pink', borderRadius: '10px', padding: '15px' }}>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/MyForm">MyForm</Link></h3>
            <h3><Link to="/ResumeBuilder">ResumeBuilder</Link></h3>
          </Col>

         
          <Col md="8" style={{ backgroundColor: 'lightgrey', border: '1px solid black', borderRadius: '10px', padding: '15px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MyForm" element={<MyForm />} />
              <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
            </Routes>
          </Col>
        </Row>
      </Container> */}
    </Router>
  );
}

export default App;
