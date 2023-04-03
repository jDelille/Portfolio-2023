import { useState } from 'react';
import External from '../../icons/External';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import './Hero.scss';

export default function Hero() {
 const [activeLink, setActiveLink] = useState('projects');

 return (
  <section className='hero'>
   <h1>Justin Delille</h1>
   <h2>Front-End Web Developer</h2>
   <p className='bio'>
    I like to build interactive websites using React and TypeScript, solve
    problems with code, and learn about new technologies. View my work,
    experience, and learn more about who I am. If you like what you see,
    let's get in touch and make some magic happen.
   </p>

   <nav>
    <ul>
     <li
      className={
       activeLink === 'projects' ? 'active-nav-link' : 'nav-link'
      }
      onClick={() => setActiveLink('projects')}>
      <span className='number'>01</span>
      <span
       className={
        activeLink === 'projects' ? 'extended-line' : 'short-line'
       }></span>
      Projects
     </li>
     <li
      className={activeLink === 'about' ? 'active-nav-link' : 'nav-link'}
      onClick={() => setActiveLink('about')}>
      <span className='number'>02</span>
      <span
       className={
        activeLink === 'about' ? 'extended-line' : 'short-line'
       }></span>{' '}
      About
     </li>
     <li
      className={
       activeLink === 'contact' ? 'active-nav-link' : 'nav-link'
      }
      onClick={() => setActiveLink('contact')}>
      <span className='number'>03</span>
      <span
       className={
        activeLink === 'contact' ? 'extended-line' : 'short-line'
       }></span>
      Contact
     </li>
    </ul>
   </nav>

   <div className='extra-content'>
    <img src='../images/me.jpg' alt='' />
    <div className='linkedin'>
     <LinkedinIcon />
     <p>Linkedin</p>
     <External />
    </div>
    <div className='github'>
     <GithubIcon />
     <p>Github</p>
     <External />
    </div>
   </div>
  </section>
 );
}
