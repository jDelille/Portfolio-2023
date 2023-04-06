import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import './Page.scss';

export default function Fretify() {
 return (
  <>
   <Loader backgroundColor='#3D5AF1' />
   <div className='fretify'>
    <nav className='nav'>
     <div className="nav-wrapper">
      <Link to='/'>Back home </Link>
     </div>

    </nav>
    <div className="hero">
     <div className="hero-content">

      <div className="text">
       <h1>Fretify</h1>
       <p>Interactive Guitar Fretboard App</p>
      </div>

      <div className="image">
       <img src="../images/fretify-laptop.png" alt="" className='laptop' />
      </div>

      <div className="project-info">
       <div className="info-wrapper">
        <p><span style={{ color: '#3D5AF1' }}>Role</span>Front-End Developer</p>
        <p><span style={{ color: '#3D5AF1' }}>Context</span>Personal Project</p>
        <p><span style={{ color: '#3D5AF1' }}>Period</span>2023</p>
       </div>
      </div>

     </div>
    </div>
    <div className="project-description" style={{ background: '#3D5AF1' }}>
     <div className="description-wrapper">
      <h2 className='background-text'>FRETIFY</h2>
      <h1>Introduction</h1>
      <p>Lato aims to be a modern, solid and easy-to-use web-based software to manage content. With its intuitive dashboard and hand-crafted UI, Lato helps every customer to easily manage every kind of content he/she needs.</p>
      <button>Vist Website</button>
     </div>

    </div>
    <div className="project-details">
     <div className="detail-wrapper">
      <div className="text">
       <div className="purpose">
        <h2>Purpose</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque.</p>
       </div>
       <div className="build">
        <h2>Build</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam non quidem doloribus autem voluptatem maxime dolor facilis voluptate, impedit saepe laudantium accusamus in dolorum cum assumenda molestiae deserunt eaque.</p>
       </div>
      </div>
      <div className="site-images">
       <img src="../images/fretify.png" alt="" />


      </div>
     </div>



    </div>
    <footer>

    </footer>
   </div>
  </>

 );
}
