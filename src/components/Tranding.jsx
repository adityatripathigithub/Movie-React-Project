import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Loding from "./Loding";
import InfiniteScroll from "react-infinite-scroll-component";

const Tranding = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [tranding, settranding] = useState([]);
    const [page, setpage] = useState(1);
    const [haseMore, sethaseMore] = useState(true);
    document.title = "Tranding " + category.toLocaleUpperCase()

    const GetTranding = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${category}/${duration}?page=${page}`);

            if (data.results.length > 0) {
                settranding((prevstate) => [...prevstate, ...data.results]);
                setpage(page + 1);
            } else {
                sethaseMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = () => {
        if (tranding.length === 0) {
            GetTranding();
        } else {
            setpage(1);
            settranding([]);
            GetTranding();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    return tranding.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items center justify-center">
                <h1 onClick={() => navigate(-1)} className="text-2xl text-zinc-400 font-semibold">
                    <i class="hover:text-[#6556CD] ri-arrow-left-line"></i>Tranding
                </h1>
                <Topnav />

                <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                <div className="w-[10%]"></div>
                <Dropdown title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
            </div>

            <InfiniteScroll dataLength={tranding.length} next={GetTranding} hasMore={haseMore} loader={<h1>Loading...</h1>}>
                <Cards data={tranding} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default Tranding;
