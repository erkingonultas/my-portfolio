import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Check Out My Apps</a>
            <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA