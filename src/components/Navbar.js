import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav className='flex justify-between items-center p-5 mx-2 border-b-2 border-gray-50'>
         <Link
            to='/'
            className='text-xl font-extrabold text-gray-800 hover:text-black'
            style={{
               textShadow: "-1px 2px 1px #FF9900",
            }}
         >
            Life in a Blog.
         </Link>
         <ul className='flex gap-5'>
            <li className='nav__link'>
               <Link to='/'>Home</Link>
            </li>
            <li className='nav__link'>
               <Link to='/create'>New Blog</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
