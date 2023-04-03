import './Projects.scss';
import { projects } from './projects.json';
import { useEffect, useState } from 'react';
import DownloadsIcon from '../../icons/DownloadsIcon';

export default function Projects() {

 const [packageData, setPackageData] = useState<{ downloads?: number } | null>(null);


 useEffect(() => {
  fetch('https://api.npmjs.org/downloads/point/last-week/jd-react-select')
   .then(response => response.json())
   .then(data => setPackageData(data))
   .catch(error => console.error(error));
 }, [])

 const [hoveredProject, setHoveredProject] = useState<number | null>(null);
 const [isAnyProjectHovered, setIsAnyProjectHovered] = useState(false);

 const handleProjectHover = (index: number) => {
  setHoveredProject(index);
  setIsAnyProjectHovered(true);
 };

 const handleProjectLeave = () => {
  setHoveredProject(null);
  setIsAnyProjectHovered(false);
 };


 return (
  <section className='projects'>
   {isAnyProjectHovered && (
    <div className="overlay"></div>
   )}
   {projects.map((project, i) => (
    <div className={`project ${hoveredProject === i ? 'hovered' : ''}`} onMouseEnter={() => handleProjectHover(i)} onMouseLeave={handleProjectLeave}>
     {isAnyProjectHovered && hoveredProject !== i && (
      <div className="overlay"></div>
     )}
     <div className="project-content" >
      <p className='project-build'>{project.build}</p>
      <h1 className='project-name'>{project.name}</h1>
      <p className='project-description'>{project.desc}</p>
      <div className="project-links">
       {project.npm && (
        <div className='package-downloads'>
         <span>Package Downloads: </span>
         <p>{packageData && packageData.downloads}</p>
        </div>
       )}
       <a href={project.site}>View Site</a>
       <a href={project.repo}>Source Code</a>
      </div>
     </div>
    </div>
   ))}
  </section>
 )
}
