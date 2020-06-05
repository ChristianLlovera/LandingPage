import style from './style.module.scss'

const Card = props => {
    const { translate, backgroundColor, color, icon, title, info, titleButton, url } = props
    const stl = { '--bg-color': backgroundColor, '--color': color }

    return (
        <div className={style.card} style={stl}>
            <div className={style.icon}>
                <span icon={icon}></span>
            </div>
            <h2>{title}</h2>
            <p>{info}</p>
            <a href={url} target="_blank">{titleButton}</a>
            <span className={style.background} icon={icon}></span>
            <span className={style.shadow}></span>
        </div>
    )
}

export default Card