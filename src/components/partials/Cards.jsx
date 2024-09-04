import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
    return (
        <div className="text-white " >
            {data.map((c, i) => (
                <Link className="w-[25vh] flex" key={i}>
                    <img className="h-[40vh] " src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path}`} alt="" />
                    {c.original_name || c.name || c.title || c.original_title}
                </Link>
            ))}
        </div>
    );
    
};

export default Cards;
