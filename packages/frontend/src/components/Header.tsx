import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Device Management App</h1>
      <hr />
      <div className='links'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'link'}>
          Device List
        </NavLink>
        <NavLink to='/add' className={({ isActive }) => isActive ? 'active' : 'link'}>
          Add Device
        </NavLink>
      </div>
    </header>
  )
}

export default Header