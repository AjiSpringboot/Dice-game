import React from 'react'
import styled from 'styled-components'
import { Button } from '../Style/button';

function StartGame({toggle}) {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />

            </div> 
       <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>play now</Button>
       </div>

    </Container>
  )
}

export default StartGame;

const Container=styled.div`
    display:flex;
    max-width:1180px;
    margin:0 auto;
    height:100vh;
    align-items:center;
    gap:42px;
  
  .content h1{
    font-size:96px;
    white-space:nowrap;
  }

`

