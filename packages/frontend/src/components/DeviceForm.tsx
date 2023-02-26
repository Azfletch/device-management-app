import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import { Device } from '../types'

const DeviceForm = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [device, setDevice] = useState({
		name: props.device ? props.device.name : '',
		address: props.device ? props.device.address : '',
		longitude: props.device ? props.device.longitude : '',
		latitude: props.device ? props.device.latitude : '',
		device_type: props.device ? props.device.device_type : '',
		manufacturer: props.device ? props.device.manufacturer : '',
		model: props.device ? props.device.model : '',
		install_date: props.device ? props.device.install_date : '',
		note: props.device ? props.device.note : '',
		eui: props.device ? props.device.eui : '',
		serial_number: props.device ? props.device.serial_number : ''
  })

  const {
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
		serial_number
	} = device as Device

  const handleOnSubmit = (event) => {
		event.preventDefault()
		const values = [
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
			serial_number
		]
		let errorMsg = ''

		const allFieldsFilled: boolean = values.every((field) => {
			const value = `${field}`.trim()
			return value !== ''
		})

		if (allFieldsFilled) {
			const device = {
				id: uuidv4(),
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
				serial_number
			}

			props.handleOnSubmit(device)
		} else {
			errorMsg = 'Please fill out all the fields.'
		}

		setErrorMsg(errorMsg)
  }

  const handleInputChange = (event) => {
		const { name, value } = event.target

		setDevice((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

  return (
		<div className='main-form'>
	  	{errorMsg && <p className='errorMsg'>{errorMsg}</p>}
	  	<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId='name'>
					<Form.Label>Device Name</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='name'
						value={name}
						placeholder='Enter name of device'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='address'>
		  		<Form.Label>Device Address</Form.Label>
		  		<Form.Control
						className='input-control'
						type='text'
						name='address'
						value={address}
						placeholder='Enter address of device'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='longitude'>
		  		<Form.Label>Longitude</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='longitude'
						value={longitude}
						placeholder='Enter longitude'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='latitude'>
					<Form.Label>Latitude</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='latitude'
						value={latitude}
						placeholder='Enter latitude'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='device_type'>
					<Form.Label>Device Type</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='device_type'
						value={device_type}
						placeholder='Enter device type'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='manufacturer'>
					<Form.Label>Manufacturer</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='manufacturer'
						value={manufacturer}
						placeholder='Enter manufacturer'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='model'>
					<Form.Label>Model</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='model'
						value={model}
						placeholder='Enter model'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='install_date'>
					<Form.Label>Install Date</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='install_date'
						value={install_date}
						placeholder='Enter install_date'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='note'>
					<Form.Label>Note</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='note'
						value={note}
						placeholder='Enter note'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='eui'>
					<Form.Label>EUI</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='eui'
						value={eui}
						placeholder='Enter eui'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='serial_number'>
					<Form.Label>Serial Number</Form.Label>
					<Form.Control
						className='input-control'
						type='text'
						name='serial_number'
						value={serial_number}
						placeholder='Enter serial number'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button variant='primary' type='submit' className='submit-btn'>
					Submit
				</Button>
			</Form>
		</div>
  )
}

export default DeviceForm