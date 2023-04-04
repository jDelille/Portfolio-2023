import { useState, useEffect } from 'react';
import External from '../../icons/External';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import Scrollspy from 'react-scrollspy'

import './Hero.scss';

type HeroProps = {
 onSetActiveLink: (link: string) => void,
 activeLink: string
}

export default function Hero({ onSetActiveLink, activeLink }: HeroProps) {
 const sectionIds = ['projects', 'about', 'contact'];

 useEffect(() => {
  const handleScroll = () => {
   const currentSection = sectionIds.find(id => {
    const section = document.getElementById(id);
    if (section) {
     const rect = section.getBoundingClientRect();
     return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    }
    return false;
   });
   if (currentSection) {
    onSetActiveLink(currentSection);
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, [sectionIds, onSetActiveLink]);

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

   <Scrollspy items={sectionIds} currentClassName="is-active">
    <nav>
     <ul>
      <li
       className={
        activeLink === 'projects' ? 'active-nav-link' : 'nav-link'
       }
       onClick={() => onSetActiveLink('projects')}>
       <span className='number'>01</span>
       <span
        className={
         activeLink === 'projects' ? 'extended-line' : 'short-line'
        }></span>
       <a href="#projects">Projects</a>
      </li>
      <li
       className={activeLink === 'about' ? 'active-nav-link' : 'nav-link'}
       onClick={() => onSetActiveLink('about')}>
       <span className='number'>02</span>
       <span
        className={
         activeLink === 'about' ? 'extended-line' : 'short-line'
        }></span>{' '}
       <a href="#about">About</a>
      </li>
      <li
       className={
        activeLink === 'contact' ? 'active-nav-link' : 'nav-link'
       }
       onClick={() => onSetActiveLink('contact')}>
       <span className='number'>03</span>
       <span
        className={
         activeLink === 'contact' ? 'extended-line' : 'short-line'
        }></span>
       <a href="#contact">Contact</a>
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