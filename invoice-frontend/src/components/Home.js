import React from "react";
import {Button,Container} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
 

const Home=()=>{

    const toaste=()=>{
        toast.success("You are now get redericting to About Us section" ,
            {
                position:"top-center"
            }
            
        );
    }

    return (
        <div>
            <ToastContainer/>
            <div className="p-5 mb-4 bg-light rounded-3 text-center"> 
                <Container>
                    <h1>This is my Invoice App</h1>
                    <p>Hear we generate the Invoice by just putting value..</p>
                 <Button color="primary" onClick={toaste} outline>About Us</Button>
                  
                 </Container>
            
            </div>
        </div>
    )
}
export default Home;
