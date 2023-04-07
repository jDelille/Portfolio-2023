import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '../components/Projects/projects.json';
import Loader from '../components/Loader/Loader';
import ArrowIcon from '../icons/ArrowIcon';
import Footer from '../components/Footer/Footer';
import ProjectDescription from '../components/ProjectDescription/ProjectDescription';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import ProjectHero from '../components/ProjectHero/ProjectHero';
import './Page.scss';
gsap.registerPlugin(ScrollTrigger);

type ProjectProps = {
 index: number;
};

export default function Project({ index }: ProjectProps) {
 const appRef = useRef<HTMLDivElement>(null);

 const project = projects[index];
 const { projectColor, nextProject, nextProjectLink } = project;

 return (
  <>
   <Loader backgroundColor={projectColor} />
   <div className='fretify' ref={appRef}>
    <nav className='nav'>
     <div className='nav-wrapper'>
      <Link to='/'>Back home </Link>
     </div>
    </nav>
    <ProjectHero index={index} app={appRef} />
    <ProjectDescription index={index} app={appRef} />
    <ProjectDetails index={index} app={appRef} />
    <a href={nextProjectLink} className='next-work-container'>
     <div className='wrapper'>
      <div className='text'>
       <p className='label'>Next Work</p>
       <p className='project-link'>{nextProject}</p>
      </div>
      <div className='arrow'>
       <ArrowIcon />
      </div>
     </div>
    </a>
    <Footer />
   </div>
  </>
 );
}
