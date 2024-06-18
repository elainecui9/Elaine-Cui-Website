"use client"
import Image from 'next/image';
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Footer from "./footer"
import {BrowserRouter, Link} from "react-router-dom";
import FrontPage from "./Assets/FrontPage.jpg";
import { IoMdArrowDown } from "react-icons/io";
import { LinkIcon } from '@heroicons/react/20/solid';


export default function Home() {
  return (
    <BrowserRouter>
      <div className="flex flex-col font-serif min-h-screen">
        <Header></Header>
        <div className="relative h-screen w-full">
          <div className="absolute inset-0 flex flex-col items-center z-20 mt-48"> 
            <h1 className="text-4xl text-darksage mb-4 fadeIn">Welcome to my world...</h1>
            <h2 className="text-6xl mb-4 text-darksage fadeIn">Elaine Cui</h2>
            <Link to="#about" className='relative bg-sage bg-opacity-50 rounded-full fadeIn z-40 mt-4'>
              <IoMdArrowDown className="text-beige text-4xl" />
            </Link> 
          </div>
          <Image
            src={FrontPage}
            alt="Front Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          
        </div>
        <About></About>
        <Skills></Skills>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  )
}