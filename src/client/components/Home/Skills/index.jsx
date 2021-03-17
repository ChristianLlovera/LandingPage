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
            <Bar percentage="95%" name="Facebook Ads" />
            <Bar percentage="98%" name="Instagram Ads" />
            <Bar percentage="98%" name="Wordpress" />
            <Bar percentage="97%" name="WooCommerce" />
            <Bar percentage="94%" name="Photoshop" />
            <Bar percentage="97%" name="Illustrator" />
            <Bar percentage="37%" name="Cinema4D" />
            <Bar percentage="47%" name="Premier Pro" />
            <Bar percentage="99%" name="HTML5/CSS3" />
            <Bar percentage="85%" name="Shopify" />
            <Bar percentage="99%" name="JavaScript" />
            <Bar percentage="80%" name="NodeJS" />
            <Bar percentage="72%" name="Redux" />
            <Bar percentage="97%" name="NextJS" />
            <Bar percentage="77%" name="Express" />
            <Bar percentage="70%" name="Electron" />
            <Bar percentage="67%" name="Socket IO" />
            <Bar percentage="97%" name="Git" />
            <Bar percentage="85%" name="Webpack" />
            <Bar percentage="93%" name="Sass" />
            <Bar percentage="99%" name="Php" />
            <Bar percentage="20%" name="Phyton" />
            <Bar percentage="24%" name="Go" />
            <Bar percentage="83%" name="Firebase" />
            <Bar percentage="42%" name="MongoDB" />
            <Bar percentage="52%" name="MySQL" />
            <Bar percentage="35%" name="PostgresSQL" />
            <div className={style.description}>
                {translate.skilssInfo}
            </div>
        </div>
    )
}

export default Skills