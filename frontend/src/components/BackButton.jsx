import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";


const BackButton = () => {
    let navigate = useNavigate();
  return (
    <div>
        <MdOutlineArrowBack className='cursor-pointer text-blue-500 text-lg' onClick={()=> navigate(-1)}></MdOutlineArrowBack>
    </div>
  )
}

export default BackButton