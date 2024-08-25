import React from 'react';
import './skills.css';
import Webesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';
import UiDesign from '../../assets/ui-design.png';
import Devops from '../../assets/devops-263x300.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Fueled by a passion for building dynamic and user-centric web applications, I thrive as a MERN stack developer. The MERN stack's JavaScript-based architecture allows me to seamlessly navigate between front-end and back-end development, fostering a holistic understanding of the entire application lifecycle.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Webesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>Passionate about crafting visually appealing and user-friendly websites that blend aesthetics with functionality.<br />Languages  And  Fameworks:  HTML,  CSS,  JavaScript,  React JS</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={UiDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>MERN STACK</h2>
            <p>Seeking to leverage my skills in MongoDB, Express, React, and Node.js to create innovative web solutions as a MERN stack developer.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={Devops} alt='Devops' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Devops</h2>
            <p> Passionate about streamlining software delivery through DevOps practices, integrating development and operations to enhance efficiency and reliability. <br /> Tools:  Git,  Docker,  Jenkins,  Puppet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
