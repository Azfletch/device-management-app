import React from 'react'
import _ from 'lodash'
import Device from './Device'

const DeviceList = ({ devices, setDevices }) => {

  const handleRemoveDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id))
  }

  return (
    <div className='device-list'>
      {!_.isEmpty(devices) ? (
        devices.map((device) => (
          <Device key={device.id} {...device} handleRemoveDevice={handleRemoveDevice} />
        ))
      ) : (
        <p className='message'>No devices to display.</p>
      )}
    </div>
  )
}

export default DeviceList