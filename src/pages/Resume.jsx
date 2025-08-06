import React from 'react'
import'../styles/Resume.css'
function Resume() {
  return (
    <div className='resume-page'>
      <h1 className='name'>G Sai Susmitha</h1>
      <p className='location'>Pamidi,Andhra Pradesh</p>
      <p className='contact'>
        📞 +91 9154079006|✉ saisusmithagouru@gmail.com|
        <a href="portfolio url" target="_blank">Portfolio</a>|
        <a href ="linkedin url" target="_blank">LinkedIn</a>|
        </p>
        <section >
          <h2>Objective</h2>
          <p>A dedicated computer science engineering graduate with a strong Passionate about designing</p>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li><strong>B.Tech-AI/ML</strong>|MRUH|2024-2028|CGPA:9.05</li>
            <li><strong>Intermediate</strong>|Narayana junior college|2022-2024|CGPA:9.17</li>
            <li><strong>SSC</strong>|SFS|2021-2022|CGPA:8.0</li>
          </ul>
        </section>
        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong>C,MySQL,JavaScript</li>
            <li><strong>Frameworks&Tech:</strong>HTML,CSS,Bootstrap,Reactjs</li>
            <li><strong>Tools:</strong>Git,VS Code ,Canva</li>
            <li><strong>Others:</strong>DBMS,Communication,Leadership</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <div className='project'>
            <h3>Real-time Dental|Labs|Automation Software</h3>
            <p>Role: Frontend Developer|Mar 2025-july2025</p>
          <ul>
<li>Developed a web app to manage dental business operations, doctor orders, and reports.
</li>
<li><strong>Tech Stack:</strong>, HTML, CSS, JS, jQuery, Bootstrap, Node.js, Express, Sequelize, MySQL
</li>
</ul>
</div>
</section>
<section>
<h2>Research Projects</h2>
<ul>
<li><strong> 💸Expense Tracker App:</strong> Gmail integration,regex processing,Node.js backend, React frontend.</li>
<li><strong> 🌾AgriConnect:</strong> AI voice input, ML price prediction, multilingual farmer interface.</li>
<li><strong> 🚃Smart Ticket Route Finder:</strong> Suggests alternate bus routes for unavailable seats based on location data.</li>
</ul>
</section>
<section>
<h2>Certifications & Workshops</h2>
<ul>
<li> 🎓Generative AI for Programming MRUH Workshop</li>
<li> 🗒️ReactJS Complete Course Infosys</li>
<li> ⚙️Real-Time Project Certification BDLABS</li>
<li> 📕IR4.0 Foundation -TechSaksham</li>
</ul>
</section>
<section>
<h2>Extra Curricular Activities</h2>
<ul>
<li><strong> Placement Cell Student Coordinator:</strong> Managed placements drives, handled communication.</li>
<li><strong>Class Representative:</strong> Bridged communication between students and faculty, organized academic discussions</li>
</ul>
</section>
</div>


    
  )
}

export default Resume