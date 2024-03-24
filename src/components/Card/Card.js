import React from 'react'
import './Card.css'
import { FaLocationDot } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Card = ({collegeList}) => {
    
  return (
    <>

    <div className="card_grid_container">
        
            {collegeList.map((college)=>(
             <div className='card_item'>
                <img src={college.imgUrl} alt="" width={"80px"} height={"80px"} className='card_img' />
                <div className='card_college_info'>
                  <h2 className='card_college_name'>{college.collegeName}</h2>
                    <h4 className='card_location_txt'><FaLocationDot className='card_location_icon' />{college.location}</h4>
                      <h4 className='card_college_id'>Code: {college.id}</h4>
                    <Link to={`/${college.id}`} className='card_link'>view more&gt;&gt; </Link>
                 
                </div>
             </div>
          
            ))}
    </div>

    </>
  )
}

export default Card