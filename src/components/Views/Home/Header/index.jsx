import React from 'react'
import Button from './Button'

if (process.env.WEBPACK) { require('./_style.scss') }

const Header = props => {
    const { setLang, lang } = props

    const langs = [
        { name: 'español', code: 'ES-es' },
        { name: 'ingles', code: 'EN-en' }
    ]

    return (
        <div className="header">
            <Button setLang={setLang} lang={lang} langs={langs} />
            <div className="picture"></div>
        </div>
    )
}

export default Header