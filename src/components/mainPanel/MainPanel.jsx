
import { useState } from "react"

import usePokeDex from "../../hooks/usePokeDex"



//images
import Logo from "../../img/logo.png"

//components
import PokemonPanel from "../pokemonPanel/PokemonPanel"


import "./MainPanel.css"
const MainPanel = () => {

    const { pokemons } = usePokeDex();
    const [pokemonName, setPokemonName] = useState("");


    const handleOnInputName = (e) => {
        const name = e.target.value;
        setPokemonName(name.trim());
    }



    return (
        <section className="mainPanel">
            <div className="searcher">
                <img className="searcher__logo" src={Logo} alt="Logo Pokemon" />

                <div className="searcher__controllers">
                    <input type="text" placeholder="Pokemon name..."
                        onInput={handleOnInputName}
                        defaultValue={pokemonName}
                    />

                </div>
            </div>

            <section className="mainPanel__pokemons">
                {
                    pokemons.map(pokemon => {
                        if (pokemon.name.toLowerCase().includes(pokemonName.trim().toLowerCase())) {
                            return <PokemonPanel
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        }
                        else if (pokemonName.trim() == "") {
                            return <PokemonPanel
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        }

                    })
                }
            </section>

        </section>
    )
}

export default MainPanel