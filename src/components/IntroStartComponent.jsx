
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
          <h3 className='text-white bg-[#8875FF] px-[140px] py-[11px] rounded-md'>LOGIN</h3>
          <h3 className='text-white border-2 border-[#8875FF]  px-[93px] py-[11px] rounded-md'>CREATE ACCOUNT</h3>
        </div>
      </div>
    </div>
  )
}

export default IntroStartComponent