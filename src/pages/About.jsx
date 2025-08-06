import React from 'react'
import "../styles/About.css"
import img from  "../assets/img.jpg"
function About() {
  return (
    <div className='about-wrapper'>
    <h2 className='section-title'>About</h2>
    <p className='section-intro'>
      Hey there! I’m a full stack developer with a passion for creating clean, user-friendly interfaces.
        I’ve got hands-on experience with HTML, CSS, JavaScript, Bootstrap and ReactJS.
        Recently, I worked on real-time projects based on dental lab automation, which helped me sharpen my skills
        in developing practical solutions for real-world challenges.
    </p>  
    <div className='about-main'>
      <div className='about-left'>
        <img src={img} alt="profile image"/>
      </div>
      <div className='about-right'>
        <h3>FUll Stack Developer</h3>
         <p className='intro-text'>
          Hi, I’m Sai Susmitha Gouru, a passionate Full stack Developer currently pursuing my B.Tech in Computer Science and
              Engineering, set to graduate in 2028. With a strong foundation in HTML, CSS, JavaScript, Bootstrap, and ReactJS, I thrive on
              creating, engaging and user-friendly interfaces.
        </p>
        <div className='info-grid'>
          <div className='info-item'>
            <strong>Date of Birth :</strong>03/09/2006
          </div>
          <div className='info-item'>
            <strong>Website :</strong>none
            
          </div>
          <div className='info-item'>
            <strong>Phone :</strong>+91 9154079006
          </div>
          <div className='info-item'>
            <strong>City :</strong>Ananthapur
          </div>
          <div className='info-item'>
            <strong>Age :</strong>18
          </div>
          <div className='info-item'>
            <strong>Degree :</strong>pursuing B-tech Computer Science(AIML)
          </div>
          <div className='info-item'>
            <strong>Email :</strong>saisusmithagouru@gmail.com
          </div>
          <div className='info-item'>
            <strong>Ready to work  :</strong>Yes
          </div>
        </div>
        <p className='final-text'>I’ve worked on real-time projects including dental lab automation, which honed my ability to develop
            practical solutions and enhance user experience. I’m always eager to learn and explore new technologies to improve my skills further.
</p>
      </div>
    </div>
    </div>
  )
}


export default About