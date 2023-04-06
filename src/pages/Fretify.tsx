import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './Page.scss';
gsap.registerPlugin(ScrollTrigger)

export default function Fretify() {

  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ delay: 1.4 })
        .fromTo(".project-name", { y: -10, opacity: 0, delay: 1 }, { y: 10, opacity: 1 })
        .fromTo(".project-brief", { y: -10, opacity: 0 }, { y: 10, opacity: 1 })
        .fromTo(".laptop", { y: 20, opacity: 0 }, { y: 10, opacity: 1 })
        .fromTo(".info-wrapper", { y: 20, opacity: 0 }, { y: 10, opacity: 1 })
    }, app);


    return () => ctx.revert();

  }, [])


  return (
    <>
      <Loader backgroundColor='#3D5AF1' />
      <SimpleBar className='fretify' >
        <nav className='nav'>
          <div className="nav-wrapper">
            <Link to='/'>Back home </Link>
          </div>

        </nav>
        <div className="hero">
          <div className="hero-content" ref={app}>

            <div className="text">
              <h1 className='project-name'>Fretify</h1>
              <p className='project-brief'>Interactive Guitar Fretboard App</p>
            </div>

            <div className="image">
              <img src="../images/fretify-laptop.png" alt="" className='laptop' />
            </div>

            <div className="project-info">
              <div className="info-wrapper">
                <p className='info-one'><span style={{ color: '#3D5AF1' }}>Role</span>Front-End Developer</p>
                <p className='info-two'><span style={{ color: '#3D5AF1' }}>Context</span>Personal Project</p>
                <p className='info-three'><span style={{ color: '#3D5AF1' }}>Period</span>2023</p>
              </div>
            </div>

          </div>
        </div>
        <div className="project-description" style={{ background: '#3D5AF1' }} >
          <div className="description-wrapper">
            <h2 className='background-text' >FRETIFY</h2>
            <h1 className='intro-text'  >Introduction</h1>
            <p  >Lato aims to be a modern, solid and easy-to-use web-based software to manage content. With its intuitive dashboard and hand-crafted UI, Lato helps every customer to easily manage every kind of content he/she needs.</p>
            <button >Vist Website</button>
          </div>

        </div>
        <div className="project-details">
          <div className="detail-wrapper">
            <div className="text">
              <div className="purpose">
                <h2>Purpose</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque.</p>
              </div>
              {/* <div className="build">
        <h2>Build</h2>

       </div> */}
            </div>
            <div className="site-images">
              <img src="../images/fretify.png" alt="" />
            </div>
          </div>



        </div>
        <footer>

        </footer>
      </SimpleBar>
    </>

  );
}
