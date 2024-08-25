import React from 'react'
import Sidenave from './partials/Sidenav'
import Topnav from './partials/Topnav'

const Home = () => {
    return (

        <>
            <Sidenave />
            <div className='w-[80%] h-full'>
            <Topnav />
            </div>

        </>
    )
}

export default Home