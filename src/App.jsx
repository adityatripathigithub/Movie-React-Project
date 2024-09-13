import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Tranding from "./components/Tranding"
import Populer from "./components/Popular"
import Movie from "./components/Movie"
import Tvshows from "./components/Tvshows"
import People from "./components/People"

const App = () => {
  return (
    <div className="bg-[#070b00] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tranding" element={<Tranding />} />
        <Route path="/popular" element={<Populer />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>

    </div>
  )
}

export default App