import React, { useEffect, useState } from 'react'
import "./admin.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const getApi=(url)=>{
    return url
}
export default function Admin() {
const [Patientdata, setPatientData]=useState([])

    const getfetchdata=async ()=>{
    let apiurl=getApi(`http://localhost:8080/appointments`)
    try {
        const res = await fetch(apiurl);
       const data= await res.json()
        setPatientData(data)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
const handleRemove=()=>{

}
useEffect(()=>{
getfetchdata()
},[])
  return (
    <div>
        
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Booked Appointments</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Date</Th>
        <Th>Contact</Th>
        <Th>Doctor</Th>
        
      </Tr>
    </Thead>
    {Patientdata.map((e)=> <Tbody>
      <Tr>
        <Td>{e.id}</Td>
        <Td>{e.name}</Td>
        <Td>{e.date}</Td>
        <Td>{e.mob}</Td>
        <Td>{e.doctor}</Td>
        {/* <Td onClick={handleRemove}>Remove</Td> */}
   
      </Tr>
      
    </Tbody>
  )}
   
  </Table>
</TableContainer>
    </div>
  )
}
