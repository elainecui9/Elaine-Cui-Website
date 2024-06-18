"use client"
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { HashLink as Link } from "react-router-hash-link";

const navigation = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]


function Header() {
return (
    <div className="bg-darksage">
    <nav className="justify-center flex items-center p-6 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-24">
        {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="block text-md leading-6 text-beige transition duration-300 group">
            {item.name}
            <span className="block h-0.5 bg-beige transition-all duration-500 group-hover:max-w-full max-w-0"></span>
            </Link>
        ))}
        </div>
    </nav>
    </div>    
);
}

export default Header;