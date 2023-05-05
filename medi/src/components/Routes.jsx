import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import Pages from './Pages'
import Cases from './Cases'
export default function Routes() {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about-us" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/cases" element={<Cases/>}></Route>
  </Routes>
  )
}
