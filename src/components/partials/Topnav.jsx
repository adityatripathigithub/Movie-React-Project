import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {

    const [query, setquery] = useState("");

    console.log(query);

    return (
        <div className='w-full h-[10vh] relative flex justify-center items-center'>

            <i className="text-3xl text-zinc-400 ri-search-2-line "></i>

            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[60%] text-zinc-400 mx-10 p-5 text-xl outline-none  bg-transparent" type="text"
                placeholder='Scearch Anythings'
            />

            <i className="text-zinc-400 text-3xl ri-close-fill"></i>

            <div className='absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto'>

                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>
                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>
                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>

                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>
                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>
                <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-stert items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>hello everyone</span>
                </Link>

            </div>
        </div>
    )
}

export default Topnav 