import React,{useState} from 'react'
import {motion,AnimatePresence, AnimateSharedLayout} from 'framer-motion'

const Clip = ({video,clip_id,title,views,gameID,streamerName,created,thumbnail,game_name}) => {
    const [selected, updateSelected] = useState(false)
   

    const onPlay = ()=>{
      updateSelected(true)
    }

    const clipIno ={
      initial : {height:0,
      transition:{
        when: 'afterParent'
      }},
      animate : {height:'20px'},
      exit : {height:0}
    }



    return (
      <>

 
      
         <AnimateSharedLayout>

      

        {selected ? 
       
       
      ( 
              <div className='z-[100] fixed flex justify-center items-center w-full h-full top-0 bg-[rgba(0,0,0,0.7)]'
      onClick={()=>updateSelected(false)}
      >
    

       <motion.div className='  bg-text font-header flex flex-col items-center justify-center rounded'
         layoutId='selected'>
       
     <motion.video  
      layoutId='selected-v'
      className = 'm-2'  
      src={video}
      controls
      preload='none'
      poster={thumbnail}
      width='1000px'
      />
    <AnimatePresence>
      <motion.div className='flex w-full items-center justify-between p-10'
      variants = {clipIno}
     initial='initial'
     animate='animate'
     exit='exit'
     > 
     
     <motion.p>{streamerName}</motion.p>
     <motion.h2 layoutId='title'>{title}</motion.h2>
     <motion.p>views: {views}</motion.p>
     </motion.div>
     </AnimatePresence>

      </motion.div>
      </div>
      
      )

 :
 (
 <motion.div className=' font-header flex flex-col items-center justify-center mb-5 rounded shadow-2xl  hover:shadow-main'
 layoutId='selected'
 whileHover={{y:-6,  transition:{type: 'spring', bounce:0.7, duration:1}}}
 >


 
    <motion.video 
    className='rounded'
    layoutId='selected-v'
     onPlay ={onPlay}
    //  onClick ={() => updateSelected(true)}
     src={video}
     controls
     preload='none'
     poster={thumbnail}
     width='500px'
     />
     <motion.p className='p-5' layoutId='title'>{title}</motion.p>
</motion.div>
 )


}   
       </AnimateSharedLayout> 
       </>
    )
}



export default Clip