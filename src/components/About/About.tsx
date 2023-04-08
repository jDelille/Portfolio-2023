
import { RefObject, useEffect } from 'react';
import './About.scss';

type AboutProps = {
 sectionRef: RefObject<HTMLElement>;
}
export default function About({ sectionRef }: AboutProps) {
 useEffect(() => {
  const sectionElement = sectionRef.current;
  // Use sectionElement for calculations or manipulations
 }, [sectionRef]);
 return <section className='about' id="about">
  <h1>About Me</h1>
  <div className="about-me">
   <p>Hey, I'm Justin. I love coding, creating websites, and learning new technolgies to make myself a better, more efficient developer. My passion for web development started in college at Arizona State University where I studied computer science. I decided to take my skills to the next level by enrolling in a Full Stack Web Development bootcamp called DevMountain. I then worked with an amazing company called 808 Partners where my skills and passion as a developer sky rocketed.</p>
   <p>Right now, my go to technologies to work with are <span>React, Next.js, TypeScript, JavaScript, SCSS, and Firebase.</span> I recently grew to love TypeScript and have been coding with that religiously. To test my TypeScript skills in React, I decided to create a reusable component that I published as an NPM which currently has over 700 downloads. </p>
  </div>
  <div className="skills-container">
   <h1>Skills</h1>
   <div className="skills">

    <p>React</p>
    <p>TypeScript</p>
    <p>Next.js</p>
    <p>SCSS</p>
    <p>NoSQL</p>
    <p>Redux</p>
    <p>MobX</p>
   </div>
  </div>

  <div className="experience-container">
   <h1>Experience</h1>
   <div className="experience">
    <h3>808 Partners - <span>Front-End Developer</span></h3>
    <p>At 808 Partners I worked on a small team creating a social platform built for financial communities called Muunifi. The technology used to develop the site was Next.js, React, TypeScript, MobX, and Firebase. My experience here greatly helped me learn how to write better code and learn how to work well with other developers, project managers, and designers.  </p>
   </div>
   <div className="experience">
    <h3>Dev Mountain - <span>Full Stack Developer</span></h3>
    <p>At Dev Mountain, I learned the industries best practices for working on the front-end and the back-end. The technologies used were mainly React, Javascript, and NoSQL Databases, but I also worked with Python and SQL Databases. Besides learning to write better code, I also learned how to pair-program with other developers and how to mentor other developers. </p>
   </div>
  </div>



  {/* <div className="skills-container">
 
  </div> */}

  {/* <div className="experience-container">
   <div className="experience-one">
    <h3>808 Partners</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus, quam consequatur illo necessitatibus minus quaerat. Quis tenetur voluptate beatae, repellendus dolorem ipsam est saepe tempore eaque veritatis facilis repudiandae!</p>
    <div className="tech">
     <span>Technologies Used: </span>
     <br />
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat error minima veniam accusantium tempora deleniti, non, vel ratione cupiditate, enim magni aliquam voluptate eligendi facilis delectus. Atque corporis at nemo!
    </div>
   </div>
   <div className="experience-two">
    <h3>DevMountain</h3>
    <span>Technologies Used: </span>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus, quam consequatur illo necessitatibus minus quaerat. Quis tenetur voluptate beatae, repellendus dolorem ipsam est saepe tempore eaque veritatis facilis repudiandae!</p>
   </div>
  </div> */}
 </section>;
}

// My go to technologies to work with are React, Next.js, TypeScript, JavaScript, SCSS, and Firebase. 