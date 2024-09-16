import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tranding from "./components/Tranding";
import Populer from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import About from "./components/About";
import Contect from "./components/Contect";
import Moviedetails from "./components/Moviedetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/partials/Trailer";

const App = () => {
    return (
        <div className="bg-[#070b00] w-screen h-screen flex ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tranding" element={<Tranding />} />
                <Route path="/popular" element={<Populer />} />

                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/details/:id" element={<Moviedetails />}>
                    <Route path="/movie/details/:id/trailer" element={<Trailer />} />
                </Route>

                <Route path="/tv" element={<Tvshows />} />
                <Route path="/tv/details/:id" element={<TvDetails />} />

                <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />

                <Route path="/about" element={<About />} />
                <Route path="/contect" element={<Contect />} />
            </Routes>
        </div>
    );
};

export default App;

