import css from './style.module.scss'

const Bar = props => {
    const { percentage, name } = props
    const style = { '--bar-width': percentage }
    return (
        <div className={css.bar}>
            <div className={css.name}>{name}</div>
            <div className={css.percentage}>{percentage}</div>
            <div className={`${css.line} _line`} style={style}></div>
        </div>
    )
}

export default Bar