import { useState } from "react"
import StartGame from "./Component/StartGame"
import Gameplay from "./Component/Gameplay";


function App() {
  
     const [Isgamestarted,Setisgamestarted]=useState(false);

    const Togglegameplay=()=>{
      Setisgamestarted((prev)=>!prev)
    }

  return (
      <>
      {
        Isgamestarted?<Gameplay/>:<StartGame
        toggle={Togglegameplay}
        />
      }
      </>
  )
}

export default App
