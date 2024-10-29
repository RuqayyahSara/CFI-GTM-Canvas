import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer>
      <div className='links'>
        <ul>
          <span className='heading'>Navigation</span>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'#'}>GTMCanvas</Link>
          </li>
          <li>
            <Link to={'#'}>Handbook</Link>
          </li>
          <li>
            <Link to={'#'}>Founder</Link>
          </li>
        </ul>
        <ul>
          <span className='heading'>Contact</span>
          <li>+91-630 980 6633</li>
          <li>meraj@gtmcanvas.com</li>
          <li>gtmcanvas.com</li>
        </ul>
        <div>
          <span className='heading'>Get the latest information</span>
          <form onSubmit={handleSubmit}>
            <div className='formControl'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
              />
            </div>
            <button type='submit'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#5f6368'
              >
                <path d='M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z' />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className='logo'>
        <h1>
          GTM<span>.</span>
        </h1>
      </div>
    </footer>
  )
}
