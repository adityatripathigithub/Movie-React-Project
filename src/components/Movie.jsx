import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loding from "./Loding";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [haseMore, sethaseMore] = useState(true);
    document.title = "movie";

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${category}?page=${page}`);

            if (data.results.length > 0) {
                setmovie((prevstate) => [...prevstate, ...data.results]);
                setpage(page + 1);
            } else {
                sethaseMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            GetMovie();
        } else {
            setpage(1);
            setmovie([]);
            GetMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items center justify-center">
                <h1 className="mt-4 text-2xl text-zinc-400 font-semibold">
                    <i onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Movie <small className="ml-2 text-sm text-zinc-300"> ({category})</small>
                </h1>
                <Topnav />

                <Dropdown title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]} func={(e) => setcategory(e.target.value)} />
                <div className="w-[10%]"></div>
            </div>

            <InfiniteScroll dataLength={movie.length} next={GetMovie} hasMore={haseMore} loader={<h1>Loading...</h1>}>
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default Movie;
