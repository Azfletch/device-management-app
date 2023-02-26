import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from '../components/Header'
import AddDevice from '../components/AddDevice'
import EditDevice from '../components/EditDevice'
import DeviceList from '../components/DeviceList'

import useLocalStorage from '../hooks/useLocalStorage'

const AppRouter = () => {
  const [devices, setDevices] = useLocalStorage('devices', [])

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<DeviceList devices={devices} setDevices={setDevices} />} />
            <Route path='/add' element={ <AddDevice devices={devices} setDevices={setDevices} />} />

            <Route path='/edit/:id' element={ <EditDevice devices={devices} setDevices={setDevices} />} />
            <Route element={() => <Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter