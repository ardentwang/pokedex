import "./PokeCard.css"


const PokeCard = ({pokemon}) => {
    function capitalizeFirstLetter(name){
        return name.charAt(0).toUpperCase() + name.substring(1,);
    }

    function Demo(){
        console.log("Clicked!");
    }

    return (
        <button className="pokemon-card" onClick={Demo}>
            <div className="entry">
                <div className="pokedex-number">#{pokemon.id}</div>
                <div className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</div>
            </div>
            {console.log(pokemon.sprites.front_default)}
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </button>
    )
}

export default PokeCard;