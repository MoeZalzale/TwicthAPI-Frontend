import React, {useState,useEffect} from 'react'
import Header from './Header'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import ClipsList from './ClipsList'
import {url} from './backend'

const Home = () => {

    const [games,updateGames]=useState([])
    const [clipsWeek,updateClipsWeek]= useState([])
    const date = new Date().toISOString().match(/(.+)[A-Z][0-9.:]+[A-Z]$/)[1]

    const getClips=async ()=>{
        const response = await fetch(`${url}/api/clips/${date}`)
        const data = await response.json()
        updateClipsWeek(data)


    }

    const getGames=async ()=>{
        const response = await fetch(`${url}/api/games`)
        const data = await response.json()
        updateGames(data)


    }

    useEffect(()=>{
        getGames()
        getClips()

    },[])

    return (
    <>
    <Header/>
    <h1 className='p-5 text-main text-3xl font-header'>Top  Games</h1>
    <div className='flex overflow-x-scroll min-w-full'>
        {games?.map(game => 
        <a href = {`/games/${game.gid}`}>
        <img 
        className=' min-w-[200px] m-5 border-main rounded shadow-lg transition ease-out duration-300  hover:shadow-main hover:scale-101 hover:-translate-y-1'
        src={game.thumbnail.replace('{width}x{height}', `200x300`)}

        
        >

        </img>
        </a>
            )}

    </div>



    <h1 className='p-5 text-main text-3xl font-header'>Clips of the week</h1>
                
            <ClipsList
            api={`${url}/api/clips/${date}`}/>
   
    </>
    )
}

export default Home
