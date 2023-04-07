import {
 useEffect,
 useRef,
 useLayoutEffect,
 RefObject,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { useIntersection } from 'react-use';
import './Page.scss';
import ArrowIcon from '../icons/ArrowIcon';

gsap.registerPlugin(ScrollTrigger);

export default function Muunifi() {
 const app = useRef<HTMLDivElement>(null);
 const tl = useRef<GSAPTimeline>();

 useEffect(() => {
  let ctx = gsap.context(() => {
   tl.current = gsap
    .timeline({ delay: 1.4 })
    .fromTo(
     '.project-name',
     { y: -10, opacity: 0, delay: 1 },
     { y: 10, opacity: 1 }
    )
    .fromTo('.project-brief', { y: -10, opacity: 0 }, { y: 10, opacity: 1 })
    .fromTo('.laptop', { y: 20, opacity: 0 }, { y: 10, opacity: 1 })
    .fromTo('.info-wrapper', { y: 20, opacity: 0 }, { y: 10, opacity: 1 });
  }, app);

  return () => ctx.revert();
 }, []);

 // scroll trigger stuff
 const titleRef = useRef(null);
 const paragraphRef = useRef(null);
 const buttonRef = useRef(null);
 const purposeRef = useRef(null);
 const imageRef = useRef(null);

 ScrollTrigger.refresh();

 useLayoutEffect(() => {
  const createScrollTrigger = (
   ref: RefObject<HTMLElement>,
   animation: gsap.core.Animation,
   start: string
  ) => {
   ScrollTrigger.create({
    trigger: ref.current,
    animation,
    toggleActions: 'play none none none',
    start,
   });
  };

  const title = gsap.fromTo(
   titleRef.current,
   { autoAlpha: 0, y: 20 },
   { duration: 1, autoAlpha: 1, y: 0 }
  );
  createScrollTrigger(titleRef, title, 'top bottom-=100px');

  const paragraph = gsap.fromTo(
   paragraphRef.current,
   { autoAlpha: 0, y: 10 },
   { duration: 1, autoAlpha: 1, y: 0 }
  );
  createScrollTrigger(paragraphRef, paragraph, 'top bottom-=200px');

  const button = gsap.fromTo(
   buttonRef.current,
   { autoAlpha: 0, y: 10 },
   { duration: 1, autoAlpha: 1, y: 0 }
  );
  createScrollTrigger(buttonRef, button, 'top bottom-=150px');

  const purpose = gsap.fromTo(
   purposeRef.current,
   { autoAlpha: 0, y: 10 },
   { duration: 1, autoAlpha: 1, y: 0 }
  );
  createScrollTrigger(purposeRef, purpose, 'top bottom-=150px');

  const image = gsap.fromTo(
   imageRef.current,
   { autoAlpha: 0, y: 10 },
   { duration: 0.6, autoAlpha: 1, y: 0 }
  );
  createScrollTrigger(imageRef, image, 'top bottom-=150px');

  ScrollTrigger.refresh();
 }, []);

 return (
  <>
   <Loader backgroundColor='#7367FE' />
   <div className='fretify'>
    <nav className='nav'>
     <div className='nav-wrapper'>
      <Link to='/'>Back home </Link>
     </div>
    </nav>
    <div className='hero'>
     <div className='hero-content' ref={app}>
      <div className='text'>
       <h1 className='project-name'>Muunifi</h1>
       <p className='project-brief'>Social platform built for financial communities</p>
      </div>

      <div className='image'>
       <img
        src='../images/muunifi-laptop.png'
        alt=''
        className='laptop'
       />
      </div>

      <div className='project-info'>
       <div className='info-wrapper'>
        <p className='info-one'>
         <span style={{ color: '#7367FE' }}>Role</span>Front-End
         Developer
        </p>
        <p className='info-two'>
         <span style={{ color: '#7367FE' }}>Context</span>Professional
        </p>
        <p className='info-three'>
         <span style={{ color: '#7367FE' }}>Period</span>2023
        </p>
       </div>
      </div>
     </div>
    </div>
    <div className='project-description' style={{ background: '#7367FE' }}>
     <div className='description-wrapper'>
      <h2 className='background-text'>MUUNIFI</h2>
      <h1 className='intro-text' id='title' ref={titleRef}>
       Introduction
      </h1>
      <p id='paragraph' ref={paragraphRef}>
       Lato aims to be a modern, solid and easy-to-use web-based software
       to manage content. With its intuitive dashboard and hand-crafted
       UI, Lato helps every customer to easily manage every kind of
       content he/she needs.
      </p>
      <button ref={buttonRef}>Vist Website</button>
     </div>
    </div>
    <div className='project-details'>
     <div className='detail-wrapper'>
      <div className='text'>
       <div className='purpose' ref={purposeRef}>
        <h2>Purpose</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
         veniam non quidem doloribus autem voluptatem maxime dolor
         facilis voluptate, impedit saepe laudantium accusamus in
         dolorum cum assumenda molestiae deserunt eaque. Lorem ipsum
         dolor sit amet consectetur adipisicing elit. Sunt, veniam non
         quidem doloribus autem voluptatem maxime dolor facilis
         voluptate, impedit saepe laudantium accusamus in dolorum cum
         assumenda molestiae deserunt eaque.
        </p>
       </div>
      </div>
      <div className='site-images'>
       <img src='../images/muunifi.png' alt='' ref={imageRef} />
      </div>
     </div>
    </div>
    <a href="/jd-react-select" className="next-work-container">
     <div className="wrapper">
      <div className="text">
       <p className='label'>Next Work</p>
       <p className='project-link'>jd-react-select</p>
      </div>

      <div className="arrow">
       <ArrowIcon />
      </div>
     </div>

    </a>
    <footer></footer>
   </div>
  </>
 );
}
