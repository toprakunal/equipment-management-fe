
import './App.css';
import Users from './components/Users.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Equipments from './components/Equipments'

function App() {
  return (
<BrowserRouter>
    <div ClassName="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Equipment Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/equipments">Equipments</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
      <Routes>
      <Route path="/users" element={<Users/>}/>
      <Route path='/equipments' element= {<Equipments/>}/>
      </Routes>
      </div>
     
    </div>
    </BrowserRouter>
  )
}




export default App;
