"use client"
import Image from "next/image";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Footer from "./footer";
import FrontPage from "./Assets/FrontPage.jpg";
import { IoMdArrowDown } from "react-icons/io";
import Projects from "./projects";
import Work from "./work";
import Contact from "./contact";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (<>
    <div className="flex flex-col font-serif min-h-screen">
      <Header></Header>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 flex flex-col items-center z-20 mt-48"> 
          <h1 className="text-4xl text-darksage mb-4 fadeIn">Welcome to my world...</h1>
          <h2 className="text-6xl mb-4 text-darksage fadeIn">Elaine Cui</h2>
          <Link href="#about" className='relative bg-sage bg-opacity-50 rounded-full fadeIn z-40 mt-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
            <IoMdArrowDown className="text-beige text-4xl" />
          </Link> 
        </div>
        <Image
          src={FrontPage}
          alt="Front Image"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }} />
      </div>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer></Footer>
    </div>
  </>);
}
