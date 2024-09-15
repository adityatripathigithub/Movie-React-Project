import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loding from "./Loding";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [haseMore, sethaseMore] = useState(true);
    document.title = "person";
    console.log(page);
    

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            
            

            if (data.results.length > 0) {
                setperson((prevstate) => [...prevstate, ...data.results]);
                setpage(page + 1);
            } else {
                sethaseperson(false);
            }
        } catch (error) {
            console.log( error);
        }
    };

    const refreshHandler = () => {
        if (person.length === 0) {
            GetPerson();
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return person.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items center justify-center">
                <h1 onClick={() => navigate(-1)} className="mt-4 text-2xl text-zinc-400 font-semibold">
                    <i class="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    People 
                </h1>
                <Topnav />

                <div className="w-[10%]"></div>
            </div>

            <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={haseMore} loader={<h1>Loading...</h1>}>
                <Cards data={person} title="person" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loding />
    );
};

export default People;
