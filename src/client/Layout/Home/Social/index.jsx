import Button from './Button'
import style from './style.module.scss'

const Social = props => {
    return (
        <div className={style.social}>
            <Button type="ig" url="https://www.instagram.com/christianllovera/" />
            <Button type="fb" url="https://www.facebook.com/kaiman.llovera?ref=bookmarks" />
            <Button type="be" url="https://www.behance.net/" />
            <Button type="git" url="https://github.com/" />
        </div>
    )
}

export default Social