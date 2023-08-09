import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../Assets/logo.svg';
import leftArrow from '../../Assets/left-arrow.png';
import github from '../../Assets/github.png';
import './Header.scss';

export const Header = () => {
  const locationName = useLocation();
  const showBackButton = locationName.pathname === '/list';
  
  return (
    <header className='header content'>
      {showBackButton && (
        <NavLink to='/'>
          <img src={leftArrow} alt="Go Back" className='header__button' />
        </NavLink>
      )}
      
      <NavLink to='/'>
        <img src={logo} alt="logo" />
      </NavLink>
      
      <NavLink to='https://github.com/Anton-Tretiak' target='_blank'>
        <img src={github} alt="GitHub" className='header__github' />
      </NavLink>
    </header>
  );
};
