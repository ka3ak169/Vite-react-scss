import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <>
      <div className='navbar'>
        <nav className='navbar__nav'>
          <li className='navbar__unit'>
            <Link className='navbar__link' to="/">main</Link>
          </li>
          <li className='navbar__unit'>
            <Link className='navbar__link' to="/contacts">aboust us</Link>
          </li>
          <li className='navbar__unit'>
            <Link className='navbar__link' to="/about-us">contacts</Link>
          </li>
        </nav>
      </div>
    </>
  )
}

export default Navbar