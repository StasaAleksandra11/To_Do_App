import React from 'react'

import { useNavigate } from 'react-router'



    const BackButton = () => {
        const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1)
    }
     

  return (
    <h3 className='text-white text-2xl cursor-pointer ml-[50px]' onClick={handleBack}>BACK</h3>
     
    
  )
    }

export default BackButton