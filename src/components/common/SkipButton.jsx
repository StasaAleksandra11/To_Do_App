
import Skip from '../../assets/intro/Skip.png'
import { Link } from 'react-router-dom'
const SkipButton = () => {
  return ( 
    <Link to='/'>
      <img src={Skip} className='w-[35px] h-[24px]'/>
    </Link>
  )
}

export default SkipButton