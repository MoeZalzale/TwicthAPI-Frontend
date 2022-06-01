import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Header from './Header'
import Video from './Video'
import {subHeaders} from './reusable'
import {TwitchClip} from 'react-twitch-embed'
import ReactPlayer from 'react-player'
import {motion, useViewportScroll, useAnimation} from 'framer-motion'
import { duration } from '@mui/material'
import {url} from './backend'


function ClipsPage() {

const [clips, updateClips]= useState([])
const [filterStreamer, updateStreamer]= useState("")
const [filterGame, updateGame]= useState("")
const [from_to, updateFrom_to]=useState({'from':0,'to':20})
const {scrollYProgress}= useViewportScroll()
const [isFetching, updateFetching]=useState(false)


const  getClips = async () =>{
const response = await fetch(`${url}/api/clips?f=${from_to['from']}&t=${from_to['to']}`)
const data = await response.json()
let arr= [...clips,...data]
updateClips(arr)
}

const handleScrollFetch =  () =>{
  
 if (window.scrollY+window.innerHeight===document.documentElement.offsetHeight){
   updateFetching(true)
    

 }
}
useEffect(() => {
  if (!isFetching){return}
    updateFrom_to({'from':from_to['from']+=20,'to':from_to['to']+=20})
    getClips()
    updateFetching(false)
  

}, [isFetching])


useEffect(()=>{
 getClips()

window.addEventListener('scroll',handleScrollFetch)
return () => {
  window.removeEventListener('scroll', handleScrollFetch);
}
},[])






    return (
      
       <div className="flex flex-col min-h-screen bg-text">
         <Header/>
         
         {subHeaders("Top Clips", "Filter by Streamer", "Filter by Game",updateStreamer,updateGame )}
      
           <div className='w-full grid  grid-cols-4 auto-rows-fr p-5 gap-2.5 justify-items-center content-center overflow-hidden'>
           {clips.filter(c => c.streamerName.toLowerCase().includes(filterStreamer.toLowerCase()))
           .filter(g => g.game_name.toLowerCase().includes(filterGame.toLowerCase()))
           .map((clip,i) =>( 




          
            <motion.video className='rounded shadow-lg hover:shadow-main'
            initial = {{opacity:0,scale:0}}
            whileInView ={{opacity:1, scale:1,transition:{type:'tween'}}}
            whileHover ={{y:-5,  transition:{type:'spring',duration:0.1}}}
           

            
  
            src={clip.video}
            controls
            preload='none'
            poster={clip.thumbnail}
            width='500px'
            >
             
               
            </motion.video>
           
          
  
           

          ))}
         
         
          

</div>
</div> 
         
    )}
   

            






export default ClipsPage
