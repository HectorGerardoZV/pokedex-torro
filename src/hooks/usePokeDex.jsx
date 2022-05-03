import { useContext } from "react"
import PokeDexContext from "../context/PokeDexProvider"

const usePokeDex = () => {
  return useContext(PokeDexContext)
}

export default usePokeDex