import style from './style.module.scss'

const Loading = () => {
    return (
        <div className={style.container}>
            <div className={style.loading}>
                <span />
            </div>
        </div>
    )
}

export default Loading