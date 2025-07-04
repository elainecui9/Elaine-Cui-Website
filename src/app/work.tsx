"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import MNIT from "./Assets/MNIT.png";
import Garage from "./Assets/TheGarage.png";
import Caraburo from "./Assets/Caraburo.png";
import LifeTime from "./Assets/LifeTime.jpg";
import PacSun from "./Assets/PacSun.png";
import Northwestern from "./Assets/Northwestern.png";
import Netflix from "./Assets/Netflix.png";

function Work() {
  const experiences = [
      {
      title: "Software Engineer Intern",
      company: "Netflix",
      duration: "June 2025 – September 2025",
      description: [
        "Spearheaded TV-specific Redux-Saga DevTool for visualizing and debugging background tasks, addressing gaps in developer tooling, and allowing 30+ engineers to boost productivity by +20% through observable tasks, side effects, and event triggers.",
        "Led end-to-end development by conducting engineer interviews and deploying with TypeScript, React, and Saga generator functions, becoming an essential tool of the TV Client Foundations and Discovery Viewing Experiences teams."
      ],
      picture: Netflix
    },
    {
      title: "Full Stack Software Engineer",
      company: "The Garage Northwestern",
      duration: "September 2023 – Present",
      description: [
        "Developed full stack web application using React, Python, AWS Lambda, AWS API Gateway, and AWS Relational Database Service to create a dynamic directory of 1,500+ alumni with keyword filtering through SQL queries.",
       "Conducted field study research on needs of participants through 50+ hours of surveys and primary research, focusing on facilitating and engaging 1,500+ startups, 1,000+ students, and alumni in Evanston, Chicago, and San Francisco."
      ],
      picture: Garage
    },
    {
      title: "Teaching Assistant & Student-Athletes Tutor",
      company: "Northwestern University",
      duration: "September 2024 – Present",
      description: [
        "Assisted 200+ students in Graphical Programming (CS 351) and C/C++ Programming (CS 211) by conducting 50+ office hours, collaborating with the professor to develop exam questions, and providing support in assignments, projects, and assessments.",
        "Tailored study plans for 10+ student-athletes through individualized tutoring sessions in Linear Algebra (MATH 240), Single Variable Calculus (MATH 218), Computer Programming (CIS 110), and Fundamentals of Programming (CS 111)."
      ],
      picture: Northwestern
    },
    {
      title: "Software Engineer Intern",
      company: "Minnesota Government IT Services | Health Department",
      duration: "June 2024 – September 2024",
      description: [
        "Automated immunization SMS messaging system with AWS Pinpoint, Python, and JSON for 200+ campaigns and 100,000+ Minnesotans to keep citizens up to date with recurring healthcare information and updates, condensing duplicate scripts by 35%.",
        "Constructed web application utilizing Vue.js, Spring Boot, Maven, Hibernate, Micronaut, and PostgreSQL to collect language preferences for 10,000+ non-literate refugees to customize AWS Pinpoint for the Refugee Division’s texting campaigns."
      ],
      picture: MNIT
    },
    
    {
      title: "Software Engineer Intern",
      company: "Caraburo IT",
      duration: "May 2023 – September 2023",
      description: [
        "Facilitated creation of full-stack web application using React, Python, Google Maps and Places API, and MySQL to search for affordable daycare centers in 20+ states through interactive maps displays, location tracking, and quick view features.",
        "Created messaging system between 100+ parents and daycare centers with WebSocket to allow for image sharing and texting."
      ],
      picture: Caraburo
    },
    {
      title: "Kids Academy Team Member",
      company: "LifeTime Fitness",
      duration: "May 2022 – December 2022",
      description: ["Taught 100+ classes on gymnastics, dance, gym games, and art for the Kids Academy."],
      picture: LifeTime
    },
    {
      title: "Sales Associate",
      company: "PacSun",
      duration: "May 2021 – December 2021",
      description: ["Folded clothes."],
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
    (<section>
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
              <div className={`order-1 w-5/12 "text-left" p-8 rounded-md border-l-2 border-darksage bg-white transition-opacity duration-1000 transition-transform transform hover:-translate-y-2 hover:shadow-lg`}>
                <h3 className="font-bold text-xl">{experience.title}</h3>
                <h4 className="italic text-md">{experience.company}</h4>
                <p className="text-sm">{experience.duration}</p>
                  <ul className="text-sm mt-2 list-disc list-inside">
                    {experience.description.map((point: string, i: number) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              <div className="order-1 w-5/12"></div>
              {experience.picture && (
                <div className="w-24 h-24 absolute transform -translate-y-1/2 left-1/2 -ml-12 overflow-hidden rounded-full border-4 border-darksage flex items-center justify-center bg-white">
                  <Image
                    src={experience.picture}
                    alt="Company Logo"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover"
                    }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

export default Work;
