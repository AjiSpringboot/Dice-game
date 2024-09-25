import React from 'react'
import TotleScore from './TotleScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import { useState } from 'react'
import RoleDice from "./RoleDice";
import { Button } from '../Style/button'
 import Rules from './Rules'


function Gameplay() {
    const [score,setscore]=useState(0);
    const [selectednumber,setselectednumber]=useState();
    const [currentdice,setcurrendice]=useState(1);
    const [error,seterror]=useState("")
    const [showrules,setshowrules]=useState(false);

    const randomnumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
   }

   const roleDice=()=>{
    if(!selectednumber){
        seterror("you have not selected any number ")
        return;
    }
    seterror("")

      const rm1= randomnumber(1,7)
      setcurrendice((prev)=>rm1);


      if(selectednumber===randomnumber){
        setscore((prev)=>prev+randomnumber);
       }
      else{
        setscore((prev)=>prev-2);
      }

      setselectednumber(undefined);
   }

   const resetscore=()=>{
        setscore(0);
   }

  return (
    <Mainconatiner>
        <div className='top_section'>
        <TotleScore score={score} />
        <NumberSelector 
        error={error}
        seterror={seterror}
        selectednumber={selectednumber}
        setselectednumber={setselectednumber}
        />
        </div>
        <RoleDice
         currentdice={currentdice}
         roleDice={roleDice}
        />
        <div className="btns">
            <Button onClick={resetscore} >reset</Button>
            <Button
            onClick={()=>setshowrules((prev)=>!prev)}
            > {showrules?"hide":"show"}Show Rules</Button>
        </div>
     {showrules && <Rules/>}        
     
    </Mainconatiner>
   )
}

export default Gameplay

const Mainconatiner=styled.div`
  .top_section{
    display:flex;
    justify-content:space-between;
     margin:10px 10px;
    padding-top:70px;
     align-items:end;
  }

  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
     align-items:center;
     gap:10px;
  }
`