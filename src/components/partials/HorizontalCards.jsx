import { data } from "autoprefixer";
import React from "react";

const HorizontalCards = ({data}) => {
    return (
        <div className="w-[115%] h-[40vh] p-5">
            <div className="mb-5 ">
                <h1 className=" text-3xl font-semibold text-zinc-400 "> Tranding</h1>
            </div>

            <div className="w-full flex  overflow-x-auto">
                {data.map((d, i) => (
                    <div key={i} className="w-[15%] bg-red-100 mr-5">
                        {d.title || d.name || d.original_name || d.orignal_title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalCards;
