

import usePokeDex from "../../hooks/usePokeDex";



import "./PokemonInfo.css"
const PokemonInfo = (props) => {
    const { pokemon } = props;
    const { image, name, stats } = pokemon;
    const { handleSelectPokemon, handleAddNewPokemon } = usePokeDex();

    const handleOnClickCancelSelection = () => {
        handleSelectPokemon(null)
    }
    const handleOnClickAddSelection = () => {
        handleAddNewPokemon(pokemon);
        handleSelectPokemon(null);
    }

    return (
        <div className="pokemonInfoCard">

            <div className="pokemonInfoCard__image">
                <img src={image} alt="" />
            </div>

            <div className="pokemonInfoCard__info">
                <p>Name: <span className="stat"> {name}</span></p>
                {
                    stats.map(stat => (
                        <p key={Object.keys(stat)}>{Object.keys(stat)}: <span className="stat">{stat[Object.keys(stat)]}</span></p>
                    ))
                }
            </div>

            <div className="pokemonInfoCard__option">
                <button className="cancelSelection"
                    onClick={handleOnClickCancelSelection}
                >
                    Cancel
                </button>
                <button className="addSelection"
                    onClick={handleOnClickAddSelection}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default PokemonInfo