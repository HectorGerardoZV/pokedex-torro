
import usePokeDex from "../../hooks/usePokeDex";

import "./ModalPokemon.css"
const ModalPokemon = (props) => {


    const { pokemon, handlePokemonSelected } = props;
    const { image, name, stats } = pokemon;
    const { handleChangeStateModal, handleDeletePokemon } = usePokeDex()

    const handleOnClickCloseSelection = () => {
        handleChangeStateModal()
    }
    const handleOnClickDeleteSelection = () => {
        handleDeletePokemon(pokemon.id);
        handlePokemonSelected(null);
        handleChangeStateModal();
    }

    return (
        <div className="modalPokemon">
            <div className="pokemonInfoCard pokemonModalCard">

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
                    <button className="addSelection"
                        onClick={handleOnClickCloseSelection}
                    >
                        Close
                    </button>
                    <button className="cancelSelection"
                        onClick={handleOnClickDeleteSelection}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalPokemon