import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const College = ({API_URL}) => {
    const {id} = useParams();
    const[collegeInfo,setCollegeInfo] = useState('')

    const getCollege = async ()=>{
        try{
          const res = await axios.get(`${API_URL}/${id}`);
          setCollegeInfo(res.data)
        }
        catch(e){
          console.log(e)
        }
      };

      useEffect(()=>{
        getCollege()
      },[])


  return (
    <>
    <Navbar />
      <h1>{collegeInfo.collegeName}</h1>
      <h2>{collegeInfo.location}</h2>
    </>
  )
}

export default College