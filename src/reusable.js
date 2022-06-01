import {TextField} from '@mui/material'
import {motion} from 'framer-motion'
const subHeaders  = (text, searchFor,searchFor2=null, oc, oc2=null)=> 
  (
  <div className='font-header flex items-center justify-center p-5 w-full'>
        <motion.h1 initial={{translateX:-50, opacity:0}} animate={{opacity:1, translateX:0}} transition={{duration:0.4}} className='text-main  absolute left-5 text-3xl font-bold'>{text}</motion.h1>
        <TextField initial={{translateX:-50, opacity:0}} animate={{opacity:1, translateX:0}} transition={{duration:0.4}} onChange={(e)=>oc(e.target.value)} sx ={[{'& .MuiInputLabel-root.Mui-focused':{color: '#011E3C'}},{'& .MuiOutlinedInput-root.Mui-focused fieldset':{borderColor:'#011E3C'}}]}label={searchFor} variant="outlined" />
        {searchFor2 &&  <TextField onChange={(e)=>oc2(e.target.value)} sx ={[{marginLeft:5},{'& .MuiInputLabel-root.Mui-focused':{color: '#011E3C'}},{'& .MuiOutlinedInput-root.Mui-focused fieldset':{borderColor:'#011E3C'}}]}label={searchFor2} variant="outlined" /> }
       

        </div>



)


export {subHeaders};