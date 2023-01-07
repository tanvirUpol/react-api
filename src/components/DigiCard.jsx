



const DigiCard = ({digimons,digiArray}) => {
  console.log(digimons);
  console.log(digiArray);

  return (
    
      <section className="cards">
        <div className="card">
          <img src={digimons[digiArray[0]].img} />
          <h3>{digimons[digiArray[0]].name}</h3>
        </div>

        <div className="card">
          <img src={digimons[digiArray[1]].img}  />
          <h3>{digimons[digiArray[1]].name}</h3>
        </div>

        <div className="card">
          <img src={digimons[digiArray[2]].img}  />
          <h3>{digimons[digiArray[2]].name}</h3>
        </div>
      </section>
     
    
  )
 
    
}
export default DigiCard