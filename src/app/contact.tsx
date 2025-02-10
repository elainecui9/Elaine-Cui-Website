"use client"
import Image from "next/image"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ContactMe from "./Assets/ContactMe.png";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        (<section id="contact">
            <div className="relative h-screen w-full bg-beige text-darksage flex justify-center items-center flex-col">
                <Image
                    src={ContactMe}
                    alt="Front Image"
                    className="z-10"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center"
                    }} />
                <div className="absolute inset-0 m-16 bg-beige z-20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                    <h1 className='text-sage text-2xl mb-2'>Contact Me</h1>
                    <h1 className='font-bold text-4xl mb-4'>I'd Love To Connect With You...</h1>
                    <div className="flex mt-8 text-center grid grid-cols-3 gap-8 text-xl">
                        <div className='flex flex-col items-center'>
                            <h1 className='font-semibold'>Email Me</h1>
                            <MdOutlineMarkEmailRead size={50} className="my-2" />
                            <h1 className='text-lg'>elainecui@u.northwestern.edu</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-semibold'>Connect on LinkedIn</h1>
                            <CiLinkedin size={50} className="my-2" />
                            <Link href="https://www.linkedin.com/in/elaine-cui-/" target="_blank" rel="noopener noreferrer" className='resume-button text-lg border px-4 border-darksage'>See LinkedIn</Link>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-semibold'>View My GitHub</h1>
                            <FaGithub size={50} className="my-2" />
                            <Link href="https://github.com/elainecui9" target="_blank" rel="noopener noreferrer" className='resume-button text-lg border px-4 border-darksage'>See GitHub</Link>
                        </div>
                        {/* <div className='flex flex-col items-center'>
                            <h1 className='font-semibold'>Call or Message Me</h1>
                            <MdOutlinePermPhoneMsg size={50} className="my-2" />
                            <h1 className='text-lg'>763-607-9656</h1>
                        </div> */}
                    </div>
                </div>
                <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 bg-white rounded-full p-2 opacity-70 transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
                    <Link href="#header">
                        <FaArrowUp size={30} />
                    </Link>
                </div>
            </div>
        </section>)
    );
}

export default Contact;
