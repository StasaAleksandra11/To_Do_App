
import introframe from '../assets/intro/introframe.png'
import { Link } from 'react-router-dom'
import NAV1 from '../assets/intro/NAV1.png'
import BackButton from './common/BackButton'
import NextButton from './common/NextButton'

function IntroCreateComponent() {
  return (
    <div className="bg-[#121212] text-white h-[800px] ">
      <div className=' container mx-auto'>
       <Link to='/'>
       <h3 className='text-white text-xl cursor-pointer ml-[50px] pt-[70px]'>SKIP</h3> 
        </Link>
        <div className='flex flex-col items-center justify-center'>
          <img src={introframe} className='w-[271px] md:w-[281px] lg:w-[291px] mt-[20px] pb-[60px]'/>
          <img src={NAV1} />
          <h2 className='text-white text-4xl mt-[50px]'>Create daily routine</h2>
          
          <h3 className='text-white text-xl mt-[40px] w-1/2 text-center'>In Uptodo you can create personalized routine to stay prpoductive</h3>
          
          </div>
          <div className='flex justify-between pb-[15px]'>
            <BackButton/>
            <Link to='/organize'>
            <NextButton/>
            </Link>
          </div>

        
      </div>
    </div>
  )
}

export default IntroCreateComponent