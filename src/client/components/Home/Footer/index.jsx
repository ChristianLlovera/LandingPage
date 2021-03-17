import style from './style.module.scss'
import nl2br from 'react-nl2br'

const Footer = props => {
    const { translate } = props
    return (
        <div className={style.footer}>
            <div className={style.info}>
                <h1>{translate.footerTitle}</h1>
                <p>{nl2br(translate.footerMessage)}</p>
            </div>
            <div className={style.copy}>christianllovera.com <span>| 2021</span></div>
        </div>
    )
}

export default Footer