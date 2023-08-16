import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import ListGroup from 'react-bootstrap/ListGroup';

function Scan() {
    const [scanResult, setScanResult] = useState(null);
    const [equipmentData, setEquipmentData] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 350,
                height: 350,
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(results) {
            scanner.clear();
            setScanResult(results);

            axios.get(`http://localhost:8080/api/v1/equipments/${results}`)
                .then((res) => {
                    const equipment = res.data.data;
                    setEquipmentData(equipment);
                })
                .catch((err) => {
                    console.warn(err);
                });
        }

        function error(err) {
            console.warn(err);
        }
    }, []);

    return (
        <div>
            {equipmentData ? (
                <Card>
                    <Card.Body>
                <CardHeader> <h3>Equipment Info Report</h3></CardHeader>
                    
                    <ListGroup as="ol" >
                    <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Serial No</div>
          {equipmentData.serialNo}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Name</div>
          {equipmentData.name}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Group</div>
          {equipmentData.equipmentGroup}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Cost</div>
          {equipmentData.cost}
        </div>
        </ListGroup.Item>

        
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Date</div>
          {equipmentData.date}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Location</div>
          {equipmentData.location}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Company</div>
          {equipmentData.company}
        </div>
        </ListGroup.Item>

        
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Model</div>
          {equipmentData.model}
        </div>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Status</div>
          {equipmentData.status}
        </div>
       
        </ListGroup.Item>
        
                    </ListGroup>
                    </Card.Body>
                </Card>
                
            ) : (
                <div id="reader">Failure</div>
            )}
        </div>
    );
}

export default Scan;
