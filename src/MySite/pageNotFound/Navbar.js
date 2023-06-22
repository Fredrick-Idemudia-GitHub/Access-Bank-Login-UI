import React from 'react'
import '../App.css'
import Burger from './Burger'

export default function Navbar() {

    return(
        <nav>
            <div>
                <div className='logo-div'></div>
                <span className='logo-name'>Saranuella</span>
            </div>
            <Burger />
        </nav>
    )
  
}


