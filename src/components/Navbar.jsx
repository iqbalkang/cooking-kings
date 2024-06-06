import React from 'react';
import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between capitalize py-8'>
      <a href='/'>
        <img src={Logo} />
      </a>
      <ul className='flex gap-8'>
        <li>
          <a href='/'>home</a>
        </li>
        <li>
          <a href='/menu'>menu</a>
        </li>
      </ul>
      <button className='capitalize bg-accent px-8 py-1 rounded-sm'>order</button>
    </nav>
  );
};

export default Navbar;
