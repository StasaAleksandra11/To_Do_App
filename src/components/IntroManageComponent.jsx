
import clock from '../assets/intro/clock.png'
import NAV from '../assets/intro/NAV.png'
import { Link } from 'react-router-dom'
import BackButton from './common/BackButton'
import NextButton from './common/NextButton'



function IntroManageComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
        <div className=' container mx-auto '>
                 <Link to='/'>
                   <h3 className='text-white text-xl cursor-pointer ml-[50px] pt-[70px]'>SKIP</h3> 
                 </Link>
            <div className='flex flex-col items-center justify-center '>
                  <img src={clock} alt='intro pic' className='w-[213px] md:w-[223px] lg:w-[233px] mt-[40px] pb-[60px] ' />
                   <img src={NAV} />
                   <h2 className=' text-white text-4xl mt-[50px]'>Manage your task</h2>
                   <h3 className=' text-white text-xl mt-[40px] w-1/2 text-center  '>You can easily manage all of your daily task in DoMe for free</h3> 
            </div>
            <div className='flex justify-between mt-[30px]'>
                  <BackButton />
                <Link to='/create'>
                  <NextButton/>
                </Link>
                </div>
            
        </div>
    </div>
  )
}

export default IntroManageComponent