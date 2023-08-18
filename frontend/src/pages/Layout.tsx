import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router'

function Layout() {
  return (
    <div>
        <Navbar cor="dark" fonte='white'/>
        <Outlet/>
    </div>
  )
}

export default Layout