import React from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa";

const Search = ({searchInput,setSearchInput,searchSubmit}) => {
  return (
    <>
     <div className='search_container'>
     <form action="" className='search_form' onSubmit={searchSubmit}>
        {/* search input */}
        <input 
            type="text"
            className='search_input'
            placeholder='Search college....'
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value.trim())}
            required
        />

        <button
         className='search_button'
        ><FaSearch /></button>

     </form>
     </div>
    </>
  )
}

export default Search