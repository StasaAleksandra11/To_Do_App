import { useState } from 'react';
import IntroComponent from '../components/INtroComponent';
import One from '../assets/homeImg/One.png';
import Rectangle from '../assets/homeImg/Rectangle.png';
//icons
import { RiHome4Fill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineWatchLater } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

function HomePage() {
	const [introActive, setIntroActive] = useState(false);
	return (
		<div className='bg-[#121212]'>
			{introActive ? <IntroComponent /> : null}
			<div className='container mx-auto pt-[50px]'>
				<div className='flex flex-col items-center mb-[80px]'>
					<div className='flex items-center space-x-[240px] md:space-x-[400px] lg:space-x-[500px] '>
						<HiOutlineMenuAlt2
							color='white'
							
							className='cursor-pointer  size-[28px] md:size-[34px] lg:size-[40px]'
						/>
						<h3 className='text-white text-xl cursor-pointer text-xl md:text-2xl  lg:text-3xl'>
							Index
						</h3>
					</div>
					<div className='items-center'>
						<img
							src={One}
							className='w-[250px] md:w-[340px] lg:w-[380px] h-full pt-[80px] md:pt-[30px]'
						/>
						<h2 className='text-white text-2xl'>
							What do you want to do today?
						</h2>
						<h3 className='text-white mt-[30px] mb-[30px] md:mb-[10px] text-xl'>
							Tap + to add your tasks
						</h3>
					</div>
				</div>
			</div>
			<div className=' flex flex-col items-center h-1/2  '>
				<button className='flex items-center justify-center text-center w-[65px] h-[65px] bg-[#8875FF] text-white rounded-full text-4xl -mb-8  z-10 cursor-pointer'>
					+
				</button>

				<div className='flex flex-col space-y-8  bg-[#363636]  items-center justify-center space-x-14 p-[60px]  w-full '>
					<div className='flex space-x-6 md:space-x-24 lg:space-x-36'>
						<div className='flex flex-col items-center p-[10px] space-y-2 '>
							<RiHome4Fill
								color='white'
								size={36}
								className='cursor-pointer lg:size-[40px]'
							/>
							<h3 className='text-white text-lg cursor-pointer '>
								index
							</h3>
						</div>

						<div className='flex flex-col items-center p-[10px] space-y-2'>
							<LuCalendarDays
								color='white'
								size={36}
								className='cursor-pointer lg:size-[40px]'
							/>
							<h3 className='text-white text-lg cursor-pointer'>
								Calendar
							</h3>
						</div>

						<div className='flex flex-col items-center p-[10px] space-y-2'>
							<MdOutlineWatchLater
								color='white'
								size={36}
								className='cursor-pointer lg:size-[40px]'
							/>
							<h3 className='text-white text-lg cursor-pointer'>
								Focuse
							</h3>
						</div>

						<div className='flex flex-col items-center p-[10px] space-y-2 cursor-pointer'>
							<CgProfile
								color='white'
								size={36}
								className='cursor-pointer lg:size-[40px]'
							/>
							<h3 className='text-white text-lg cursor-pointer'>
								Profile
							</h3>
						</div>
					</div>
					<div />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
