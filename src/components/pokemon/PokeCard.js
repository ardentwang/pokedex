import "./PokeCard.css"

const PokeCard = (props) => {
    console.log(props)
    return (
        <div className="pokemon-card" key={props.name}>
            {props.name}
        </div>
    )
}

export default PokeCard;