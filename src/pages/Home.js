import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import axios from 'axios'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagenation/Pagination'

const Home = ({API_URL}) => {
  
  const[searchInput,setSearchInput] = useState('');
  const[collegeList,setCollegeList] = useState([]);
  const[page,setPage]=useState([])
  const[currPage,setCurrPage]=useState(0)
  

  //search
  const searchSubmit = (e)=>{
    e.preventDefault();
    getColleges();
  }
  

  //search
  useEffect(()=>{
    if(searchInput===''){
      getColleges()
    }
    
  },[searchInput])
  
  //home page
  useEffect(() =>  {
    getColleges(); 
  }, []);

  //get college list pagination
  const getCollegePage = async ()=>{
    try{
      const res = await axios.get(`${API_URL}/search?college=${searchInput}&page=${currPage}&size=12`);
      setCollegeList(res.data.content)
    }
    catch(e){
      console.log(e)
    }
  };

  // get all college
  const getColleges = async ()=>{
    try{
      const res = await axios.get(`${API_URL}/search?college=${searchInput}&size=12&page=${currPage}`);
      setPage(res.data)
      setCollegeList(res.data.content)
    }
    catch(e){
      console.log(e)
    }
  };

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
      toatalPage={page.totalPages} 
      API_URL={API_URL}
      setCollegeList={setCollegeList}
      searchInput={searchInput}
      currPage={currPage}
      setCurrPage={setCurrPage}
      getCollegePage={getCollegePage}
      />
    </>
  )
}

export default Home