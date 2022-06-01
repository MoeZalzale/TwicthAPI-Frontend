import React, {useState,useEffect} from 'react'
import { useParams} from 'react-router'
import ClipsList from './ClipsList'
import Header from './Header'

const GamesClips = () => {

    const [game,updateGame]= useState({})
    const [clips,updateClips] = useState([])
    const gid = useParams().id 
    
    const getGame = async ()=>{
        const resp = await fetch(`/api/games/${gid}`)
        const data = await resp.json()
        updateGame(data)
    }
    const getClips = async ()=>{
        const resp = await fetch(`/api/clips/game/${gid}`)
        const data = await resp.json()
        updateClips(data)
    }

    useEffect(()=>{
        getGame()
        // getClips()
    },[])





    return (

        <div className='bg-text min-h-screen flex flex-col'>
        <Header/>
        <div className=' flex justify-center items-center w-full '>
        <div className= 'flex flex-col m-5 items-center justify-center'>
         {game.thumbnail &&   <img className='min-w-[200px] m-5 border-main rounded shadow-lg' src={game?.thumbnail.replace('{width}x{height}', `200x300`)} alt=''></img> }
         <h6>{game.name}</h6>
        </div>

  

        </div>

        

           <ClipsList
           api={`/api/clips/game/${gid}`}/>
       






        </div>
    
    )
}

export default GamesClips
