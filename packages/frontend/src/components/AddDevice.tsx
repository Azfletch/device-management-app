import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Device } from '@device-management/shared'

import DeviceForm from './DeviceForm'

const AddDevice = ({ devices, setDevices }: { devices: Device[], setDevices: any }) => {
  const navigate = useNavigate()
  const handleOnSubmit = (device) => {
    setDevices([device, ...devices])
    navigate('/')
  }

  return (
    <>
      <DeviceForm handleOnSubmit={handleOnSubmit} />
    </>
  )
}

export default AddDevice
