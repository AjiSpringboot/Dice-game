import styled from "styled-components"
function TotleScore({score}) {
  return (
    <Scorecontainer>
    <h1>{score}</h1>
    <p>totle score</p>
</Scorecontainer> 
)
}

export default TotleScore

const Scorecontainer=styled.div`
 text-align:center;
 max-width:200px;
h1{
        font:100px;
        line-height:50px;
        font-weight:700;
    }
    p{
       font-size:24px;
       font-weight:500px;
    }

`