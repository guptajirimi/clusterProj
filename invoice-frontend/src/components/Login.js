import React from "react";
import { Row,Col ,Button,Container} from "reactstrap";

import '../css/style.css';
import unlockImg from '../images/3d-unlocked.png'
import { toast, ToastContainer } from "react-toastify";

const Login=()=>{

const validateSignUp=()=>{
    
    
}
const validateLogin=()=>{
    toast.info("Validate Login");
}

    return (
        <div className="main-login">
            <ToastContainer/>
            <Container className="md-8" id="left-login"> </Container>
            <Container className="md-4" id="right-login"> 
                <div id="contentsec">
                    <img src={unlockImg} alt="unlock" />
                    <h3>Login</h3>
                    <h2>Sign into your account</h2>
                    <input type="text" placeholder="Input your UserName" />
                     <input type="text" placeholder="Input your Password" />
                      <select name="lang" id="lang">
                        <option value={0}>English</option>
                         <option value={1}>Hindi</option>
                      </select>
                      <div className="btn-container">
                      <Button className="primary" outline onClick={validateLogin}>Login</Button>
                        <Button className="info" outline onClick={validateSignUp}>Sign up</Button>
                        </div>
                </div>
            </Container>
        </div>

    );
}

export default Login;
