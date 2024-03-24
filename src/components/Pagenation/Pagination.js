import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'
import axios from 'axios'

const Pagination = ({toatalPage,API_URL,setCollegeList,searchInput,setCurrPage,currPage,getCollegePage}) => {
    
    const handlePageChange = (data)=>{
      setCurrPage(data.selected)
     
    }
  

    useEffect(()=>{
      getCollegePage();
    },[currPage])
   

  return (
    <>
    <div className='pagination_container'>
    <ReactPaginate 
    previousLabel={"<"}
    nextLabel={">"}
    breakLabel={"..."}
    pageCount={toatalPage}
    marginPagesDisplayed={3}
    onPageChange={handlePageChange}
    containerClassName={'pagination'}
    pageLinkClassName={'page-item'}
    pageClassName={'page-link'}
    previousClassName={'page-link'}
    nextClassName={'page-link'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />
    </div>
    </>
  )
}

export default Pagination