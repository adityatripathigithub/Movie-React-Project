import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    console.log(data.overview);
    return (
        data && (
            <div
                style={{ background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`, backgroundPosition: "top-10", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                className="w-[115.5%] h-[55vh] flex flex-col justify-end items-start p-[10%]"
            >
                <h1 className="w-[70%] text-5xl font-black text-white">{data.original_name || data.name || data.title || data.original_title}</h1>

                <p className="w-[70%] mt-3 mb-3 text-white">
                    {data.overview.slice(0, 200)}...<Link className="text-blue-400">more</Link>
                </p>

                <p className="text-white ">
                    <i class="ml-5 text-yellow-500 ri-megaphone-fill"></i>

                    {data.release_date || "No information"}
                    <i class=" text-yellow-500 ri-album-fill"></i>

                    {data.media_type.toUpperCase()}
                </p>
                <Link className="p-4 rounded text-white  mt-5 bg-[#6556CD]">
                    {" "}
                    <i class="m-1 ri-play-circle-line"></i> Watch Trailer
                </Link>
            </div>
        )
    );
};

export default Header;
