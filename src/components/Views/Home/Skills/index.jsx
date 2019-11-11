import React, { useEffect } from 'react'
import Bar from './Bar'
import visibility from '../../../Utils/visibility'

const handlerVisible = () => {
    if (typeof window !== 'undefined') {
        const list = [...document.querySelectorAll('.line')]
        list.map((element) => {
            element.classList.add('progress')
        })
    }
}

const handlerHidden = () => {
    if (typeof window !== 'undefined') {
        const list = [...document.querySelectorAll('.line')]
        list.map((element) => {
            element.classList.remove('progress')
        })
    }
}

const Skills = props => {

    const { translate } = props

    useEffect(() => {
        visibility({ visible: handlerVisible, hidden: handlerHidden }, '.skills')
    }, [])

    return (
        <div className="skills">
            <h1>{translate.skilss}</h1>
            <Bar percentage="97%" name="JavaScript" />
            <Bar percentage="96%" name="NodeJS" />
            <Bar percentage="95%" name="ReactJS" />
            <Bar percentage="85%" name="Php" />
            <Bar percentage="93%" name="Electron" />
            <Bar percentage="83%" name="Firebase" />
            <Bar percentage="90%" name="Photoshop" />
            <Bar percentage="85%" name="Illustrator" />
            <div className="description">
                {translate.skilssInfo}
            </div>
        </div>
    )
}

export default Skills