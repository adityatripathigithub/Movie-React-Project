import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadeperson, removeperson } from "../store/actions/personAction";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loding from "./Loding";
import Dropdown from "./partials/Dropdown";
import HorizontalCards from "./partials/HorizontalCards";

const PersonDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const dispatch = useDispatch();

    const [category, setcategory] = useState("movie");

    useEffect(() => {
        dispatch(asyncloadeperson(id));
        return () => {
            dispatch(removeperson());
        };
    }, [id]);

    return info ? (
        <div className="px-[10%] w-screen h-[250vh] bg-[#070b00]">
            {/* {Part 1 navigation} */}

            <nav className="h-[10vh] w-full  text-zinc-100 flex items-center gap-10 text-xl">
                <Link onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></Link>
            </nav>

            <div className="w-full flex ">
                {/* {Part 2 left poster and Details} */}

                <div className="w-[20%]">
                    <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[40vh] object-cover " src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
                    <hr className="mt-5 mb-2 border-none h-[2px] bg-zinc-500" />

                    {/* sosial media link */}
                    <div className="text-2xl text-white flex gap-x-5">
                        <a className="hover:text-violet-500" target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                            <i class="ri-earth-fill"></i>
                        </a>
                        <a className="hover:text-violet-500" target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
                            <i class="ri-facebook-circle-fill"></i>
                        </a>

                        <a className="hover:text-violet-500" target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
                            <i class="ri-instagram-fill"></i>
                        </a>

                        <a className="hover:text-violet-500" target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
                            <i class="ri-twitter-x-line"></i>
                        </a>
                    </div>

                    {/* persnol information */}
                    <h1 className="text-2xl text-zinc-400 font-semibold my-5">Persnol Info</h1>
                    <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.known_for_department}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Gender</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.gender === 2 ? "Male" : "Female"}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Birthday</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Deathday</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Place Of Birth</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Also Known As</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.also_known_as.join(", ")}</h1>
                </div>
                {/* Part 3 right Details and informations*/}

                <div className="w-[80%] ml-[5%]">
                    <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>
                    <h1 className="text-lg text-zinc-400 font-semibold">Biography</h1>

                    <p className="text-zinc-400 mt-3">{info.detail.biography}</p>

                    <h1 className="mt-5 text-lg text-zinc-400 font-semibold ">Known For </h1>

                    <HorizontalCards data={info.combinedCredits.cast} />

                    <div className="w-full flex justify-between">
                        <h1 className="mt-5 text-xl text-zinc-400 font-semibold ">Acting </h1>

                        <Dropdown tital="Category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />
                    </div>

                    <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] border-2 p-5 border-zinc-700 ">
                        {info[category + "Credits"].cast.map((c, i) => (
                            <li key={i} className="hover:text-white duration-300 cursor-pointer p-5 ">
                                <Link to={`/${category}/details/${c.id}`}>
                                    <span> {c.original_name || c.name || c.title || c.original_title}</span>

                                    <span className="block ml-5 mt-2"> {c.character && `Character Name: ${c.character}`}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loding />
    );
};
export default PersonDetails;
