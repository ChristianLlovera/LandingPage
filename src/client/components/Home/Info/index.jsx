import { useEffect } from 'react'
import nl2br from 'react-nl2br'
import style from './style.module.scss'

const onLoadImage = () => {
    const url = '/assets/img/SwishSwish.webp'
    const elem = document.getElementById('swish')
    const bgImg = new Image()
    bgImg.onload = () => {
        elem.style.backgroundImage = `url(${bgImg.src})`
    }
    bgImg.src = url
}

const Info = props => {
    const { translate } = props

    useEffect(() => {
        onLoadImage()
    }, [])

    return (
        <div className={style.info}>
            <div id="swish" className={style.swish}></div>
            <div className={style.logo}></div>
            <div className={style.description}>
                {nl2br(translate.description)}
            </div>
        </div>
    )
}

export default Info