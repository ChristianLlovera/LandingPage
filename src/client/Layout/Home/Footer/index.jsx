import style from './style.module.scss'

const Footer = props => {
    const { translate } = props
    return (
        <div className={style.footer}>
            <div className={style.info}>
                <h1>{translate.constantLearning}</h1>
                <p>{translate.constantLearningInfo}</p>
            </div>
            <div className={style.copy}>christianllovera.com <span>| 2020</span></div>
        </div>
    )
}

export default Footer