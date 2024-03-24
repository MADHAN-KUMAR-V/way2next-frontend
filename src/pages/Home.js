import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import axios from 'axios'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagenation/Pagination'


const Home = ({API_URL}) => {
  
  const[searchInput,setSearchInput] = useState('');
  const[collegeList,setCollegeList] = useState([]);
  const[pages,setPages]=useState([])
  const[currPage,setCurrPage] = useState(0)
  const[isEmpty,setIsEmpty]=useState(true)
  
 
 //search input
  const searchSubmit = (e)=>{
    e.preventDefault();
    searchCollege()
  }
 //empty
  useEffect(()=>{
    if(searchInput.length>0){
      setIsEmpty(false);
    }
    else{
      setCurrPage(0)
      allCollges();
    }
  },[searchInput])

  //list all college
  useEffect(()=>{
    allCollges();
  },[])
  const allCollges = async ()=>{
    const allCollegeResult = await axios.get(`${API_URL}?size=12`)
    setCollegeList(allCollegeResult.data.content)
    setPages(allCollegeResult.data)
  
  }

  //searchCollege
  useEffect(()=>{
    searchCollege();
  },[])
  const searchCollege = async ()=>{
    const searchResult = await axios.get(`${API_URL}/search?college=${searchInput}&size=12`)
    setCollegeList(searchResult.data.content)
    setPages(searchResult.data)
  }

  //pagination
  useEffect(()=>{
  
    pageinationCollege();
  },[currPage])
  const pageinationCollege = async ()=>{
    const pagenation = await axios.get(`${API_URL}/search?college=${searchInput}&size=12&page=${currPage}`)
    setCollegeList(pagenation.data.content)

  }



  return (
    <>
    <Navbar />
    <Search 
      searchInput={searchInput} 
      setSearchInput={setSearchInput} 
      searchSubmit={searchSubmit} />
    <Card 
      collegeList={collegeList}
    /> 
    <Pagination 
    pages={pages}
    setCurrPage={setCurrPage}
    currPage={currPage}
    />
    </>
  )
}

export default Home