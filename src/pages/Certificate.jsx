import React from 'react';
import'../styles/Certificate.css';
import cert1 from "../assets/project1.jpg";
import cert2 from "../assets/project2.jpeg";
import cert3 from "../assets/project3.jpg";
import cert4 from "../assets/project4.jpeg";
const certificateData = [
  { id: 1, title: "ReactJS Complete Course - Infosys", image: cert1 },
  { id: 2, title: "Full Stack Bootcamp - Udemy", image: cert2 },
  { id: 3, title: "Generative AI Workshop - RGUKT", image: cert3 },
  { id: 4, title: "IR4.0 Foundation - TechSaksham", image: cert4 },
];

function Certificate() {
  return (
    <div className='certificates-container'>
      <h2 className='certificates-title'>My Certificates </h2>
      <p className='certificates-subtext'>
        Here are some of the certificates I've earned through workshops,online courses,and hands-on trainings.</p>
      <div className='certificates-grid'>
        {certificateData.map((cert) => (
          <div key={cert.id} className='certificate-card'>
          <img src={cert.image} alt={cert.title}/>
          <h4>{cert.title}</h4>
          </div>))}
        </div>
      </div>);};

export default Certificate;