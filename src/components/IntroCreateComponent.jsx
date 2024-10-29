
import introframe from '../assets/intro/introframe.png'
import Skip from '../assets/intro/Skip.png'
import { Link } from 'react-router-dom'
import NAV1 from '../assets/intro/NAV1.png'
import BackButton from './common/BackButton'
import next from '../assets/intro/next.png'
function IntroCreateComponent() {
  return (
    <div className="bg-[#121212] text-white h-[800px] ">
      <div className=' container mx-auto'>
       <Link to='/'>
         <img src={Skip} className='w-[45px] h-full flex items-start justify-start pt-[70px] cursor-pointer ml-[50px] lg:ml-[100px]' />
        </Link>
        <div className='flex flex-col items-center justify-center'>
          <img src={introframe} className='w-[271px] md:w-[281px] lg:w-[291px] mt-[20px] pb-[60px]'/>
          <img src={NAV1} />
          <h2 className='text-white text-4xl mt-[50px]'>Create daily routine</h2>
          
          <h3 className='text-white text-xl mt-[40px] w-1/2 text-center'>In Uptodo you can create personalized routine to stay prpoductive</h3>
          
          </div>
          <div className='flex justify-between mt-[30px]'>
            <BackButton/>
            <Link to='/organize'>
             <img src={next} className='w-[90px] md:w-[100px] lg:w-[110px] mr-[30px] md:mr-[50px] lg:mr-[100px]'/>
            </Link>
          </div>

        
      </div>
    </div>
  )
}

export default IntroCreateComponent