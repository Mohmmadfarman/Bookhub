import React, { useState } from 'react';
import img1 from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center w-full h-[80px] p-4'>
      <div className='flex items-center gap-4'>
        <img src={img1} alt="Logo" height={70} width={70} />
        <h1 className='text-2xl font-semibold'>BOOKSHUB</h1>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-10'>
        <NavLink to={'/'} className='text-2xl font-semibold cursor-pointer'>Home</NavLink>
        <NavLink to={'/about'} className='text-2xl font-semibold cursor-pointer'>About</NavLink>
        
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-[60px] left-0 right-0 bg-white shadow-lg z-10 flex flex-col items-center p-4 md:hidden '>
          <NavLink to={'/'} className='text-2xl font-semibold py-2' onClick={toggleMenu}>Home</NavLink>
          <NavLink to={'/about'} className='text-2xl font-semibold py-2' onClick={toggleMenu}>About</NavLink>
        </div>
      )}
    </div>
  );
}
