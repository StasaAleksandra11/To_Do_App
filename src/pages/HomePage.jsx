
import { useState } from 'react'
import IntroComponent from '../components/INtroComponent'
import addPlus from '../assets/homeImg/addPlus.png'
import calendarIcons from '../assets/homeImg/calendarIcons.png'
import focuseIcons from '../assets/homeImg/focuseIcons.png'
import index from '../assets/homeImg/Index.png'
import One from '../assets/homeImg/One.png'
import profileIcons from '../assets/homeImg/profileIcons.png'
import pText from '../assets/homeImg/pText.png'
import Rectangle from '../assets/homeImg/Rectangle.png'
import sideBar from '../assets/homeImg/sideBar.png'
import text from '../assets/homeImg/text.png'
import homeIcons from '../assets/homeImg/homeIcons.png'
function HomePage() {
  const [introActive, setIntroActive] = useState(true)
  return (
    <div className='bg-[#121212] '>
        {introActive ? <IntroComponent/> : null}
        <div className='container mx-auto pt-[140px]'>
          <div className='flex flex-col items-center mb-[100px]'> 
            <div className='flex items-center space-x-[200px]' >
              <img src={sideBar} className='w-[47px]md:w-[60px] lg:w-[70px]' />
              <img src={index} className='w-[47px]md:w-[60px] lg:w-[70px]'/>
            </div>
            <div className='items-center'>
            <img src={One} className='w-[227px] md:w-[242px] lg:w-[260px] h-full pt-[70px]'/>
              <img src={text} className='w-[270px] md:w-[285px] lg:w-[390px]'/>
              <img src={pText} className='w-[159px] md:w-[169px] lg:w-[200px] mt-[30px]'/>
            </div>
            </div>
          </div>
           <div className=' flex flex-col items-center h-1/2 '>
            
               <img src={addPlus} className='w-[64px] -mb-8  z-10 h-full'/>
             
               <div className='flex  bg-[#363636] w-full items-center justify-center space-x-12 p-[50px] mb-[100px]'>
                <img src={homeIcons} className='w-[40px]'/>
                <img src={calendarIcons} className='w-[58px]'/>
                <img src={focuseIcons}className='w-[50px]' />
                <img src={profileIcons}className='w-[50px]'/>
               </div>
            </div>

        </div>
   
  )
}

export default HomePage