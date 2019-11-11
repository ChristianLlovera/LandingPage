import React from 'react'
import nl2br from 'react-nl2br'

if (process.env.WEBPACK) { require('./_style.scss') }

const Info = props => {
    const { translate } = props
    return (
        <div className="info">
            <div className="logo"></div>
            <div className="description">
                {nl2br(translate.description)}
            </div>
        </div>
    )
}

export default Info