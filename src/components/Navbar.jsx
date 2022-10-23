import React from 'react';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-panel'>
        <nav>
            <ul>
                {/* <li><Link to="Home/" element={Home} /></li> */}
                <li><Link to='/'><span>Home</span> <i className="fa-solid fa-house-chimney"></i></Link></li>
                <li><Link to='/about'><span>About</span> <i className="fa-solid fa-user"></i></Link></li>
                <li><Link to='/portfolio'><span>Portfolio</span> <i className="fa-solid fa-briefcase"></i></Link></li>
                <li><Link to='/contact'><span>Contact</span> <i className="fa-solid fa-envelope-open"></i></Link></li>
                <li><Link to='/blogs'><span>Blogs</span> <i className="fa-solid fa-book-open-reader"></i></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;