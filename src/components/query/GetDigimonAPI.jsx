const fetchDigimons = async () =>{
    const res = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await res.json()
    return data
}

export default fetchDigimons