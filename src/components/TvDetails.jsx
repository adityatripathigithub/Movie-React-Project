import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynceloadetv, removetv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loding from "./Loding";

const TvDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const dispatch = useDispatch();
    console.log(info);

    useEffect(() => {
        dispatch(asynceloadetv(id));
        return () => {
            dispatch(removetv());
        };
    }, [id]);
    return info ? (
        <div
            style={{ background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path})`, backgroundPosition: "top-10", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className="relative w-screen min-h-[170vh] px-[10%]"
        >
            {/* {Part 1 navigation} */}

            <nav className="h-[10vh] w-full  text-zinc-100 flex items-center gap-10 text-2xl">
                <Link onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></Link>

                <a className="hover:text-violet-500" target="_blank" href={info.detail.homepage}>
                    <i class="ri-external-link-fill"></i>
                </a>
                <a className="hover:text-violet-500" target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                    <i class="ri-earth-fill"></i>
                </a>

                <a className="hover:text-violet-500" target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
                    imdb
                </a>
            </nav>

            {/* {Part 2 poster and details} */}

            <div className="w-full flex">
                <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[50vh] object-cover " src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />

                <div className="content ml-[5%] text-white">
                    <h1 className="text-5xl font-black text-white">
                        {info.detail.original_name || info.detail.name || info.detail.title || info.detail.original_title}
                        <small className="text-xl font-bolt  text-zinc-200">({info.detail.first_air_date.split("-")[0]})</small>
                    </h1>

                    <div className="mt-2 mb-5 flex text-white items-center gap-x-3 ">
                        <span className=" rounded-full text-xl font-semibold bg-yellow-600 w-[7vh] h-[7vh] text-white flex justify-center items-center">
                            {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                        </span>

                        <h1 className="w-[60px] font-semibold text-2xl leading-6">User Score</h1>
                        <h1>{info.detail.first_air_date}</h1>
                        <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
                        <h1>{info.detail.runtime}min</h1>
                    </div>

                    <h1 className="text-2xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>
                    <h1 className="text-2xl mb-1 mt-1 text-zinc-200">Overview</h1>

                    <p>{info.detail.overview}</p>

                    <h1 className="text-2xl  mt-5 text-zinc-200">tv Translated</h1>

                    <p className="mb-[4%]">{info.translations.join(" , ")}</p>

                    <Link className=" roundev-lg mt-5 py-5 px-10 bg-[#6556cd]" to={`${pathname}/trailer`}>
                        <i class="text-xl mr-3 ri-play-fill"></i> Play Trailer
                    </Link>
                </div>
            </div>

            {/* {Part 3 Avalibale on platform} */}

            <div className="w-[80%] flex flex-col gap-y-5 mt-10">
                {info.watchproviders && info.watchproviders.flatrate && (
                    <div className="flex items-center gap-x-10 text-white">
                        <h1>Available On Platform</h1>
                        {info.watchproviders.flatrate.map((w, i) => (
                            <img kay={i} title={w.provider_name} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                )}

                {info.watchproviders && info.watchproviders.rent && (
                    <div className="flex items-center gap-x-10 text-white">
                        <h1>Available On Rent</h1>
                        {info.watchproviders.rent.map((w, i) => (
                            <img kay={i} title={w.provider_name} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                )}
                {info.watchproviders && info.watchproviders.buy && (
                    <div className="flex items-center gap-x-10 mb-5 text-white">
                        <h1>Available To Buy</h1>
                        {info.watchproviders.buy.map((w, i) => (
                            <img kay={i} title={w.provider_name} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                )}
            </div>

            {/* Part 4 Seasons */}

            <hr className="mt-5 mb-2 border-none h-[2px] bg-zinc-500" />

            <h1 className="text-3xl font-bold text-white mb-3 ">Seasons</h1>

            <div className="w-[100%] flex  overflow-y-hidden mb-5">
                {info.seasons.length > 0 ? (
                    info.seasons.map((s, i) => (
                        <div className="w-[15vh] mr-[10%]">
                            <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] min-w-[14vw] h-[30vh] object-cover " src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`} alt="" />
                            <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">{s.name}</h1>
                        </div>
                    ))
                ) : (
                    <h1 className="text-3xl text-white font-black text-center">Nothing To Show</h1>
                )}
            </div>

            {/* Part 5 Recommendation and Similar */}

            <hr className="mt-5 mb-2 border-none h-[2px] bg-zinc-500" />

            <h1 className="text-3xl font-bold text-white mb-3 ">Recommendation & Similar Stuff</h1>

            <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

            <Outlet />
        </div>
    ) : (
        <Loding />
    );
};

export default TvDetails;
