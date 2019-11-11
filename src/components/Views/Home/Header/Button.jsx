import React, { useState, useEffect } from 'react'
import useHandleClick from '../../../Utils/useHandleClick'
import { Link } from 'react-router-dom'

const Options = props => {

    const { handlerStatus, setLang, lang, langs } = props
    const { node, onClick, setOnClick } = useHandleClick()

    useEffect(() => {
        if (onClick) {
            handlerStatus()
            setOnClick(false)
        }
    }, [onClick])

    const handlerAcction = item => {
        setLang(item.code)
        handlerStatus()
    }

    return (
        <div className="options" ref={node}>
            {langs.map((item, key) =>
                <Link key={key}
                    className={lang == item.code ? 'item active' : 'item'}
                    onClick={() => handlerAcction(item)}
                    to={item.code} >
                    {item.name}
                </Link>
            )}
        </div>
    )
}

const Button = props => {

    const { setLang, lang, langs } = props
    const [status, setStatus] = useState(false)

    const handlerStatus = () => {
        setStatus(!status)
    }

    return (
        <div className="button" >
            <div className="label" onClick={() => handlerStatus()}>Lenguaje</div>
            {status &&
                <Options handlerStatus={handlerStatus} setLang={setLang} lang={lang} langs={langs} />
            }
        </div>
    )
}

export default Button