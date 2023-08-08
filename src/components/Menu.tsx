/*
 * src/components/Menu.tsx
 * contains the menu items that open up when you click the menu button
 */
import React, { useState, useRef, useEffect } from 'react';

const Menu: React.FC = () => {

  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  //handle click outside of Menu
  const handleOutsideClick = (event: MouseEvent) => {
    //if there is a mouse event and it doesn't contain the current DOM
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    //if the menu if open, add the outside DOM listener
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    //else remove it
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }

    //kinda useless code
    //return () => {
    //  window.removeEventListener('click', handleOutsideClick);
    //};
  }, [isOpen]);

  return (
    <div className = {`menu ${isOpen ? 'open' : ''}`} ref = {menuRef}> 
      <button className = 'menuButton' onClick = { toggleMenu }>
        <p> Menu </p>
      </button>
      <ul className = 'menuItems'>
        <li> בית </li>
        <li> תפריט</li>
        <li> אודות </li>
        <li> צור קשר </li>
      </ul>
    </div>
  );
};

export default Menu;
