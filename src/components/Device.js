import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Device = ({
  id,
  name,
  address,
  longitude,
  latitude,
  device_type,
  manufacturer,
  model,
  install_date,
  note,
  eui,
  serial_number,
  handleRemoveDevice
}) => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }} className="device">
      <Card.Body>
        <Card.Title className="device-title">{name}</Card.Title>
        <div className="device-details">
          <div>Address: {address}</div>
          <div>Longitude: {longitude}</div>
          <div>Latitude: {latitude}</div>
          <div>Type: {device_type}</div>
          <div>Manufacturer: {manufacturer}</div>
          <div>model: {model}</div>
          <div>Install Date: {install_date}</div>
          <div>Note: {note}</div>
          <div>EUI: {eui}</div>
          <div>Serial Number: {serial_number}</div>
        </div>
        <Button
          variant="primary"
          onClick={() => navigate(`edit/${id}`)}
        >
          Edit
        </Button>{' '}
        <Button
          variant="danger"
          onClick={() => handleRemoveDevice(id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Device