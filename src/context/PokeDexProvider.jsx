import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"
const PokeDexContext = createContext();
//Axios clients
import { clientSingle, clientTotal } from "../config/clientAxios"



const PokeDexProvider = ({ children }) => {

    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [modalPokedex, setModalPokedex] = useState(false)


    const queryAllPokemons = async () => {
        try {
            const response = await clientTotal.get("");
            const { data } = response;
            const { results } = data;

            let newPokemons = [];
            for (let i = 0; i < results.length; i += 3) {
                const pokemon = results[i];
                pokemon.id = i + 1;
                newPokemons.push(pokemon)

            }
            newPokemons = await queryAllPokemonsInformation(newPokemons);
            setPokemons(newPokemons)
        } catch (error) {
            console.log(error);
        }
    }
    const queryAllPokemonsInformation = async (pokemons) => {
        try {
            let newPokemons = [];
            for (let i = 0; i < pokemons.length; i++) {
                const pokemon = pokemons[i];
                const response = await clientSingle.get(`/${pokemon.id}`);
                const { data } = response;
                const img = data.sprites.other.dream_world.front_default;
                const { stats } = data;
                const stastsPokemon = stats.map(stat => {
                    const newStat = {
                        [stat.stat.name]: stat.base_stat
                    }
                    return newStat
                })
                pokemon.image = img;
                pokemon.stats = stastsPokemon;
                newPokemons.push(pokemon);
            }
            return newPokemons;
        } catch (error) {
            return [];
        }
    }
    const handleAddNewPokemon = (pokemon) => {
        const condition = (pokemonItem) => pokemonItem.id == pokemon.id;

        if (!pokedex.some(condition)) {
            setPokedex([...pokedex, pokemon]);
            toast.success(`${pokemon.name} added`, {
                className: "toast-custom",
                progressClassName: "toast-progress",
                closeButton: false,
                icon: false
            })
        } else {
            toast.info(`${pokemon.name} has already added`, {
                className: "toast-exist",
                progressClassName: "toast-progress-exist",
                closeButton: false,
                icon: false
            })
        }
    }
    const handleDeletePokemon = (id) => {
        const newPokedex = pokedex.filter(pokemonItem => pokemonItem.id != id);

        if (newPokedex.length != pokedex.length) {
            setPokedex(newPokedex)

        }
        toast.success(`Pokemon deleted`, {
            className: "toast-deleted",
            progressClassName: "toast-progress-deleted",
            closeButton: false,
            icon: false
        })
    }

    const handleSelectPokemon = (pokemon) => {
        setPokemonSelected(pokemon)
    }
    const handleChangeStateModal = () => {
        setModalPokedex(!modalPokedex);
    }





    useEffect(() => {
        queryAllPokemons();
    }, [])
    return (
        <PokeDexContext.Provider
            value={{
                pokemons,
                pokedex,
                pokemonSelected,
                modalPokedex,
                handleAddNewPokemon,
                handleSelectPokemon,
                handleChangeStateModal,
                handleDeletePokemon
            }}
        >
            {children}
        </PokeDexContext.Provider>
    )
}

export { PokeDexProvider }

export default PokeDexContext;