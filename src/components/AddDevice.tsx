import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeviceForm from './DeviceForm'

import { Device } from '../types'

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
