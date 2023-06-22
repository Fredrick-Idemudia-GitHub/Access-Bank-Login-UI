import React from 'react';
import photo from '../images/myphoto.jpg'

export default function MainBody() {
  return (
    <div className='body-div-main'>
        <div className='body-div'>
            <p className='about-header'>Who is Fredrick Idemudia?</p>
            <section className='body-text'>
                <p>
                    <img src={photo} className='my-photo' alt='my-id' />
                    My name is Fredrick Idemudia, I have extensive knowledge 
                    of web technologies, including HTML, CSS, JavaScript, MySQL, 
                    MongoDB, React JS, React Native, NodeJS, Express, Figma, Git, 
                    and more. I have experience in designing, developing, and
                    maintaining responsive websites and web applications for various
                    clients.
                </p>
                <p>
                    In my previous roles, I have contributed to the development of 
                    projects ranging from simple landing pages to complex web 
                    applications. I have a proven track record of delivering 
                    high-quality work on time and within budget. I am skilled 
                    in collaborating with teams, communicating effectively, and 
                    staying up-to-date with the latest web development trends.
                </p>
                <p>
                    In addition to my technical skills, I am a fast learner, a problem-solver,
                    and a team player. I am passionate about using my skills to create 
                    engaging and innovative solutions for clients, and I am committed to 
                    delivering results that exceed expectations.
                </p>
                <p>
                    I am always excited about opportunities to bring my skills and experience to bear 
                    in a dynamic organization and contribute to its success. 
                </p>
                <p>
                    I welcome the opportunity to discuss how my skills and experience 
                    align with your organization's needs. Please feel free to contact 
                    me for more information or to schedule an interview.
                </p>
                <p>
                    My contact details can be found in the contact page. 
                </p>
                <p>
                    I look forward to hearing from you soon.
                </p>
                <p>
                    Yours sincerely,
                </p>
                <p>
                    Fredrick Idemudia
                </p>
                <p>
                    Web developer
                </p>
            </section>
        </div>
    </div>
  )
}
