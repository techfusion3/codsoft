import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h3 className='font-bold'>Portfolio</h3>
        </div>
        <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
          <a 
            href="https://www.linkedin.com/in/faijanahamed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer"
            >
            <FaLinkedin />
            </a>
            <a 
              href="https://github.com/techfusion3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 cursor-pointer"
            >
                <FaGithub />
            </a>
            <a
              href="https://x.com/ahamed_faijan?t=go4uWFb_iAtOb4CO8gpgfw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.instagram.com/faizan9616_07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 cursor-pointer"
            >
                <FaInstagram />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar