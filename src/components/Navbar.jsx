import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Link to={'/'}>
          GTM<span>.</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to={'#'}>Services</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'#'} className='highlight'>
            Book Session
          </Link>
        </li>
      </ul>
    </nav>
  )
}
