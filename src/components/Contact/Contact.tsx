import React, { RefObject, useEffect } from "react";
import './Contact.scss';

type ContactProps = {
 sectionRef: RefObject<HTMLElement>;
}

export default function Contact({ sectionRef }: ContactProps) {
 useEffect(() => {
  const sectionElement = sectionRef.current;
  // Use sectionElement for calculations or manipulations
 }, [sectionRef]);
 return <section className="contact" id="contact">Contact</section>;
}
