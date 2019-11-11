import React, { useState, useEffect } from 'react'
import Header from './Header'
import Skills from './Skills'
import Social from './Social'
import Info from './Info'
import Footer from './Footer'
import En from '../../lang/EN-en'
import Es from '../../lang/ES-es'

if (process.env.WEBPACK) { require('./_style.scss') }

const handlerLang = params => {

    switch (params.lang) {
        case 'EN-en':
            return En
            break
        case 'ES-es':
            return Es
            break
        default:
            return Es
    }


}

const Home = props => {

    const { match: { params } } = props
    const translate = handlerLang(params)
    const [lang, setLang] = useState('ES-es')

    useEffect(() => {
        switch (params.lang) {
            case 'EN-en':
                setLang('EN-en')
                break
            case 'ES-es':
                setLang('ES-es')
                break
            default:
                setLang('ES-es')
        }
    }, [lang])

    return (
        <div className="content">
            <Header setLang={setLang} lang={lang} />
            <div className="body">
                <div className="blue">
                    <Skills translate={translate} />
                    <Social />
                </div>
                <div className="white">
                    <Info translate={translate} />
                    <a className="email" href="mailto:christian.llovera@gmail.com">
                        christian.llovera@gmail.com
                    </a>
                </div>
            </div>
            <Footer translate={translate} />
        </div>
    )
}

export default Home