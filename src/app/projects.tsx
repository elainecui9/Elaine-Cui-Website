import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Scholarly from "./Assets/Scholarly.png"
import TheGarage from "./Assets/TheGarage.png"
import Converter from "./Assets/Converter.webp"
import WIND from "./Assets/WIND.png"

const Projects = () => {
  return (
    <div className="h-max bg-beige flex flex-col items-center">
      <div className='font-bold text-4xl m-4 text-center text-darksage py-8 mt-16 px-32 '>
        <h1>My Projects...</h1>
      </div>
      <div className='flex flex-wrap justify-center mb-32'>
        {projects.map((project, index) => (
          <div key={index} className='bg-white border-l-2 border-darksage m-8 p-4 rounded-md group relative transition-transform transform hover:-translate-y-2 hover:shadow-lg' style={{ width: '300px', height: '500px' }}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" >
                <div className='relative w-full h-1/2 mb-4'>
                  <Image src={project.image} alt={project.alt} layout='fill' objectFit='contain' className='group-hover:opacity-50' />
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-md'>
                  <div className='flex items-center justify-center h-full'>
                    <p className='text-white text-lg'>See Project</p>
                  </div>
                </div>
                <h3 className='font-bold text-lg text-darksage'>{project.title}</h3>
                <h4 className='italic text-sm'>{project.tech}</h4>
                <p className='mt-2'>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    image: Scholarly,
    url: "https://github.com/elainecui9/Scholarly---WildHacks-2024",
    alt: "Scholarly Project",
    title: "Scholarly | Northwestern WildHacks Winner – Best Use of AI in Education",
    tech: "Python, MongoDB, FastAPI, Claude-3, React, TypeScript, Tailwind",
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
    image: WIND,
    url: "",
    alt: "Wind Project",
    title: "OurConnection | DSGN 208 Design, Thinking, & Doing",
    tech: "Python, React",
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
