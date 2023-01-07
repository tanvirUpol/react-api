import { useEffect } from "react"
import { useState } from "react"

// components
import DigiCard from "../DigiCard"

const Digimon = () => {

    const [digimons,setDigimons] = useState(null)
    const [digiArray,setDigiArray] = useState([])



    // fetch

    useEffect(()=>{
        const fetchDigimons = async () =>{
            const res = await fetch('https://digimon-api.vercel.app/api/digimon');
            const data = await res.json()
            setDigimons(data)
        }
        fetchDigimons()
        setDigiArray([getRandomInt(209), getRandomInt(209), getRandomInt(209)])
      },[])


      
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
   

  return (

    <div className="showcase">

      {digimons && <DigiCard digiArray={digiArray} digimons={digimons} /> }
      <div className="api-btns">
        
        <button  onClick={()=>(setDigiArray([getRandomInt(209), getRandomInt(209), getRandomInt(209)]))} >GET DIGIMON</button>

      </div>

    </div>
    

  )
}
export default Digimon