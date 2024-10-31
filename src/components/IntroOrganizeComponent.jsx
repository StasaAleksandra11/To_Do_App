
import imgOrg from '../assets/intro/imgOrg.png'
import NAVOrg from '../assets/intro/NAVOrg.png'

import BackButton from './common/BackButton'
import getstarted from '../assets/intro/getstarted.png'
import { Link } from 'react-router-dom'
function IntroOrganizeComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
      <div className='container mx-auto'>
      <h3 className='text-white text-xl cursor-pointer ml-[50px] pt-[70px]'>SKIP</h3> 
          <div className='flex flex-col items-center justify-center'>
            <img src={imgOrg} className='w-[257px] md:w-[267px] lg:w-[277px] h-full mt-[60px]'/>
             <img src={NAVOrg} className='mt-[60px] mb-[50px]'/>
             <h2 className='text-white text-4xl mt-[10px]'>Organize your task</h2>
            
             <h3 className='text-white text-xl mt-[40px] w-1/2 text-center '>You can organize your ddaily task adding your tasks into separate categories</h3>
             
          </div>
          <div className='flex justify-between  items-center mb-[15px] '>
               
               <BackButton />
             
             <Link to='/started'>
               <h3 className='text-white bg-[#8875FF] px-[25px] py-[12px] rounded-md mr-[30px] md:mr-[50px] lg:mr-[200px]'>GET STARTED</h3>
              
             </Link>
             </div>
      
      </div>
    </div>
  )
}

export default IntroOrganizeComponent