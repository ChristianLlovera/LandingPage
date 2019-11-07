import React from 'react'

if (process.env.WEBPACK) {
    require('./_style.scss')
    require('./_animate.scss')
}

const Layout = props => {

    return (
        <>{props.children}</>
    )
}


export default Layout
