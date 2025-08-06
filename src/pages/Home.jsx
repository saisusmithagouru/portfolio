import React,{ useEffect, useRef, useState } from 'react';
import '../styles/Home.css';
import profileImg from '../assets/img.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    const vantaRef =useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

useEffect(() => {
  if (!vantaEffect && window.VANTA && window.THREE && vantaRef.current) {
    const effect = window.VANTA.NET({
      el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightcolor:0xffcc300,
        midtoneColor:0xff1f00,
        lowlightColor:0x2d00ff,
        baseColor:0xffebeb,

      });

    setVantaEffect(effect);
  }

  return () => {
    if (vantaEffect) vantaEffect.destroy();
  };
}, [vantaEffect]);
  return (
    <div ref={vantaRef} className="home-vanta">
      <div className="home-content">
        <div className="text-section">
           <h1>Hello,I'm<span className='highlight'>Susmitha</span></h1>
          <h2>Full Stack Developer | React Enthusiast</h2>
          <p>Hi, I'm Susmitha. I'm a full stack developer with a
            passion for building scalable and efficient web applications.
            I'm a strong believer in the power of technology to transform lives
            and make a positive impact on the world.</p>

                    <Link to="./resume" className="resume-button">View Resume</Link>
                </div>
                <div className="image-section">
                    <img src={profileImg} alt="Profile" />
        </div>
        </div>
        </div>
    );
}