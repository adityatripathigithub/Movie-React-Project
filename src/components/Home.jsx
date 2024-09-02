import React, { useEffect, useState } from "react";
import Sidenave from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {
    document.title = "SCSDB | Homepage";

    const [wallpaper, setwallpaper] = useState(null);
    const [tranding, settranding] = useState(null);

    const GetHeaderwallpaper = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day`);
            let rendomdata = data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(rendomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const Gettranding = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day`);
            settranding(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        !wallpaper && GetHeaderwallpaper();
        !tranding && Gettranding();
    }, []);

    return wallpaper && tranding ? (
        <>
            <Sidenave />
            <div className="w-[69%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />
                <HorizontalCards data={tranding} />
            </div>
        </>
    ) : (
        <h1>Loading</h1>
    );
};

export default Home;
