import React, { useEffect } from 'react'
import Bar from './Bar'
import visibility from '../../../Utils/visibility'
import style from './style.module.scss'

const handlerVisible = () => {
    if (typeof window !== 'undefined') {
        const list = [...document.querySelectorAll('._line')]
        list.map((element) => {
            element.classList.add('progress')
        })
    }
}

const handlerHidden = () => {
    if (typeof window !== 'undefined') {
        const list = [...document.querySelectorAll('._line')]
        list.map((element) => {
            element.classList.remove('progress')
        })
    }
}

const Skills = props => {

    const { translate } = props

    useEffect(() => {
        visibility({ visible: handlerVisible, hidden: handlerHidden }, '._skills')
    }, [])

    return (
        <div className={`${style.skills} _skills`}>
            <h1>{translate.skilss}</h1>
            <Bar percentage="97%" name="JavaScript" />
            <Bar percentage="80%" name="NodeJS" />
            <Bar percentage="95%" name="ReactJS" />
            <Bar percentage="32%" name="Redux" />
            <Bar percentage="97%" name="NextJS" />
            <Bar percentage="77%" name="Express" />
            <Bar percentage="70%" name="Electron" />
            <Bar percentage="67%" name="Socket IO" />
            <Bar percentage="97%" name="Git" />
            <Bar percentage="85%" name="Webpack" />
            <Bar percentage="27%" name="Grunt" />
            <Bar percentage="30%" name="Gulp" />
            <Bar percentage="33%" name="Less" />
            <Bar percentage="93%" name="Sass" />
            <Bar percentage="65%" name="Shopify Liquid" />
            <Bar percentage="20%" name="Phyton" />
            <Bar percentage="24%" name="Go" />
            <Bar percentage="45%" name="Php" />
            <Bar percentage="35%" name="Laravel" />
            <Bar percentage="83%" name="Firebase" />
            <Bar percentage="42%" name="MongoDB" />
            <Bar percentage="32%" name="MySQL" />
            <Bar percentage="25%" name="PostgresSQL" />
            <Bar percentage="25%" name="OracleSQL" />
            <Bar percentage="94%" name="Photoshop" />
            <Bar percentage="97%" name="Illustrator" />
            <Bar percentage="37%" name="Cinema4D" />
            <Bar percentage="47%" name="Premier Pro" />
            <div className={style.description}>
                {translate.skilssInfo}
            </div>
        </div>
    )
}

export default Skills