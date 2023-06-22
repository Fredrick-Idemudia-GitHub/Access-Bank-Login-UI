import React from 'react'
// import { Link } from "react-router-dom";
import pdfFile from '../images/cvfredrick.pdf'


export default function MainBody() {

  return (
    <div className='body-div-main'>
        <div className='body-div'>
            <p className='about-header-resume'>My Resume</p>
            <section className='body-text-resume'>
              <p>Download my PDF resume<a href={pdfFile} download> Here</a></p>
              <p style={{marginTop:'10px'}}> I am keen to expand my knowledge and skills as a web developer 
                  in the web design and development industry. This I am to achieve 
                  by applying the experience and skills learned.
                  <p style={{marginTop:'10px'}}>
                  I am also passionate
                  to adapt these skill sets, while learning new ones within your organization,
                  adding values and contributing towards achieving the organizations 
                  operational objectives.
                  </p>  
                  <p style={{marginTop:'10px'}}>I am always eager to tackle more complex 
                  problems and continue to find ways to maximize users experience 
                  and efficiency</p>
                  <p style={{marginTop:'10px'}}>Outlined below are my skill sets</p>
            </p>
            <dl className='my-list'>
              <dt>Hardware</dt>
              <dd>Computer System Engineering</dd>
              <dd>Basic LAN Networking</dd>
              <dt>Computer Applications</dt>
              <dd>Microsoft Office Packages</dd>
              <dd>Graphic</dd>
              <dd>Internet</dd>
              <dd>Social Media</dd>
              <dt>Web Development</dt>
              <dd>HTML</dd>
              <dd>CSS</dd>
              <dd>SASS</dd>
              <dd>Bootstrap</dd>
              <dd>Figma</dd>
              <dd>React JS</dd>
              <dd>React Native</dd>
              <dd>Javascript</dd>
              <dd>NodeJS</dd>
              <dd>Express JS</dd>
              <dd>mongoDB</dd>
              <dd>MySQL</dd>
              <dt>*Certifications</dt>
              <dd>Google African Developer Training Program:</dd>
              <dd>View Online Certificate here:<a href='https://adscerts.com/scholar/4453F1E22C6B3E0'>Digital Certificate</a></dd>
              <dt>*Lagos State University of Science and Technology </dt>
              <dt>Formally - Lagos State Polytechnic:</dt>
              <dd>Higher National Diploma</dd>
              <dt>Language</dt>
              <dd>English</dd>
              <dt>Hobbies</dt>
              <dd>Watching Movies</dd>
              <dd>Listening to news</dd>
              <dd>listening to music</dd>
            </dl>
            </section>
        </div>
    </div>
  )
}
