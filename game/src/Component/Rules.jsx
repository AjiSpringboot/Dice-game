import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <Ruleconatiner> 
  <h2>how to play dice game</h2>
   <div className="text">
    <p>select any number </p>
    <p>click on dice image </p>
    <p>after clcik on dice selected number is equal to dice number you will get same point of dice </p>
    <p>if you get wrong guess your 2 point will deducted</p>
   </div>

    </Ruleconatiner>
  )
}

export default Rules

const Ruleconatiner=styled.div`
    max-width:800px;
    margin:0 auto;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    background-color:#fbf1f1;
    padding:20px;

    h2{
        font-size:24px;
        font-weight:400;

    }
    .text{
        margin-top:24px;
    }
`