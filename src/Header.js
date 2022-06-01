import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useAnimation, motion} from 'framer-motion'
function Header() {

    const itemctrl = useAnimation()
    const linectrl=useAnimation()
    const seq= async () =>{
    await itemctrl.start(items.visible)
    linectrl.start(header.visible)
    }

    const items = {
        hidden: i =>  ({
            x:i==0?-100:100, 
            opacity:0
        }),
        visible: {
            x:0,
            opacity:1,
            transition: {
                type: 'spring',
                    duration: 1,
                    bounce:0.5,
            }
        },

        hover: {
                textShadow: '0 0.2rem 10px',
                scale:1.1,
                rotateZ: [null,null,20,-20,0],
                transition:{
                    type: 'spring',
                    duration:1,
                    times: [0,0.6,0.8,1],
                    ease: 'easeInOut'
                }
        },

        tap: {
            scale: 0.6,
            rotateZ:0
        }
    }

    const header= {
        hidden: {
            x1:0, x2:0
        },

        visible: {
            x2:'100%',
            transition: {duration: 1}
        }
    }


    useEffect(() => {
      seq()
    }, [])
    return (
        <>
   <div className=' pb-5 top-0 min-w-full z-0 flex items-center justify-center'> 
       
  <div className = 'flex items-center justify-evenly p-5 font-header'>

        <a className = 'px-10 no-underline'href = '/'> <motion.h1 custom={0} variants={items} whileTap='tap' whileHover='hover' initial='hidden' animate={itemctrl} className='text-main text-3xl ' >Home</motion.h1> </a>  
        <a className = 'px-10 no-underline'href = '/clips'> <motion.h1 custom={0} variants={items} whileTap='tap' whileHover='hover' initial='hidden' animate={itemctrl} className='text-main text-3xl ' >Clips</motion.h1> </a>
        <a className = ' px-10 no-underline'href = '/games'>  <motion.h1 custom={1} variants={items} whileTap='tap' whileHover='hover' initial='hidden' animate={itemctrl} className='text-main text-3xl ' >Games</motion.h1> </a>





  </div>
  
        </div>
        <svg height="7" width="100%">
        <motion.line variants={header }initial='hidden' animate ={linectrl} className='stroke-main stroke-2 drop-shadow-2xl' />
      </svg>
      
      </>
      
    )
}

export default Header
