import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/Navbar.css';

export const NavBar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={expandNavbar ? 'navbar open' : 'navbar close'}>
      <div className='toggleButton'>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='navbar-links'>
        <NavLink to='/' end>
          Home
        </NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/experience'>Experience</NavLink>
        <NavLink to='/education'>Education</NavLink>
      </div>
    </div>
  );
};
