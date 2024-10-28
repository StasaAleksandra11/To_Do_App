import React from 'react'
import createac from '../assets/intro/createac.png'
import welcome from '../assets/intro/welcome.png'
import please from '../assets/intro/please.png'
import loginbutt from '../assets/intro/loginbutt.png'
import ArrowButton from './common/ArrowBack'
function IntroStartComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
      <div className='container mx-auto'>
       <ArrowButton/>
        <div className='flex flex-col items-center justify-center '>
         <img src={welcome} className='w-[291px] md:w-[301px] lg:w-[311px] h-full mt-[40px] pb-[60px]'/>
         <img src={please} className='w-[287px] md:w-[297px] lg:w-[307px]'/>
        </div>
        <div className='flex flex-col items-center  lg:justify-between mt-[150px] space-y-6 '>
          <img src={loginbutt} className='w-[327px] '/>
          <img src={createac} className='w-[327px] '/>
        </div>
      </div>
    </div>
  )
}

export default IntroStartComponent