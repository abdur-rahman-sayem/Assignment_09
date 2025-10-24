
import { Github } from 'lucide-react';
import { Menu } from 'lucide-react';
import React from 'react';
import Logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
 <div className="navbar bg-base-100  lg:px-10 py-2">
      <div className="navbar-start flex items-center space-x-2">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost p-2">
            <Menu className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content text-xl  mt-3 p-2 shadow bg- rounded-box w-40"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apps">Apps</Link></li>
            <li><Link to="/installation">Installation</Link></li>
          </ul>
        </div>
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <Link to="/" className="btn border-none text-xl p-1 text-[#632EE3] bg-white">
          HERO.IO
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        
          <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink>
          <NavLink to="/apps" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Apps</NavLink>
          <NavLink to="installation" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Installation</NavLink>
      
      </div>

      <div className="navbar-end">
        <a
          href=""
          className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center transition-transform duration-300 hover:scale-105"
        ><Github className="w-5 h-5" />
          <span>Contribute</span>
        </a>
      </div>
    </div>

    );
};

export default Navbar;