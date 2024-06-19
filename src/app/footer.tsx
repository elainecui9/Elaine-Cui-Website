"use client"
import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darksage text-white border-0 relative">
      <section className="flex flex-row flex-wrap justify-evenly py-12 place-content-center">
        <div className="flex flex-col gap-y-4 justify-center mx-12 mb-8 border-0">
          <div className="text-sm text-white text-center">
            <h1>© 2024 Developed by Elaine Cui</h1>
            <h2 className="text-sm">Using React, TypeScript, Nextjs, and Tailwind.</h2>
            <h2 className="text-sm">Designed in Figma.</h2>
            <div className="flex gap-2 justify-center mt-4">
              <Link href="https://www.linkedin.com/in/elaine-cui-/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin size={30} className="text-white" />
              </Link>
              <Link href="mailto:elainecui@northwestern.edu" target="_blank" rel="noopener noreferrer">
                <MdOutlineMarkEmailRead size={30} className="text-white" />
              </Link>
              <Link href="https://github.com/elainecui9" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        
      </section>
      
    </footer>
  );
};

export default Footer;
