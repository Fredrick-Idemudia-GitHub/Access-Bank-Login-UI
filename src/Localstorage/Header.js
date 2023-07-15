import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFirstOrder} from '@fortawesome/free-brands-svg-icons';
import { faBell, faFaceGrinWink } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';


import './BankApp.css'
import logo from './images/logo.png'

export default function Header() {
  return (
    <div className='header-container'> 
        <div className='left-items'>
            <div><img src={logo} alt='access bank logo' /></div>
        </div>
        <div className='right-items'>
            <div><p><FontAwesomeIcon icon={faBell} /></p></div>
            <div><p className='flag-name right-items-space'><FontAwesomeIcon icon={faFaceGrinWink}/></p></div>
            <div><p className='arrow-icon right-items-space'><FontAwesomeIcon icon={faArrowAltCircleDown}/></p></div>
        </div>
    </div>
  )
}
