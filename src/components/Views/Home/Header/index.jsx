import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }

const Header = props => {
    return (
        <div className="header">
            <div className="picture"></div>
        </div>
    )
}

export default Header