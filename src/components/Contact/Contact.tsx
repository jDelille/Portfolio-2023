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
 return <section className="contact" id="contact">
  <h1>Let's get in touch!</h1>
  <form action="submit">
   <div className="input">
    <label>Your Name</label>
    <input type="text" placeholder="Your Name" />
   </div>
   <div className="input">
    <label>Your Email</label>
    <input type="email" placeholder="Your Email" />
   </div>
   <div className="input">
    <label>Your Messaage</label>
    <textarea placeholder="Message..." />
   </div>
   <button type="submit">Send Message</button>

  </form>

 </section>;
}
