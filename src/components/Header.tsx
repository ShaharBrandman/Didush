/*
 * src/components/Header.tsx
 * Contains the logo and the Menu button
 * 
 */
import React from 'react';

import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header className = 'header'>
      <img src = {require('../assets/logo.jpeg')} />
      <Menu/>
    </header>
  );
};

export default Header;
