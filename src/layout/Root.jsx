import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/navbar/Navbar'

const Root = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export default Root
