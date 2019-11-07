import React from 'react'
import Button from './Button'

if (process.env.WEBPACK) { require('./_style.scss') }


const Social = props => {
    return (
        <div className="social">
            <Button type="ig" url="https://www.instagram.com/christianllovera/" />
            <Button type="fb" url="https://www.facebook.com/kaiman.llovera?ref=bookmarks" />
            <Button type="be" url="https://www.behance.net/" />
            <Button type="git" url="https://github.com/" />
        </div>
    )
}

export default Social