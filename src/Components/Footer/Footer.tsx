import { NavLink } from 'react-router-dom';

import logo from '../../Assets/logo.svg';
import './Footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
      <img src={logo} alt="logo"/>
    </NavLink>
  </footer>
);
