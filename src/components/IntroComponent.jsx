import { Link } from 'react-router-dom'
import logointro from '../assets/intro/logointro.png'
import NextButton from './common/NextButton'

function IntroComponent() {
  return (
    <div className="bg-[#121212] text-white h-[800px] ">
        <div className=" container  flex items-center  justify-center pt-[140px]" >
         <img src={logointro} alt='intro' className='mx-auto  w-[140px] lg:w-[180px] h-[180px] lg:h-[220px] mt-[80px] mb-[50px]'/>
        </div>
        <div className='flex  justify-end mt-[150px] '>
          <Link to='/intro'> 
            <NextButton/>
          </Link>
        </div>
    </div>
  )
}

export default IntroComponent