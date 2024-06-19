"use client"
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


const navigation = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <div id="header" className="relative bg-darksage fadeIn">
      <nav className="justify-center flex items-center p-6 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-24">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="block text-md leading-6 text-beige transition duration-300 group"
            >
              {item.name}
              <span className="block h-0.5 bg-beige transition-all duration-500 group-hover:max-w-full max-w-0"></span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="absolute top-4 right-4 flex gap-2">
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
  );
}

export default Header;
