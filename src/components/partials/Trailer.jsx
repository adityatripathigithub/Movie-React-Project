import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : `tv`;
    const ytvideo = useSelector((state) => state[category].info.videos);

    return (
        <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link onClick={() => navigate(-1)} class="absolute hover:text-[#6556CD] text-white text-3xl right-[5%] top-[5%] ri-close-fill"></Link>
            {ytvideo ? 
            <ReactPlayer controls
            height={700} width={1200} 
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`} 
            
            /> : <NotFound />}
        </div>
    );
};

export default Trailer;
