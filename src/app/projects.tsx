import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Scholarly from "./Assets/Scholarly.png"
import TheGarage from "./Assets/TheGarage.png"
import Converter from "./Assets/Converter.webp"
import DotByDot from "./Assets/DotByDot.png"
import WIND from "./Assets/WIND.png"
import CareLink from "./Assets/CareLink.png"
import C from "./Assets/C.png"

const Projects = () => {
  return (
    (<div className="h-max bg-beige flex flex-col items-center">
      <div className='font-bold text-4xl m-4 text-center text-darksage py-8 mt-16 px-32 '>
        <h1>My Projects...</h1>
      </div>
      <div className='flex flex-wrap justify-center mb-32'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white border-l-2 border-darksage m-8 p-4 rounded-md group relative transition-transform transform hover:-translate-y-2 hover:shadow-lg'
            style={{ width: '300px', height: '500px' }}
          >
            <div className='relative w-full h-1/2 mb-4'>
              <Image
                src={project.image}
                alt={project.alt}
                className='group-hover:opacity-50'
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain"
                }}
              />
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-md flex items-center justify-center'
                  style={{ textDecoration: "none" }}
                >
                  <p className='text-white text-lg'>See Project</p>
                </a>
              )}
            </div>
            <h3 className='font-bold text-lg text-darksage'>{project.title}</h3>
            <h4 className='italic text-sm'>{project.tech}</h4>
            <p className='mt-2'>{project.description}</p>
          </div>
        ))}
      </div>
    </div>)
  );
};

const projects = [
      {
    image: CareLink,
    url: "https://github.com/elainecui9/CareLink",
    alt: "CareLink Project",
    title: "CareLink",
    tech: "Python, React, Next.js, TypeScript, AWS, Tailwind",
    description: "Application to connect uninsured and underinsured individuals with local free clinics."
  },
    {
    image: DotByDot,
    url: "https://github.com/heochristopher/Wildhacks-2025",
    alt: "DotByDot Project",
    title: "DotByDot",
    tech: "Python, Gemini AI, React, Next.js, DynamoDB, TypeScript, FastAPI, Tailwind, Custom Hardware",
    description: "AI braille learning platform with custom LCD keyboard prototype and multiple language support."
  },
  {
    image: Scholarly,
    url: "https://github.com/elainecui9/Scholarly---WildHacks-2024",
    alt: "Scholarly Project",
    title: "Scholarly | Northwestern WildHacks Winner – Best Use of AI in Education",
    tech: "Python, MongoDB, FastAPI, Claude-3, React, TypeScript, Tailwind, Next.js",
    description: "AI educational platform to simplify 10,000,000+ research and academia articles."
  },
  {
    image: TheGarage,
    url: "https://www.thegarage.directory/",
    alt: "TheGarage Project",
    title: "The Garage Launchpad",
    tech: "Python, React, AWS, Next.js, TypeScript, Tailwind",
    description: "Alumni directory of 1,500+ alumni and startup students."
  },
  {
    image: C,
    alt: "Database System",
    title: "Database System",
    tech: "C",
    description: "Disk-backed buffer pool, B+ tree index, and SQL query executor for mini relational database system, with support for multi-threaded access, LRU-K eviction, and Volcano-style query plans"
  },
  {
    image: WIND,
    url: "https://github.com/elainecui9/OurConnection",
    alt: "Wind Project",
    title: "OurConnection | DSGN 208 Design, Thinking, & Doing",
    tech: "Python, React, MongoDB, JavaScript, Next.js, Tailwind",
    description: "Platform for incarcerated women to share their stories and spread awareness, prototyped with Women Initiating New Directions."
  },
  {
    image: Converter,
    url: "https://github.com/elainecui9/YoutubetoMP3",
    alt: "Converter Project",
    title: "YouTube to MP3 Converter",
    tech: "Python, React, JavaScript, CSS, HTML",
    description: "Website to convert YouTube videos to MP3 files to be used by media club for video editing."
  }
];

export default Projects;
