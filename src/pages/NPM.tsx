import {
  useEffect,
  useRef,
  useLayoutEffect,
  RefObject,
  useState,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ArrowIcon from '../icons/ArrowIcon';
import { Select } from 'jd-react-select';
import '@/../jd-react-select/dist/components/Select.css';
import { SelectOption } from '@/../jd-react-select/dist/components/Select';
import './Page.scss';
import Footer from '../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Muunifi() {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ delay: 1.4 })
        .fromTo(
          '.hero',
          { opacity: 0, x: 200 },
          { opacity: 1, x: 0 }
        )
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

  // showcase 

  const options = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
  ];

  const [value, setValue] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Loader backgroundColor='#c62b2e' />
      <div className='fretify' ref={app}>
        <nav className='nav'>
          <div className='nav-wrapper'>
            <Link to='/'>Back home </Link>
          </div>
        </nav>
        <div className='hero'>
          <div className='hero-content' >
            <div className='text'>
              <h1 className='project-name npm-title'>jd-react-select</h1>
              <p className='project-brief'>A reusable, lightweight, and easy to use react select component.</p>
            </div>

            <div className='image'>
              <img
                src='../images/jd-react-select-laptop.png'
                alt=''
                className='laptop'
              />
            </div>

            <div className='project-info'>
              <div className='info-wrapper'>
                <p className='info-one'>
                  <span style={{ color: '#c62b2e' }}>Role</span>Front-End
                  Developer
                </p>
                <p className='info-two'>
                  <span style={{ color: '#c62b2e' }}>Context</span>Professional
                </p>
                <p className='info-three'>
                  <span style={{ color: '#c62b2e' }}>Period</span>2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='project-description' style={{ background: '#c62b2e' }}>
          <div className='description-wrapper'>
            <h2 className='background-text'>SELECT</h2>
            <h1 className='intro-text' id='title' ref={titleRef}>
              Introduction
            </h1>
            <p id='paragraph' ref={paragraphRef}>
              jd-react-select aims to be a lightweight, reusable and easy-to-use react select-component. With its customizable props and styles, jd-react-select is a great choice for developers who want a reusable select component that provides consistent functionality and styles in their projects.
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
                  I decided to create jd-react-select as a way to teach myself how to write better TypeScript and better reusable components that can be easily integrated into any project. Additionally, building this package allowed me to get familiar with how to create packages, write good documentation, and help other developers who might be looking for a high-quality, customizable, and easy-to-use select component for their projects.
                </p>
              </div>
              <div className='build' ref={purposeRef}>
                <h2>Build</h2>
                <p>
                  This package was built using TypeScript and React. I decided to keep this package lightweight and not include any more dependencies. The styling for this package is done using SCSS, although it is quite minimal. I wanted to start people off with a simple and clean select component design, and leave the rest up to them!
                </p>
              </div>
            </div>
            <div className='site-images showcase'>

              <div className="select-wrapper">
                <p>Try it out!</p>
                <Select
                  // multiple
                  options={options}
                  value={value}
                  onChange={(value) => setValue(value)}
                />
              </div>
            </div>
          </div>
        </div>
        <a href="/fretify" className="next-work-container">
          <div className="wrapper">
            <div className="text">
              <p className='label'>Next Work</p>
              <p className='project-link'>Fretify</p>
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
