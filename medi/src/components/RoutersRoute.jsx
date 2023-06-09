import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import Pages from './Pages'
import Cases from './Cases'
import Appointment from './Appointment'
import Admin from './Admin'
import Login from './AdminLogin'
export default function RoutersRoute() {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/cases" element={<Cases/>}></Route>
    <Route path="/appointment" element={<Appointment/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  )
}
