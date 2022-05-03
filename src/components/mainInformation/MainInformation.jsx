import usePokeDex from "../../hooks/usePokeDex"
import { Link } from "react-router-dom";
import PokemonInfo from "../pokemonInfo/PokemonInfo";
import PokeDexIMG from "../../img/pokedex.png"


import "./MainInformation.css"
const MainInformation = () => {

  const { pokemonSelected } = usePokeDex();

  return (
    <div>
      <div className="pokedexButton">
        <Link to={`/pokedex`}>
          pokedex
          <img src={PokeDexIMG} alt="" />
        </Link>
      </div>
      <div className="mainInformation">
        {
          pokemonSelected ? (<PokemonInfo pokemon={pokemonSelected} />) : null
        }
      </div>
    </div>
  )
}

export default MainInformation