
import createac from '../assets/intro/createac.png'
import loginbutt from '../assets/intro/loginbutt.png'
import ArrowButton from './common/ArrowBack'
function IntroStartComponent() {
  return (
    <div className='bg-[#121212] h-[800px]'>
      <div className='container mx-auto'> 
       <ArrowButton/>
        <div className='flex flex-col items-center justify-center '>
          <h2 className='text-white text-4xl mt-[40px] pb-[60px]'>Welcome to UPTodo</h2>
         
         <h3 className='text-white text-xl w-1/2 text-center'>Please login to your account or create new account to continue</h3>
         
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