import Button from './Button'
import style from './style.module.scss'

const Social = props => {
    return (
        <div className={style.social}>
            <Button type="ig" url="https://www.instagram.com/christianlloveraoficial/" />
            <Button type="fb" url="https://www.facebook.com/ChristianLloveraOficial" />
            <Button type="be" url="https://www.behance.net/christillovera" />
            {/* <Button type="git" url="https://github.com/ChristianLlovera" /> */}
        </div>
    )
}

export default Social