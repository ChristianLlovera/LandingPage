import React from 'react'

const Button = props => {
    const { type, url } = props
    return (
        <a className="button" href={url} target="_blank">
            <span className={type}></span>
        </a>)
}

export default Button