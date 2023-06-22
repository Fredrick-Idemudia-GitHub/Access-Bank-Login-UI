import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li{
    padding: 18px 10px;
    }

    @media (max-width: 768px) {
    
    // display: none;
    flex-flow: column nowrap;
    background-color: rgb(0,0,0,0.5);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out ; 
    z-index: 5;

    li{
    color: white;
    font-family: 'Noto Serif', serif;

  }
  };
  `

export default function RightNav({open}){

  return (
    <div>
      <UL open = {open}>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/github">Github</Link></li>
      </UL>
    </div>
  )
}
