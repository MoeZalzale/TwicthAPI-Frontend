import React, {useState, useEffect} from 'react'
import {subHeaders} from './reusable'
import {motion} from 'framer-motion'
import Header from './Header'
const GamesPage = () => {
    const gameDimensions = {
        'width': '200',
        'height': '300'
      }

    const [games,updateGames] = useState([])
    const [gameText, updateText]=useState("")



    const getGames = async () =>{
        const response = await fetch('/api/games')
        const data = await response.json()
        updateGames(data)
    }

     useEffect(()=>{
         getGames()
     },[])

  
    



    return (
    <div className ='flex flex-col min-h-screen bg-text'>
        <Header/>
     {subHeaders("Top Games", "Search for Game",null,updateText)}
     <div className=' grid p-5  grid-cols-8 auto-rows-auto'>

     {games?.filter(g => g.name.toLowerCase().includes(gameText.toLowerCase())).map((game,i) =>(
      <div key ={game.gid} className='flex flex-col items-center justify-center m-5 '>
         <a href={`/games/${game.gid}`}>
             <motion.img 
             className='mb-5 border-main rounded shadow-lg transition ease-out duration-300  hover:shadow-main hover:scale-105 hover:-translate-y-3'
             style={{minWidth: `${gameDimensions['width']}px`}} src={game.thumbnail.replace('{width}x{height}', `${gameDimensions['width']}x${gameDimensions['height']}`)}
             
             initial = {{scale:0}}
             whileInView ={{scale:1}}
             whileHover ={{translateY: -6}}
             transition ={{type: 'spring', bounce:0.7}}

             
             >

             </motion.img>
             
         </a>
         <h6 className='text-main'>{game.name}</h6>
         </div>

     )


     )    }       
   </div>

   </div>
    )
}

export default GamesPage
