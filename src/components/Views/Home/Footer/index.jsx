import React from 'react'


if (process.env.WEBPACK) { require('./_style.scss') }


const Footer = props => {
    const { translate } = props
    return (
        <div className="footer">
            <div className="info">
                <h1>{translate.constantLearning}</h1>
                <p>{translate.constantLearningInfo}</p>
            </div>
            <div className="copy">christianllovera.com <span>| 2019</span></div>
        </div>
    )
}

export default Footer