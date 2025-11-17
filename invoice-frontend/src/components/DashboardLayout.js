import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default function DashboardLayout() {
  return (
    <Container fluid>
      <Row>

        {/* Sidebar */}
        <Col
          md="4"
          style={{
            backgroundColor: "pink",
            borderRadius: "10px",
            padding: "15px"
          }}
        >
          <h3><Link to="home">Home</Link></h3>
          <h3><Link to="MyForm">MyForm</Link></h3>
          <h3><Link to="ResumeBuilder">ResumeBuilder</Link></h3>
        </Col>

        {/* Main Content */}
        <Col
          md="8"
          style={{
            backgroundColor: "lightgrey",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "15px"
          }}
        >
          <Outlet />
        </Col>

      </Row>
    </Container>
  );
}
