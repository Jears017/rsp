import React from 'react'
import rsLogo from '../assets/rs_school_jsW.png'
import gitLogo from '../assets/gitHubW.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-images-container'>
                <div className='copyright f'>&copy;2021</div>
                <a href='https://rs.school/react/'><img className='footer-rs-logo f' src={rsLogo} alt=""/></a>
                <a href="https://github.com/Jears017"><img className='footer-gitHub-logo f' src={gitLogo} alt=""/></a>
            </div>
        </div>
    )
}