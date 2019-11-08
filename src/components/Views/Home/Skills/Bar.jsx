import React from 'react'
if (process.env.WEBPACK) { require('./_style.scss') }

const Bar = props => {
    const { percentage, name } = props
    const style = { '--bar-width': percentage }
    return (
        <div className="bar">
            <div className="name">{name}</div>
            <div className="percentage">{percentage}</div>
            <div className="line " style={style}></div>
        </div>
    )
}

export default Bar