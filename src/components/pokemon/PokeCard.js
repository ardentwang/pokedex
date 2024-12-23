import "./PokeCard.css"

const PokeCard = ({pokemon}) => {
    console.log({pokemon})

    function capitalizeFirstLetter(name){

        return name.charAt(0).toUpperCase() + name.substring(1,);
    }

    return (
        <div className="pokemon-card">
            <div className="entry">
                <div className="pokedex-number">#{pokemon.id}</div>
                <div className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</div>
            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
    )
}

export default PokeCard;