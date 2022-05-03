
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ModalPokemon from "../../components/modalPokemon/ModalPokemon";
import PokemonPokedex from "../../components/pokemonPokedex/PokemonPokedex";
import usePokeDex from "../../hooks/usePokeDex"

import Back from "../../img/back.svg"
import Logo from "../../img/logo.png"
import "./PokeDex.css"
const PokeDex = () => {

  const { pokedex, modalPokedex } = usePokeDex();
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [pokemonName, setPokemonName] = useState("");

  const handlePokemonSelected = (pokemon) => {
    setPokemonSelected(pokemon)
  }
  const handleOnInputName = (e) => {
    setPokemonName(e.target.value)
  }


  return (
    <div className="pokedexLayout">
      <section>

        <div className="pokedex__header">
          <Link to={"/"}>
            <img src={Back} alt="Product" />
            Back
          </Link>
          <div className="pokedexLogo">
            <img src={Logo} alt="" />
            <h1>PokeDex</h1>
          </div>
        </div>


        <section className="pokedex__container pokedex__content">
          <div className="pokedex__sercher">
            <input type="text" placeholder="Pokemon Name..."
              defaultValue={pokemonName}
              onInput={handleOnInputName}
            />
          </div>


          <div className="pokedex__pokemons">
            {
              pokedex.map(pokemon => {
                if (pokemon.name.trim().toLowerCase().includes(pokemonName.trim().toLowerCase())) {
                  return <PokemonPokedex
                    key={pokemon.id}
                    pokemon={pokemon}
                    handlePokemonSelected={handlePokemonSelected}
                  />
                }
                else if (pokemonName.trim() === "") {
                  return <PokemonPokedex
                    key={pokemon.id}
                    pokemon={pokemon}
                    handlePokemonSelected={handlePokemonSelected}
                  />
                }


              })
            }
          </div>


        </section>
      </section>
      {
        modalPokedex ? <ModalPokemon pokemon={pokemonSelected} handlePokemonSelected={handlePokemonSelected} /> : null
      }

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  )
}

export default PokeDex