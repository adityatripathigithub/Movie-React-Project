import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-500 p-10">
            <h1 className="text-white font-bold text-2xl">
                <i class=" text-[#6556CD] ri-movie-2-line mr-2"></i>
                <span className="text-2xl">Movies</span>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

                <Link to="/tranding" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class=" mr-2 ri-fire-fill"></i> Trandings
                </Link>

                <Link to = "/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class=" mr-2 ri-bard-fill"></i> popular
                </Link>

                <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-movie-line"></i> Movies
                </Link>

                <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-tv-2-line"></i> Tv Shows
                </Link>

                <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-team-fill"></i> People
                </Link>
            </nav>

            <hr className="border-none h-1 bg-zinc-600" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Information</h1>

                <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la ">
                    <i class=" mr-2 ri-information-fill"></i> About
                </Link>

                <Link to="/contect" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la ">
                    <i class=" mr-2 ri-phone-fill"></i> Contect Us
                </Link>
            </nav>
        </div>
    );
};

export default Sidenav;
