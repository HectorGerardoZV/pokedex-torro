import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


//Pages
import Home from "../pages/home/Home";
import PokeDex from "../pages/pokeDex/PokeDex"

//Provider
import { PokeDexProvider } from "../context/PokeDexProvider";

const AppRouter = () => {
    return (

        <PokeDexProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<PokeDex />} />
                </Routes>
            </Router>
        </PokeDexProvider>
    )
}

export default AppRouter