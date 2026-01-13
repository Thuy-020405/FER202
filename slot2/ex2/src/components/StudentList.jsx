import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./About"; 
import listOfStudent from "../data/listOfStudent";

function StudentList() {
  return (
    <Row>
      {listOfStudent.map((stu) => (
        <Col key={stu.id} md={4} className="mb-4">
          <About student={stu} />
        </Col>
      ))}
    </Row>
  );
}

export default StudentList;
