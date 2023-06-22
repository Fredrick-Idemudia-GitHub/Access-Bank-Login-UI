import React from 'react';
import photo from '../images/myphoto.jpg'

export default function MainBody() {
  return (
    <div className='body-div-main'>
        <div className='body-div'>
            <p className='about-header'>Link to My Github Page</p>
            <section className='body-text'>
                <p>
                    <img src={photo} className='my-photo' alt='my-id' />
                    Projects in my Github repository consist of both amateur 
                    and professional designs. The amateur ones were developed 
                    in the early stages of my web development training, some 
                    served as my hands on projects. Please click 
                    <a href='https://github.com/Fredrick-Idemudia-GitHub' className='github-link'> HERE</a> to go 
                    to my Github repo.
                </p>
            </section>
        </div>
    </div>
  )
}
