import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';

export default class UserRemove extends React.Component {
  state = {
    userId: ''
  }

  handleChange = event => {
    this.setState({ userId: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:8080/api/v1/users/${this.state.userId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(this.state.userId);
      })
  }

  render() {
    return (
      <Container className="p-3 mb-4 mt-5 ">
                <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Delete User</h2></Accordion.Header>
            <Accordion.Body>

    
      <form onSubmit={this.handleSubmit}>
      <Form.Label>ID</Form.Label>
      <InputGroup className="mb-3" >
        <Form.Control
          placeholder="User ID"
          aria-label="User ID"
          aria-describedby="basic-addon2"
          onChange={this.handleChange}
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Delete
        </Button>
      </InputGroup>
      </form>
      </Accordion.Body>
      
      </Accordion.Item>
      </Accordion>
      </Container>
    )
  }
}