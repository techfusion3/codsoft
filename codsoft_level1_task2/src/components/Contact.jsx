import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <section
    id='contact'
    className='section py-16'
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: -100}}
        transition={{ duration: 1 }}
        className='mb-12 lg:mb-10 lg:flex lg:flex-col lg:pr-10'>
        <h2 className="text-3xl font-semibold mb-5">Get In Touch</h2>
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Info</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <MdEmail className="text-2xl text-white" />
              <span>faijanahamed11@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MdLocationOn className="text-2xl text-white" />
              <span className='text-zinc-300'>Lucknow, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-4">
            <MdPhone className="text-2xl text-white" />
              <span className='text-zinc-300'>+91 9794589839</span>
            </div>
               </div>
      
          <div className='flex items-center gap-3 mt-auto text-2xl'>
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
        </motion.div>

        <motion.form
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: 100}}
        transition={{ duration: 1 }}
        action='https://getform.io/f/bdrnelob'
        method="POST"
        className='xl:pl-10 2xl:pl-20'
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label 
              htmlFor="name"
              className='label'
              >
                Name
              </label>
              <input 
              type='text' 
              name='name'
              id='name'
              autoComplete='name'
              required
              placeholder='Enter your name'
              className='text-field'
              />
            </div>

            <div className="mb-4">
              <label 
              htmlFor="email"
              className='label'
              >
                Email
              </label>
              <input 
              type='email' 
              name='email'
              id='email'
              autoComplete='email'
              required
              placeholder='Enter your email'
              className='text-field'
              />
            </div>

          </div>

          <div className="mb-4">
            <label 
            htmlFor="message"
            className='label'
            >
              Message
            </label>
            <textarea 
            name="message" 
            id="message" 
            placeholder='Enter your message'
            required
            className="text-field resize-y min-h-32 max-h-80"
            >
            </textarea>
          </div>
          
          <button 
          type="submit" 
          className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-500 hover:from-sky-500 hover:to-blue-400 text-white font-semibold rounded-full transition-transform transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Send
          </button>

        </motion.form>

      </div>
    </section>
  )
}
export default Contact
