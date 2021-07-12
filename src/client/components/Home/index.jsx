import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from './Header'
import Skills from './Skills'
import Social from './Social'
import Card from './Card'
import Info from './Info'
import Footer from './Footer'
import En from '../../lang/EN-en'
import Es from '../../lang/ES-es'
import style from './style.module.scss'

const handlerLang = lang => {
    switch (lang) {
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

    const router = useRouter()

    const { lang } = router.query
    const [lan, setLan] = useState('ES-es')
    const translate = handlerLang(lan)

    useEffect(() => setLan(lang), [lang])

    return (
        <div className={style.content}>
            <Header lang={lan} translate={translate} />
            <div className={style.body}>
                <div className={style.blue}>
                    <Skills translate={translate} />
                    <Social />
                </div>
                <div className={style.white}>
                    <Info translate={translate} />
                    <a className={style.email} href="mailto:christian.llovera@gmail.com">
                        christian.llovera@gmail.com
                    </a>
                    <Card
                        backgroundColor="#0f1231"
                        color="white"
                        icon="cf"
                        title="CopaFuturo"
                        titleButton="Ver Web"
                        url="https://copafuturo.com/"
                        info={translate.copafuturo}
                    />
                    <Card
                        backgroundColor="#041e42"
                        color="white"
                        icon="tg"
                        title="The Game PTY"
                        titleButton="Ver Web"
                        url="https://thegamepty.com/"
                        info={translate.thegame}
                    />

                </div>
            </div>
            <a className="whatsapp-btn animated bounceInLeft" icon="ws" target="_blank" href="https://wa.me/584242083778"></a>
            <Footer translate={translate} />
        </div>
    )
}


export default Home