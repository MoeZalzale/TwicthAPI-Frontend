import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Header from './Header'
function Home() {
    return (
       <Container>
           <Header/>
           <Body>
        <Sidebar/>

        </Body>

       </Container>
    )
}

const Container = styled.div `
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;


`

const Body = styled.div`
flex:1;
display: flex;

`

export default Home
