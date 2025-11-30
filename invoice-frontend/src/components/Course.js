import react from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, Container} from "reactstrap";

const Course=({courseName})=>
{
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{courseName.title}</CardSubtitle>
                <CardText>{courseName.discription}</CardText>
                <Container className="text-center">
                    <Button color="success">Update</Button>
                    <Button color="danger ml-3"> Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;