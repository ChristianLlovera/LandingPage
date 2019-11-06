import React from 'react'
import { Link } from 'react-router-dom'

if (process.env.WEBPACK) { require('./style.scss') }

const Home = () => {
    return (
        <div >
            Home - <Link to="/about">About</Link>
        </div>
    )
}

export default Home