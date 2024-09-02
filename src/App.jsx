import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Tranding from "./components/Tranding"

const App = () => {
  return (
    <div className="bg-[#070b00] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tranding" element={<Tranding />} />
      </Routes>

    </div>
  )
}

export default App