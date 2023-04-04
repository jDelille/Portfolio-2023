
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
 return <section className='about' id="about">About</section>;
}
