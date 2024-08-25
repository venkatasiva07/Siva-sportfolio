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
            <p>Developed a backend server to generate the links for the files.<br />
            Learned and applied the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack web development. <br />
            Experienced the usage of rest api's like Postman,Insomnia.</p>
          </div>
        </div>
        <div className='projectsBar'>
          <img src={Bus} alt='BusRental' className='projectsBarImg' />
          <div className='projectsBarText'>
            <h2>Bus Rental System</h2>
            <p>Developed a application used to rent a bus . <br />
            Experienced some image slidding effects. <br />
            Applied Web technologies like Html,  Css, and  JavaScript.</p>
          </div>
        </div>
        <div className='projectsBar'>
          <img src={Atm} alt='Atm Clone' className='projectsBarImg' />
          <div className='projectsBarText'>
            <h2>Clone of ATM</h2>
            <p>These project showcase the functionalities of ATM. Used Python GUI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
