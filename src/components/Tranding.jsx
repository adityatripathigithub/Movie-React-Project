import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Loding from "./Loding";
import InfiniteScroll from "react-infinite-scroll-component";

const Tranding = () => {
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [tranding, settranding] = useState([]);
    const [page, setpage] = useState(1);

    // const navigate = useNavigate();

    const GetTranding = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${category}/${duration}`
            );
            // settranding(data.results);
            setcategory((prevstate) => [...prevstate, ...data.results]);
            console.log(data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetTranding();
    }, [category, duration]);

    return tranding.length > 0 ? (
        <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
            <div className=" w-full  flex items center justify-center">
                <h1 onClick={() => navigate(-1)} className="text-2xl text-zinc-400 font-semibold">
                    <i class="hover:text-[#6556CD] ri-arrow-left-line"></i>Tranding
                </h1>
                <Topnav />

                <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                <div className="w-[10%]"></div>
                <Dropdown title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
            </div>

            <InfiniteScroll dataLength={tranding.length} next={GetTranding} hasMore={true} loader={<h1>Loading...</h1>}>
                <Cards data={tranding} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default Tranding;
