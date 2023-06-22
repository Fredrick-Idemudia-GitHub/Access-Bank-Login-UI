import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import '../App.css'

function Footer() {
  return (
    <div className='footer-div'>
        <div className='social-media-div'>
            <a className='icon' href='https://twitter.com/Idemudia_Fred'><div><FontAwesomeIcon icon={faTwitter}/></div></a>
            <a className='icon' href='https://github.com/Fredrick-Idemudia-GitHub'><div><FontAwesomeIcon icon={faGithub}/></div></a>
        </div>
          {/* <div className='copyright-div'>
            <p>All Rights Reserved  | (c) Saranuella Enterprises | 2023</p>
          </div> */}
        <div className='link-div'>
            <div><p className='link-text'><Link to="/">About Me</Link></p></div>
            <div><p className='link-text'><Link to="/resume">Resume</Link></p></div>
            {/* <div><p className='link-text'>Github</p></div> */}
            {/* <div><p className='link-text'>Twitter</p></div> */}
            <div><p className='link-text'><Link to="/contacts">Contacts</Link></p></div>
        </div>
        <div className='copyright-div'>
            <span>All Rights Reserved  | (c) Saranuella Enterprise<span className='space'></span></span><span className='date'></span>
          </div>
    </div>
  )
}

export default Footer