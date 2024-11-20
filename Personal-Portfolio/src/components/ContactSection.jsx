import React from 'react';
import { jobData } from '../data/jobDetails';
import JobCard from './JobCard';
import ExperienceCard from './ExperienceCard';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-36 ">
      <h2 className="section__header text-center select-none">CONTACT ME</h2>
      <div className="flex grow flex-col gap-24 my-12   ">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
