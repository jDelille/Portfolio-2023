import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { animate } from '../Animations/Animations';
import { projects } from '../Projects/projects.json';
import './ProjectHero.scss';


type ProjectHeroProps = {
 index: number;
 app: React.RefObject<HTMLElement>
};

export default function ProjectHero({ index, app }: ProjectHeroProps) {

 const project = projects[index];
 const {
  projectName,
  projectBio,
  projectImageSmall,
  projectColor,
  projectRole,
  projectContext,
  projectPeriod,
 } = project;

 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   animate(app);
  }, app);
  return () => ctx.revert();
 }, []);


 return (
  <div className='hero'>
   <div className='hero-content'>
    <div className='text'>
     <h1 className='project-name npm-title'>{projectName}</h1>
     <p className='project-brief'>{projectBio}</p>
    </div>

    <div className='image'>
     <img src={projectImageSmall} alt='' className='laptop' />
    </div>

    <div className='project-info'>
     <div className='info-wrapper'>
      <p className='info-one'>
       <span style={{ color: projectColor }}>Role</span>
       {projectRole}
      </p>
      <p className='info-two'>
       <span style={{ color: projectColor }}>{projectContext}</span>
       Professional
      </p>
      <p className='info-three'>
       <span style={{ color: projectColor }}>Period</span>
       {projectPeriod}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
