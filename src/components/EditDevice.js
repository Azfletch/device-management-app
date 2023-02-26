import React from 'react'
import DeviceForm from './DeviceForm'
import { useNavigate, useParams } from 'react-router-dom'

const EditDevice = ({ devices, setDevices }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const deviceToEdit = devices.find((device) => device.id === id)

  const handleOnSubmit = (device) => {
    const filteredDevices = devices.filter((device) => device.id !== id)
    setDevices([device, ...filteredDevices])
    navigate('/')
  }

  return (
    <>
      <DeviceForm device={deviceToEdit} handleOnSubmit={handleOnSubmit} />
    </>
  )
}

export default EditDevice