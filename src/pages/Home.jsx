import React from 'react'
import Banner from '../features/Banner'
import Movies from '../features/Movies'
import Serials from '../features/Serials'

const Home = () => {
    return (
        <div>
            <Banner />
            <Movies />
            <Serials />
        </div>
    )
}

export default Home