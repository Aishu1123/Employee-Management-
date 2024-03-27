import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Dashboard from '../Components/Dashboard'


const AllRoutes = () => {
  return (
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
   
    <Route path="/" element={<Signup/>} />
   
    <Route path="/dashboard" element={<Dashboard/>} />
    
  </Routes>
  )
}

export default AllRoutes