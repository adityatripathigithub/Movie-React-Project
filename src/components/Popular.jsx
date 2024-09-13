import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loding from "./Loding";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Populer = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [haseMore, sethaseMore] = useState(true);
    document.title = "Popular";

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${category}/popular?page=${page}`);

            if (data.results.length > 0) {
                setpopular((prevstate) => [...prevstate, ...data.results]);
                setpage(page + 1);
            } else {
                sethaseMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = () => {
        if (popular.length === 0) {
            GetPopular();
        } else {
            setpage(1);
            setpopular([]);
            GetPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items center justify-center">
                <h1 onClick={() => navigate(-1)} className="text-2xl text-zinc-400 font-semibold">
                    <i class="hover:text-[#6556CD] ri-arrow-left-line"></i>Popular
                </h1>
                <Topnav />

                <Dropdown title="Category" options={["movie", "tv"]} func={(e) => setcategory(e.target.value)} />
                <div className="w-[10%]"></div>
            </div>

            <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={haseMore} loader={<h1>Loading...</h1>}>
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default Populer;
