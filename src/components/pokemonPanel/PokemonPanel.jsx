import usePokeDex from "../../hooks/usePokeDex";


import "./PokemonPanel.css"
const PokemonPanel = (props) => {
    const { name, image } = props.pokemon;
    const { handleSelectPokemon } = usePokeDex();

    const hadleOnClickPokemon = () => {
        handleSelectPokemon(props.pokemon);
    }

    return (
        <div className="pokemonPanel">
            <div className="pokemonPanel__image">
                <img src={image} alt={`image pokemon ${name}`} />
            </div>
            <button className="pokemonPanel__button"
                onClick={hadleOnClickPokemon}
            >
                View Status
            </button>
        </div>
    )
}

export default PokemonPanel