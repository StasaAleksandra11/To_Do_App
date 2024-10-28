import React from 'react'
import BackButton from '../../assets/intro/BackButton.png'
import { useNavigate } from 'react-router'



    const ArrowButton = () => {
        const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1)
    }
     

  return (
    
      <img src={BackButton} onClick={handleBack} className='w-[45px] md:w-[50px] h-full flex items-start justify-start pt-[70px] cursor-pointer ml-[50px] lg:ml-[100px]' />
    
  )
    }

export default ArrowButton