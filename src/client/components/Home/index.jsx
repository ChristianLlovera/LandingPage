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
                        backgroundColor="black"
                        color="white"
                        icon="git"
                        title="GitHub"
                        titleButton="ir a GitHub"
                        url="https://github.com/ChristianLlovera"
                        info={translate.gitHubDescription}
                    />
                    <Card
                        backgroundColor="#340854"
                        color="white"
                        icon="be"
                        title="Bēhance"
                        titleButton="ir a Bēhance"
                        url="https://www.behance.net/christillovera"
                        info={translate.behanceDescription}
                    />

                </div>
            </div>
            <Footer translate={translate} />
        </div>
    )
}


export default Home