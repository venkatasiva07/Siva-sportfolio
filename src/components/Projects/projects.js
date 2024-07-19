import React from 'react';
import './projects.css';
import Link from '../../assets/link.jpg';
import Bus from '../../assets/bus.jpg';
import Atm from '../../assets/atm.jpg';

const Projects = () => {
  return (
    <section id='projects'>
      <span className='projectsTitle'>Projects</span>
      <span className='projectsDesc'>Fueled by a passion for building dynamic and user-centric web applications, I thrive as a MERN stack developer. The MERN stack's JavaScript-based architecture allows me to seamlessly navigate between front-end and back-end development, fostering a holistic understanding of the entire application lifecycle.</span>
      <div className='projectsBars'>
        <div className='projectsBar'>
          <img src={Link} alt='LinkProject' className='projectsBarImg' />
          <div className='projectsBarText'>
            <h2>Link Generator and File Sharing</h2>
            <p>Which provides link for files and also link can be share through Email. Used Node Js to develop the project</p>
          </div>
        </div>
        <div className='projectsBar'>
          <img src={Bus} alt='BusRental' className='projectsBarImg' />
          <div className='projectsBarText'>
            <h2>Bus Rental System</h2>
            <p>Which provides the services like to rent a bus for a trip. Used Html, Css, and Java Script</p>
          </div>
        </div>
        <div className='projectsBar'>
          <img src={Atm} alt='Atm Clone' className='projectsBarImg' />
          <div className='projectsBarText'>
            <h2>Clone of ATM</h2>
            <p>These project showcase the functionalities of ATM. Used PythonGUI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
