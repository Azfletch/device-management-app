import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeviceForm from './DeviceForm'

const AddDevice = ({ devices, setDevices }) => {
  const navigate = useNavigate()
  const handleOnSubmit = (device) => {
    setDevices([device, ...devices])
    navigate('/')
  }

  return (
    <React.Fragment>
      <DeviceForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  )
}

export default AddDevice
