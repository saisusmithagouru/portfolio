import React from "react";
import "../styles/Skills.css";
const skillsData = [
{ name: "HTML", percentage: 95},
{ name: "CSS", percentage: 90 },
{ name: "JavaScript", percentage: 85},
{ name: "Bootstrap", percentage: 90 },
{ name: "ReactJS", percentage: 85},
{ name: "Node.js", percentage: 75},
{ name: "Express.js", percentage: 70},
{ name: "MongoDB", percentage: 70},
{ name: "MySQL", percentage: 80},
{ name: "Git & GitHub", percentage: 90 },
{ name: "Canva", percentage: 95},
];
function Skills(){
return (
<div className="skills-container">
<h2 className="skills-title">My Skills</h2>
<p className="skills-intro">
Below are the technologies and tools I'm proficient in, along with an estimate of my confidence in each.
</p>
<div className="skills-list">
{skillsData.map((skill, index) => (
<div className="skill-item" key={index}>
<div className="skill-header">
<span>{skill.name}</span>
<span>{skill.percentage}%</span>
</div>
<div className="skill-bar">
<div className="skill-fill" style={{ width: `${skill.percentage}%`}}> </div>
</div>
</div>
))}
</div>
</div>
);
};
export default Skills;