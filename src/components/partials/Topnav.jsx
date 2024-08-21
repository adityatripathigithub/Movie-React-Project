import React from 'react'

const Topnav = () => {
    return (
        <div className='w-full h-[10vh] relative flex justify-center items-center'>

            <i class="text-3xl text-zinc-400 ri-search-2-line "></i>
            
            <input className='w-[60%] text-zinc-400 mx-10 p-5 text-xl outline-none  bg-transparent' type="text" placeholder='Scearch Anythings' />
            
            <i class="text-zinc-400 text-3xl ri-close-fill"></i>
        </div>
    )
}

export default Topnav