import React from 'react'
import Navbar from '../components/sections/navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../components/sections/Footer/Footer'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root