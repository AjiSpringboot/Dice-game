import styled from "styled-components"

 export const Button=styled.button`
 padding:10px 18px;
 color:white;
 min-width:220px;
 font-size:13px;
 border:none;
   height:44px;
 background:black;
 border-radius:5px;
 border:1px solid transparent;


 &:hover{
    background-color:white;
    color:black;
    border:1px solid black;
    cursor:pointer;
    transition:0.3s background ease-in;
 }
`