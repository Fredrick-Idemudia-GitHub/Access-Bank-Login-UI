import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdBadge, faKissWinkHeart, faSadCry } from '@fortawesome/free-regular-svg-icons';


export default function Footer() {
  return (
    <div className='footer-container'>
        <div><p><FontAwesomeIcon icon={faIdBadge}/></p></div>
        <div><p><FontAwesomeIcon icon={faEnvelope}/></p></div>
        <div><p><FontAwesomeIcon icon={faSadCry}/></p></div>
        <div><p><FontAwesomeIcon icon={faKissWinkHeart}/></p></div>
    </div>
  )
}
