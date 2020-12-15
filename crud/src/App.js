import  Users  from './components/Users'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateUserForm from './components/CreateUserForm'



function App() {
  return (
    <Container>
      <Row>
        <Col lg={12} className="mt-3">
          <h3>Create user</h3>
          <CreateUserForm />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className = "mt-3">
         <Users />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
