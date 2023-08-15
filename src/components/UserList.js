import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export default class PersonList extends React.Component {
  state = {
    users: {
        data: []
    }
  }
 

  componentDidMount() {
    axios.get(`http://localhost:8080/api/v1/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      
      <Container className="p-3 mb-4 mt-5 ">
        <h2 className='center mb-4'>User List</h2>
      <Table striped bordered hover>
      
        <thead>
        <tr>
          <th>#Id</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      
      <tbody>
      
        {
          
          this.state.users.data
          .map(person =>
            <tr key={person.userId}>
            <td > { person.userId}</td>
            <td> { person.userName}</td>
            <td> { person.email}</td>
            <td> { person.status}</td>
            </tr>
            
            ) 
            
          }
          
          </tbody>
    
    
          </Table>
          </Container>
          
    )
  }
}