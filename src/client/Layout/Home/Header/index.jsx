import Button from './Button'
import style from './style.module.scss'

const Header = props => {
    const { lang, translate } = props

    const langs = [
        { code: 'ES-es' },
        { code: 'EN-en' }
    ]

    return (
        <div className={style.header}>
            <Button lang={lang} langs={langs} translate={translate} />
            <div className={style.picture}></div>
        </div>
    )
}

export default Header