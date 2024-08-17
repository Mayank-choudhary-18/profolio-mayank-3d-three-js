// import React from 'react'
import  {NavLink} from 'react-router-dom'
// import { NavLink } from 'r';
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>AYK</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500': 'text-black-500'}>
            About
        </NavLink>
        <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500': 'text-black-500'}>
            projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
