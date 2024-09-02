import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const Topnav = () => {
    const [query, setquery] = useState("");

    const [searches, setsearches] = useState([]);

    console.log(searches);

    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}`);
            console.log(data.results);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSearches();
    }, [query]);

    return (
        <div className="w-full h-[10vh] relative flex justify-start ml-[15%] items-center">
            <i onClick={GetSearches} className="text-3xl text-zinc-400 ri-search-2-line "></i>

            <input onChange={(e) => setquery(e.target.value)} value={query} className="w-[60%]  text-zinc-400 mx-10 p-5 text-xl outline-none rounded-[20px] border-zinc-500 bg-transparent" type="text" placeholder="Scearch Anythings" />
            {query.length > 0 && <i onClick={() => setquery("")} className="cursor-pointer text-zinc-400 text-3xl ri-close-fill"></i>}

            {searches && (
                <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[8%] overflow-auto rounded">
                    {searches.map((s, i) => (
                        <Link key={i} className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100">
                            <img className="w-[10vh] h-[12vh] object-cover rounded mr-5 shadow-lg" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="" />
                            <span className="text-xl ">{s.original_name || s.name || s.title || s.original_title}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Topnav;
