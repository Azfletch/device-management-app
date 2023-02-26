import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Device } from '@device-management/shared'

import DeviceForm from './DeviceForm'

const EditDevice = ({ devices, setDevices }: { devices: Device[], setDevices: any }) => {
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