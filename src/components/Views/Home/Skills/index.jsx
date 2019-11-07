import React from 'react'
import Bar from './Bar'
const Skills = props =>{
    return(
        <div className="skills">
        <h1>Skills</h1>
            <Bar percentage="97%" name="JavaScript" />
            <Bar percentage="96%" name="NodeJS" />
            <Bar percentage="95%" name="ReactJS" />
            <Bar percentage="85%" name="Php" />
            <Bar percentage="93%" name="Electron" />
            <Bar percentage="83%" name="Firebase" />
            <Bar percentage="90%" name="Photoshop" />
            <Bar percentage="85%" name="Illustrator" />
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente, aliquid inventore quia officiis hic explicabo! Culpa, repellat! Rem reprehenderit obcaecati voluptas dolorem laudantium? Vero deleniti tempora aperiam in obcaecati!
            </div>
        </div>
    )
}

export default Skills