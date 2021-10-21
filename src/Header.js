import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
   <Container/>
    )
}
const Container = styled.div`
background-color: red;
flex:0.1;
position: relative; 
top: 0;
min-width: 100%;
z-index: 20;
height: 50px;


`
export default Header
