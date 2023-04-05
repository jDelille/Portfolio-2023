import { useState, useEffect } from 'react';
import External from '../../icons/External';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import Scrollspy from 'react-scrollspy';

import './Hero.scss';

type HeroProps = {
 onSetActiveLink: (link: string) => void;
 activeLink: string;
};

export default function Hero({ onSetActiveLink, activeLink }: HeroProps) {
 const [scrollEnabled, setScrollEnabled] = useState(true);

 const sectionIds = ['projects', 'about', 'contact'];

 useEffect(() => {
  const handleScroll = () => {
   if (scrollEnabled) {
    const currentSection = sectionIds.find((id) => {
     const section = document.getElementById(id);
     if (section) {
      const rect = section.getBoundingClientRect();
      return (
       rect.top <= window.innerHeight / 2 &&
       rect.bottom >= window.innerHeight / 2
      );
     }
     return false;
    });
    if (currentSection) {
     onSetActiveLink(currentSection);
    }
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, [sectionIds, onSetActiveLink]);

 const handleNavClick = (link: string) => {
  setScrollEnabled(false); // Disable scroll on nav click
  onSetActiveLink(link);
  setTimeout(() => setScrollEnabled(true), 1000); // Enable scroll after 1 second delay
 };

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

   <Scrollspy items={sectionIds} currentClassName='is-active'>
    <nav>
     <ul>
      <li
       className={
        activeLink === 'projects' ? 'active-nav-link' : 'nav-link'
       }
       onClick={() => {
        onSetActiveLink('projects');
        handleNavClick('projects');
       }}>
       <span className='number'>01</span>

       <a href='#projects'>
        <span
         className={
          activeLink === 'projects' ? 'extended-line' : 'short-line'
         }></span>
        Projects
       </a>
      </li>
      <li
       className={
        activeLink === 'about' ? 'active-nav-link' : 'nav-link'
       }
       onClick={() => {
        onSetActiveLink('about');
        handleNavClick('about');
       }}>
       <span className='number'>02</span>

       <a href='#about'>
        <span
         className={
          activeLink === 'about' ? 'extended-line' : 'short-line'
         }></span>
        About
       </a>
      </li>
      <li
       className={
        activeLink === 'contact' ? 'active-nav-link' : 'nav-link'
       }
       onClick={() => {
        onSetActiveLink('contact');
        handleNavClick('contact');
       }}>
       <span className='number'>03</span>

       <a href='#contact'>
        <span
         className={
          activeLink === 'contact' ? 'extended-line' : 'short-line'
         }></span>
        Contact
       </a>
      </li>
     </ul>
    </nav>
   </Scrollspy>

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
