import React, { useEffect, useState } from "react";
import Sidenave from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loding from "./Loding";

const Home = () => {
    // document.title = "SCSDB | Homepage";

    const [wallpaper, setwallpaper] = useState(null);
    
    const [tranding, settranding] = useState([]);
    const [category, setcategory] = useState("all");
    
    

    const GetHeaderwallpaper = async () => {
        
        try {
            const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day');
            console.log(data);
            
            let rendomdata = data.results[(Math.random() * data.results.length).toFixed()];
            console.log(rendomdata);
            
            setwallpaper(rendomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const Gettranding = async () => {
        try {
            console.log("called");
            
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${category}/day`);
            
            settranding(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };
 useEffect(()=>{
        Gettranding();
        !wallpaper && GetHeaderwallpaper();
    
 },[category])
  

    return wallpaper && tranding ? (
        <>
            <Sidenave />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />

                <div className="flex justify-between p-10">
                    <h1 className=" text-3xl font-semibold text-zinc-400 "> Tranding</h1>

                    <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => setcategory(e.target.value)} />
                </div>

                <HorizontalCards data={tranding} />
            </div>
        </>
    ) : (
        <Loding />
    );
};

export default Home;
