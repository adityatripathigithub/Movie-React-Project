import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loding from "./Loding";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [haseMore, sethaseMore] = useState(true);
    document.title = "tv";

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`https://api.thetvdb.org/3/tv/${category}?page=${page}`);

            if (data.results.length > 0) {
                settv((prevstate) => [...prevstate, ...data.results]);
                setpage(page + 1);
            } else {
                sethaseTv(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = () => {
        if (tv.length === 0) {
            GetTv();
        } else {
            setpage(1);
            settv([]);
            GetTv();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tv.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items center justify-center">
                <h1 onClick={() => navigate(-1)} className="mt-4 text-2xl text-zinc-400 font-semibold">
                    <i class="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    TV Shows <small className="ml-2 text-sm text-zinc-300"> ({category})</small>
                </h1>
                <Topnav />

                <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e) => setcategory(e.target.value)} />
                <div className="w-[10%]"></div>
            </div>

            <InfiniteScroll dataLength={tv.length} next={GetTv} hasMore={haseMore} loader={<h1>Loading...</h1>}>
                <Cards data={tv} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default Tvshows;
