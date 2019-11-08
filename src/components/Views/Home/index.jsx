import React from 'react'
import Header from './Header'
import Skills from './Skills'
import Social from './Social'
import Info from './Info'
import Footer from './Footer'

if (process.env.WEBPACK) { require('./_style.scss') }

const Home = () => {
    return (
        <div className="content">
            <Header />
            <div className="body">
                <div className="blue">
                    <Skills />
                    <Social />
                </div>
                <div className="white">
                    <Info />
                    <div className="email">
                        christian.llovera@gmail.com
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home