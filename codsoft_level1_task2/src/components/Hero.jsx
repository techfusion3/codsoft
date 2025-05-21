import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/image2.png";
import { motion } from "motion/react"
import Role from './Role';

// initial={{x: -100, opacity: 0}}
// animate={{x: 0, opacity:  1}}
// transition={{duration: 0.5, delay: 0.5}}
const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0, 
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
            
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>
                        Faijan Ahamed</motion.h1>
                    <motion.span 
                    variants={container(0.3)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight'>
                        {" "}
                        <Role />
                    </motion.span>
                    <motion.p 
                    variants={container(0.6)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}
                    </motion.p>

                    <motion.a
                    href="/Faijan_Resume2.pdf"
                    download
                    variants={container(0.7)}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 inline-block rounded bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-white font-medium hover:from-pink-600 hover:to-purple-600 transition"
                >
                    Download Resume
                </motion.a>

                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{ x:100, opacity:0 }}
                    animate={{ x:0, opacity:1 }}
                    transition={{ duration: 1, delay: 0.7}}
                    src={profilePic} 
                    alt='Faijan Ahamed' 
                    className='w-100 h-auto object-cover rounded-3xl'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero