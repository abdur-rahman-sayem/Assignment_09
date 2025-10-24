import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <div>
       <footer className="footer flex flex-col sm:flex-row justify-between bg-black text-white  px-18 py-5">
<div className="w-60">
 <div className='flex items-center'>
    <img src={Logo} alt="Logo" className="w-10 h-10" />
        <Link to="/" className=" text-xl ">
          HERO.IO
        </Link>
 </div>
 <p className="text-left text-sm">HERO.IO is an easy-to-use platform that lets you build and manage apps quickly. It provides simple tools to turn your ideas into real applications, deploy them instantly, and collaborate with your team efficiently.</p></div>
  <nav className='text-xl'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Advertisement</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-xl">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/" className="text-white">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/" className="text-white">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/" className="text-white">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com/" className="text-white">
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-black text-white border-1 p-3">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
  </aside>
</footer>
</div>
    );
};

export default Footer;