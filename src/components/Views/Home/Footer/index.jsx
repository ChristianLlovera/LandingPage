import React from 'react'


if (process.env.WEBPACK) { require('./_style.scss') }


const Footer = props => {

    return (
        <div className="footer">
            <div className="info">
                <h1>Aprendizaje Constante</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ab nihil molestias neque quas, ipsum perferendis tenetur ex nemo corrupti eveniet, aut aperiam quisquam, perspiciatis mollitia sed delectus saepe laboriosam.</p>
            </div>
            <div className="copy">christianllovera.com <span>| 2019</span></div>
        </div>
    )
}

export default Footer