import { useEffect } from "react"
import { useState } from "react"
import { useQuery } from "react-query"
import GetDigimonAPI from "./GetDigimonAPI"

// components
import DigiCard from "../DigiCard"

const Digimon = () => {



    // hook
    const {data} = useQuery("digimonAPI",()=>GetDigimonAPI())

    const [digiArray,setDigiArray] = useState([1,2,3])

   
   
 

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


      
  
  
   

  return (

    <div className="showcase">

      {<DigiCard digiArray={digiArray} digimons={data} /> }
      <div className="api-btns">
        
        <button  onClick={()=>(setDigiArray([getRandomInt(209), getRandomInt(209), getRandomInt(209)]))} >GET DIGIMON</button>

      </div>

    </div>
    

  )
}
export default Digimon