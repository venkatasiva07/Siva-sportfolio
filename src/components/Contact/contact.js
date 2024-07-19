import React from 'react';
import './contact.css';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/girhub1.png';
import Email from '../../assets/email.png';
// import emailjs from '@emailjs/browser';

const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service', 'template', form.current, {
    //             publicKey: 'IZ09BKmDBXNwkeUBRvGY2',
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };
    return (
        <section id='contactPage'>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'></input>
                    <input type='email' className='email' placeholder='Your Email'></input>
                    <textarea name='message' className='msg' rows='5' placeholder='Your message'></textarea>
                    <button type='sumbit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={Linkedin} alt='Linkedin' className='link' />
                        <img src={Github} alt='Github' className='link' />
                        <img src={Email} alt='Email' className='link' />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
