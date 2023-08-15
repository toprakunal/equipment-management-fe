import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export default class EquipmentList extends React.Component {

    state = {
        equipments: {
            data: []
        }
      }

      componentDidMount() {
        axios.get(`http://localhost:8080/api/v1/equipments`)
          .then(res => {
            const equipments = res.data;
            this.setState({ equipments });
          })
      }

      render() {
        return (
          
          <Container className="p-3 mb-4 mt-5 ">
            <h2 className='center mb-4'>Equipment List</h2>
          <Table striped bordered hover>
          
            <thead>
            <tr>
              <th>#Serial No</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Location</th>
            </tr>
          </thead>
          
          <tbody>
          
            {
              
              this.state.equipments.data
              .map(data =>
                <tr key={data.serialNo}>
                <td > { data.serialNo}</td>
                <td> { data.name}</td>
                <td> { data.cost}</td>
                <td> { data.location}</td>
                </tr>
                
                ) 
                
              }
              
              </tbody>
        
        
              </Table>
              </Container>
              
        )
      }

}
