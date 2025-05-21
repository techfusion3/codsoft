import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiRailway } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial= {{opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies
        </motion.h2>
    
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
        >
        <motion.div 
        variants={iconVariants(1)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostman 
            className='text-7xl text-orange-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)} 
        initial="initial" 
        animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb 
            className='text-7xl text-green-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress 
            className='text-7xl text-gray-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub 
            className='text-7xl text-white'/>
        </motion.div>
        
        <motion.div 
        variants={iconVariants(3.5)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTailwindcss 
            className='text-7xl text-sky-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiVercel 
            className='text-7xl text-white'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiRender 
            className='text-7xl text-indigo-500'/>
        </motion.div>
        <motion.div variants={iconVariants(3)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiRailway 
            className='text-7xl text-yellow-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiRedux 
            className='text-7xl text-purple-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)} 
        initial="initial" animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiBootstrap 
            className='text-7xl text-[#7952B3]'/>
        </motion.div>
     </motion.div>

            
        

    </div>
  )
}

export default Technologies


{/* <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: -300}}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostman className='text-7xl text-orange-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl text-gray-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-sky-400'/>
            </motion.div>



        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: -400}}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            


            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-7xl text-white-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiVercel className='text-7xl text-white'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRender className='text-7xl text-indigo-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRailway className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedux className='text-7xl text-purple-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiBootstrap className='text-7xl text-[#7952B3]'/>
            </motion.div>



        </motion.div> */}