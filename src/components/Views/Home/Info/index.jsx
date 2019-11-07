import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }

const Info = props => {
    return (
        <div className="info">
            <div className="logo"></div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae velit at impedit iste aliquam quibusdam delectus autem temporibus. Fugit neque laboriosam aspernatur beatae amet inventore exercitationem ut deleniti optio.
                            <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae velit at impedit iste aliquam quibusdam delectus autem temporibus. Fugit neque laboriosam aspernatur beatae amet inventore exercitationem ut deleniti optio.
                            <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae velit at impedit iste aliquam quibusdam delectus autem temporibus. Fugit neque laboriosam aspernatur beatae amet inventore exercitationem ut deleniti optio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae velit at impedit iste aliquam quibusdam delectus autem temporibus. Fugit neque laboriosam aspernatur beatae amet inventore exercitationem ut deleniti optio.
                        </div>
        </div>
    )
}

export default Info