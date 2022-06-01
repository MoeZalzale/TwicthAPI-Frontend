import React,{useState,useEffect} from 'react'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import Clip from './Clip'

const ClipsList = ({api}) => {
const [clips,updateClipsWeek] = useState([])
const date = new Date().toISOString().match(/(.+)[A-Z][0-9.:]+[A-Z]$/)[1]

const getClips=async ()=>{

    const response = await fetch(api)
        
    const data = await response.json()
    updateClipsWeek(data)
}
useEffect(()=>{
getClips()

},[])



    return (
        <>
     
        <AnimateSharedLayout>
        <div className = 'justify-items-center content-center w-full grid grid-cols-4 gap-2.5 p-5'> 

          {clips?.map(clip=> 
                <Clip
                video= {clip.video}
                clip_id ={clip.clip_id}
                title = {clip.title}
                views = {clip.views}
                gameID = {clip.gameID}
                streamerName = {clip.streamerName}
                created = {clip.created}
                thumbnail = {clip.thumbnail}
                game_name = {clip.game_name}
                />
             
            
            
             )}   
            
        </div>
        </AnimateSharedLayout> 
      </>
       
    )
}

export default ClipsList
