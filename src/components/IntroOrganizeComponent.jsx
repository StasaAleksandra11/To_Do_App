import React from 'react'
import imgOrg from '../assets/intro/imgOrg.png'
import textOrg from '../assets/intro/textOrg.png'
import pOrg from '../assets/intro/pOrg.png'
import NAVOrg from '../assets/intro/NAVOrg.png'
import Skip from '../assets/intro/Skip.png'
import BackButton from './common/BackButton'
import getstarted from '../assets/intro/getstarted.png'
import { Link } from 'react-router-dom'
function IntroOrganizeComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
      <div className='container mx-auto'>
        <img src={Skip} className='w-[45px] h-full flex items-start justify-start pt-[70px] cursor-pointer ml-[50px] lg:ml-[100px]' />
          <div className='flex flex-col items-center justify-center'>
            <img src={imgOrg} className='w-[257px] md:w-[267px] lg:w-[277px] h-full mt-[60px]'/>
             <img src={NAVOrg} className='mt-[60px] mb-[50px]'/>
             <img src={textOrg} className='w-[303px] md:w-[313px] lg:w-[323px] '/>
             <img src={pOrg} className='W-[299px] mt-[50px]' />
          </div>
          <div className='flex justify-between  items-center mt-[30px] '>
               
               <BackButton />
             
             <Link to='/started'>
               <img src={getstarted} className='w-[148px] md:-[158px] lg:w-[168px] mr-[30px] md:mr-[50px] lg:mr-[100px]'/>
             </Link>
             </div>
      
      </div>
    </div>
  )
}

export default IntroOrganizeComponent