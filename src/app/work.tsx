"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/legacy/image";
import MNIT from "./Assets/MNIT.png";
import Garage from "./Assets/TheGarage.png";
import Caraburo from "./Assets/Caraburo.png";
import LifeTime from "./Assets/LifeTime.jpg";
import PacSun from "./Assets/PacSun.png";
import Northwestern from "./Assets/Northwestern.png";

function Work() {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "The Garage Northwestern",
      duration: "September 2023 – Present",
      description: "Structured landing page and dynamic hub/website leveraging React, Tailwind, and AWS for centralizing entrepreneurship workshops, alumni databases, and idea creation for 1,500+ startups and 1,000+ students at Northwestern and San Francisco.",
      picture: Garage
    },
    {
      title: "Teaching Assistant & Student-Athletes Tutor",
      company: "Northwestern University",
      duration: "September 2024 – Present",
      description: "Assisted 50+ students in Introduction to Graphical Programming (CS 351) by conducting 20+ office hours, collaborating with the professor to develop exam questions, and providing support through assignment, project, and exam assessments. Tailored study plans for 10+ student-athletes through individualized tutoring sessions in Linear Algebra (MATH 240), Single Variable Calculus (MATH 218), Computer Programming (CIS 110), and Fundamentals of Programming (CS 111)",
      picture: Northwestern
    },
    {
      title: "Software Engineer Intern",
      company: "Minnesota Government IT Services | Health Department",
      duration: "June 2024 – September 2024",
      description: "Automated immunization SMS messaging system with AWS Pinpoint, Python, and JSON for 200+ campaigns and 100,000+ Minnesotans to keep citizens up to date with recurring healthcare information and updates. Constructed web application utilizing Vue.js, JPA, Spring Boot, Maven, Micronaut, and PostgreSQL to collect language preferences for 10,000+ pre-literate adults to customize AWS Pinpoint for the Infectious Disease Division’s texting campaigns.",
      picture: MNIT
    },
    
    {
      title: "Software Engineer Intern",
      company: "Caraburo IT Consulting",
      duration: "May 2023 – September 2023",
      description: "Facilitated creation of full-stack web application using React and Python to search for affordable daycare centers in 20+ states by developing API requests to retrieve data from backend MySQL databases, utilizing Google Maps and Places API. Created messaging system between 100+ parents and daycare centers with WebSocket to allow for texting and image sharing.",
      picture: Caraburo
    },
    {
      title: "Kids Academy Team Member",
      company: "LifeTime Fitness",
      duration: "May 2022 – December 2022",
      description: "Taught 100+ classes on gymnastics, dance, gym games, and art for the Kids Academy.",
      picture: LifeTime
    },
    {
      title: "Sales Associate",
      company: "PacSun",
      duration: "May 2021 – December 2021",
      description: "Classic high school job.",
      picture: PacSun
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerRef.current?.unobserve(entry.target); // Unobserve the element after it has faded in
        }
      });
    });

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section>
      <div className="bg-beige h-max text-darksage flex justify-center items-center flex-col py-16">
        <div className="text-center">
          <div className='font-bold text-4xl m-4 text-center text-darksage py-8 mt-16 bg-white px-32 rounded-md border-dotted border-2 border-darksage mb-16'>
            <h1>My Work Experience...</h1>
          </div>
        </div>

        <div className="relative w-full max-w-6xl px-6">
          <div className="border-l-2 border-darksage absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`mb-8 flex justify-between items-center w-full fade-element ${index % 2 === 0 ? "flex-row-reverse fade-from-right" : "flex-row fade-from-left"}`}
            >
              <div className={`order-1 w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"} p-8 rounded-md border-l-2 border-darksage bg-white transition-opacity duration-1000 transition-transform transform hover:-translate-y-2 hover:shadow-lg`}>
                <h3 className="font-bold text-xl">{experience.title}</h3>
                <h4 className="italic text-md">{experience.company}</h4>
                <p className="text-sm">{experience.duration}</p>
                <p className="text-sm mt-2">{experience.description}</p>
              </div>
              <div className="order-1 w-5/12"></div>
              {experience.picture && (
                <div className="w-24 h-24 absolute transform -translate-y-1/2 left-1/2 -ml-12 overflow-hidden rounded-full border-4 border-darksage flex items-center justify-center bg-white">
                  <Image src={experience.picture} alt="Company Logo" layout="fill" objectFit="cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
