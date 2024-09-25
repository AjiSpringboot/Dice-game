import React, { useState } from 'react'
import styled from 'styled-components';

function RoleDice({roleDice,currentdice}) {
 
   
   return (
      <DiceConatainer>
         <div className='dice' onClick={roleDice}>
            <img src={
                `/images/dice/dice_${currentdice}.png`
            } alt="" />
         </div>
         <p>Click on dice to roll</p>
      </DiceConatainer>
   )
}

export default RoleDice;
const DiceConatainer=styled.div`
   display:flex;
   flex-direction:column;
   margin-top:48px;
   justify-content:center;
   align-items:center;

   .dice{
    cursor: pointer;
   }

   p{
     font-size:24px;
     font-weight:400;
   }
`