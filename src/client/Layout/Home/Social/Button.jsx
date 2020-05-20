import style from './style.module.scss'

const Button = props => {
    const { type, url } = props
    return (
        <a className={style.button} href={url} target="_blank">
            <span className={style[type]}></span>
        </a>)
}

export default Button