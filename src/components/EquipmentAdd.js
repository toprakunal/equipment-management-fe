import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

export default class EquipmentAdd extends React.Component {
    state = {
        serialNo: '',
        name: '',
        equipmentGroup: '',
        cost: '',
        date: '',
        location: '',
        company: '',
        model: '',
        status: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            serialNo: '',
            name: '',
            equipmentGroup: '',
            cost: '',
            date: '',
            location: '',
            company: '',
            model: '',
            status: ''
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
    
        const equipment = {
          
          serialNo: this.state.serialNo,
          name: this.state.name,
          equipmentGroup: this.state.equipmentGroup,
          cost: this.state.cost,
          date: this.state.date,
          location: this.state.location,
          company: this.state.company,
          model: this.state.model,
          status: this.state.status
    
        };

        axios.post(`http://localhost:8080/api/v1/equipments`,equipment)
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
            <Accordion.Header><h2>Create Equipment</h2></Accordion.Header>
            <Accordion.Body>

      
      
       <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Serial No</Form.Label>
        <Form.Control name="serialNo" type="Text" placeholder="Enter Serial No" onChange={this.handleChange} />
        <Form.Text className="text-muted">
          Please choose proper Serial No.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={this.handleChange} name="name" type="Text" placeholder="Equipment's Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Equipment Group</Form.Label>
        <Form.Control onChange={this.handleChange} name="equipmentGroup" type="Text" placeholder="Group" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Cost</Form.Label>
        <Form.Control onChange={this.handleChange} name="cost" type="text" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={this.handleChange} name="date" type="Text" placeholder="Enter Equipment's Buy Date" />
        <Form.Text className="text-muted">
        Please enter DD/MM/YY format.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Location</Form.Label>
        <Form.Control onChange={this.handleChange} name="location" type="Text" placeholder="Equipment's Location" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
        <Form.Control onChange={this.handleChange} name="company" type="text" placeholder="Equipment's Company" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Model</Form.Label>
        <Form.Control onChange={this.handleChange} name="model" type="text" placeholder="Equipment's Model" />
      </Form.Group>


    

      <Form.Group className="mb-3" >
        <Form.Label>Status</Form.Label>
        <Form.Control onChange={this.handleChange} name="status" type="text" placeholder="Equipment's Status" />
        <Form.Text className="text-muted">
        Please choose either passive or active.
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