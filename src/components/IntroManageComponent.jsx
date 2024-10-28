
import clock from '../assets/intro/clock.png'
import NAV from '../assets/intro/NAV.png'
import Manage from '../assets/intro/Manage.png'
import Youcan from '../assets/intro/Youcan.png'
import next from '../assets/intro/next.png'
import { Link } from 'react-router-dom'
import BackButton from './common/BackButton'
import Skip from '../assets/intro/Skip.png'


function IntroManageComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
        <div className=' container mx-auto '>
                 <Link to='/'>
                    <img src={Skip} className='w-[45px] h-full flex items-start justify-start pt-[70px] cursor-pointer ml-[50px] lg:ml-[100px]' />
                 </Link>
            <div className='flex flex-col items-center justify-center '>
                  <img src={clock} alt='intro pic' className='w-[213px] md:w-[223px] lg:w-[233px] mt-[40px] pb-[60px] ' />
                   <img src={NAV} />
                   <img src={Manage} className='w-[269px] md:w-[279px] lg:w-[289px] mt-[50px]'/>
                   <img src={Youcan} className='w-[299px] md:w-[309px] lg:w-[319px] mt-[50px]' />  
            </div>
            <div className='flex justify-between mt-[30px]'>
               
                  <BackButton />
                
                <Link to='/create'>
                  <img src={next} className='w-[90px] md:w-[100px] lg:w-[110px] mr-[30px] md:mr-[50px] lg:mr-[100px]'/>
                </Link>
                </div>
            
        </div>
    </div>
  )
}

export default IntroManageComponent