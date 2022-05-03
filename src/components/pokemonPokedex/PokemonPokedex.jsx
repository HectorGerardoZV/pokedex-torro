
import usePokeDex from "../../hooks/usePokeDex";

import "./PokemonPokedex.css"
const PokemonPokedex = (props) => {
    const { pokemon,handlePokemonSelected } = props;
    const { handleChangeStateModal } = usePokeDex()

    const { name, image } = pokemon;

    const toggleModal = () => {
        handlePokemonSelected(pokemon)
        handleChangeStateModal();
        
    }

    return (
        <div className="pokemonPD"
            onClick={toggleModal}
        >
            <p>{name}</p>
            <img src={image} alt={`pokemon ${name} image`} />
        </div>
    )
}

export default PokemonPokedex