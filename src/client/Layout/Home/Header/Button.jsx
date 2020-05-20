import { useState, useEffect } from 'react'
import Link from 'next/link'
import useHandleClick from '../../../Hooks/useHandleClick'
import style from './style.module.scss'

const Options = props => {

    const { handlerStatus, lang, langs, translate } = props
    const { node, onClick, setOnClick } = useHandleClick()

    useEffect(() => {
        if (onClick) {
            handlerStatus()
            setOnClick(false)
        }
    }, [onClick])


    return (
        <div className={style.options} ref={node}>
            {langs.map((item, key) =>
                <Link href='/[lang]' as={`/${item.code}`}>
                    <a key={key}
                        className={lang == item.code ? `${style.item} ${style.active}` : style.item}
                        onClick={() => handlerStatus()}>
                        {translate[item.code]}
                    </a>
                </Link>
            )}
        </div>
    )
}

const Button = props => {

    const { lang, langs, translate } = props
    const [status, setStatus] = useState(false)

    const handlerStatus = () => {
        setStatus(!status)
    }

    return (
        <div className={style.button} >
            <div className={style.label} onClick={() => handlerStatus()}>{translate.language}</div>
            {status &&
                <Options handlerStatus={handlerStatus} lang={lang} langs={langs} translate={translate} />
            }
        </div>
    )
}

export default Button