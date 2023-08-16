import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';



export default class UserAdd extends React.Component {
  state = {
    userId: '',
    userName: '',
    email: '',
    status: '',
    role: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userName: '',
      password: '',
      email: '',
      status: '',
      role: ''
    };
    this.handleChange = this.handleChange.bind(this); // Binding the function
  }
  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  }
  

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      
      userId: this.state.userId,
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
      status: this.state.status,
      role: this.state.role,

    };

 

    axios.post(`http://localhost:8080/api/v1/users`,user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    
    return (
      <Container className="p-3 mb-4 mt-5 ">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Create User</h2></Accordion.Header>
            <Accordion.Body>
      
       <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control name="userId" type="Text" placeholder="Enter ID" onChange={this.handleChange} />
        <Form.Text className="text-muted">
          Please choose unique ID.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={this.handleChange} name="userName" type="Text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Status</Form.Label>
        <Form.Control onChange={this.handleChange} name="status" type="Text" placeholder="User Status" />
        <Form.Text className="text-muted">
        Please choose either passive or active.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Role</Form.Label>
        <Form.Control onChange={this.handleChange} name="role" type="Text" placeholder="User Role" />
        <Form.Text className="text-muted">
          Please choose either admin or user.
        </Form.Text>
      </Form.Group>



      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Accordion.Body>
      
      </Accordion.Item>
      </Accordion>
      
      </Container>
    )
  }
}
