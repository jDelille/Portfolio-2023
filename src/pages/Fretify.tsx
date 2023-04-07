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
import './Page.scss';
import ArrowIcon from '../icons/ArrowIcon';
import Footer from '../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Fretify() {
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
      <Loader backgroundColor='#3D5AF1' />
      <div className='fretify'>
        <nav className='nav'>
          <div className='nav-wrapper'>
            <Link to='/'>Back home </Link>
          </div>
        </nav>
        <div className='hero'>
          <div className='hero-content' ref={app}>
            <div className='text'>
              <h1 className='project-name'>Fretify</h1>
              <p className='project-brief'>Interactive Guitar Fretboard App</p>
            </div>

            <div className='image'>
              <img
                src='../images/fretify-laptop.png'
                alt=''
                className='laptop'
              />
            </div>

            <div className='project-info'>
              <div className='info-wrapper'>
                <p className='info-one'>
                  <span style={{ color: '#3D5AF1' }}>Role</span>Front-End
                  Developer
                </p>
                <p className='info-two'>
                  <span style={{ color: '#3D5AF1' }}>Context</span>Personal
                  Project
                </p>
                <p className='info-three'>
                  <span style={{ color: '#3D5AF1' }}>Period</span>2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='project-description' style={{ background: '#3D5AF1' }}>
          <div className='description-wrapper'>
            <h2 className='background-text'>FRETIFY</h2>
            <h1 className='intro-text' id='title' ref={titleRef}>
              Introduction
            </h1>
            <p id='paragraph' ref={paragraphRef}>
              Fretify is an interactive guitar fretboard website. Learn over 50 scales down the neck in every key and 'almost' every tuning. (more coming soon...). View on your browser or on the go on your mobile device, thanks to its user friendly mobile UI.
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
                  Being a guitar playing who loves to learn more about what I'm doing when I play music, I spend a lot of time looking at scale charts to become more familiar with the fretboard. I was tired of looking at old PNG files on the web to learn scales so I decided to take matters into my own hands, thus Fretify was born. Not only did it help me become a better guitarist, but it helped me become a better developer by creating the website with the best technologies and best practices.
                </p>
              </div>
              <div className='build' ref={purposeRef}>
                <h2>Build</h2>
                <p>
                  Fretify was built using React, TypeScript, SCSS, MobX, Tone.js and Tonal.js. I felt this was a good enough choice of technology for this site since it is pretty minimalist. However, I plan on expanding this project in the future. I want to incorportate Firebase so I can create user profiles and a community chat board where users can discuss everything guitar. I also want to use Next.js to handling routing and server side rendering.
                </p>
              </div>
            </div>
            <div className='site-images'>
              <img src='../images/fretify.png' alt='' ref={imageRef} />
            </div>
          </div>
        </div>
        <a href="/muunifi" className="next-work-container">
          <div className="wrapper">
            <div className="text">
              <p className='label'>Next Work</p>
              <p className='project-link'> Muunifi</p>
            </div>

            <div className="arrow">
              <ArrowIcon />
            </div>
          </div>

        </a>
        <Footer />
      </div>
    </>
  );
}
