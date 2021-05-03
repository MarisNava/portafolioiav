
import Navbar from './Navbar';
import Home from './Home';
import Switchers from './ThemeSwitcher';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
         <Navbar />
         <Home /> 
         <Switchers />
         <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
