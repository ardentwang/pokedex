import "./GenerationOne.css"
import {useState, useEffect} from 'react'

const GenerationOne = () => {
    const [pokemon, getPokemon] = useState([])

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(res => res.json())
                const pokedexUrl = response ? response.results.map(x => x.url) : "Not Loaded!"
                const data = []
                for(const url of pokedexUrl){
                    let image = await fetch(url).then(res => res.json())
                    data.push(image)
                }
                getPokemon(data)
            } catch (error) {
                console.log("Error fetching Pokemon:", error)
            }
        }
        fetchPokemon();
    }, [])

    return (
        <div className="content">
            {pokemon.map(x => x.name)}
        </div>
    )
}

export default GenerationOne