import React from "react";
import { Form, FormGroup, Label, Input ,Button, Container} from "reactstrap";

const MyForm = () => {
  return (
    <div className="container mt-3 text-center">
      <Form >
        <FormGroup>

          <Label>Name Of Course:</Label>
          <Input type="text" id="name" name="name" placeholder="Enter Name" />
        </FormGroup>
        <FormGroup>
            <lebel> Discription</lebel>
            <br/>
            <input type="textarea" style={{height:200}}></input>
        </FormGroup>
        <Container>
            <Button color="success" className="me-2">Add Course</Button>
             <Button color="danger">Delete Course</Button>
        </Container>
      </Form>
    </div>
  );
};

export default MyForm; 
