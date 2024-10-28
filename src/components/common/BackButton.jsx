import React from 'react'
import Back from '../../assets/intro/Back.png'
import { useNavigate } from 'react-router'



    const BackButton = () => {
        const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1)
    }
     

  return (
    
      <img src={Back} onClick={handleBack} className='w-[55px] md:w-[65px] lg:w-[75px] h-full cursor-pointer ml-[50px] lg:ml-[100px] '/>
    
  )
    }

export default BackButton