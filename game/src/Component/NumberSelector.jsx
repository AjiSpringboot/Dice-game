import { useState } from "react"
import styled from "styled-components"

function NumberSelector({ seterror,error,selectednumber,setselectednumber}) {
  
    const arraynumber=[1,2,3,4,5,6]
      const numberselecthandler=(value)=>{
      setselectednumber(value)
      seterror("");
      }
  return (
    <Numberselector>
       <span>{error}</span>
        <div className="flex">
        {
          arraynumber.map((value,i)=>(
            <Box 
            isselected={
                value===selectednumber
            }
            key={i} 
            onClick={()=>numberselecthandler(value)}
            >
           {value}</Box>
          ))
        }
        </div>
        <p>Select number</p>
     
 
    </Numberselector>
  )
}

export default NumberSelector

const Numberselector=styled.div`

     display:flex;
     flex-direction:column;
     align-items:end;
    .flex{
        display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:700px;
        
    }
    span{
      color:red;
      font-size:14px;
      font-weight:500;
    }
`

const Box=styled.div`
    width:72px;
    height:72px;
    display:grid;
    place-items:center;
    border:1px solid black;
    font-size:24px;
    font-weight:700;
    background-color:${(props)=>(props.isselected?"black":"white")};
    color:${(props)=>(props.isselected?"white":"black")};
`