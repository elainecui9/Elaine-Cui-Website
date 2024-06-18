"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darksage text-white border-0">
      <section className="flex flex-row flex-wrap justify-evenly py-12 place-content-center">
        <div className="flex flex-col gap-y-4 justify-center mx-12 mb-8 border-0">
          <Link
            target="_blank"
            href="https://www.northwestern.edu/"
            className="mt-[-20px]"
          >
          </Link>
          <div className="text-sm text-white">
            <h1>© 2023-2024 The Garage at Northwestern</h1>
            <h2 className="text-sm">Developed by Elaine Cui and Jason Lu</h2>
          </div>
        </div>

        <div className="flex flex-col mx-12 mb-8 pt-8">
          <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
          <Link href="tel:(847)467-7155">
            <h2 className="text-lg hover:underline transition-all duration-150 ease-in-out cursor-pointer">
              (847) 467-7155
            </h2>
          </Link>
          <Link href="mailto:thegarage@northwestern.edu">
            <h2 className="text-lg hover:underline transition-all duration-150 ease-in-out cursor-pointer">
              thegarage@northwestern.edu
            </h2>
          </Link>
          <Link target="_blank" href="https://www.thegarage.northwestern.edu/">
            <h2 className="text-lg hover:underline transition-all duration-150 ease-in-out cursor-pointer">
              Our Press Kit
            </h2>
          </Link>
        </div>
        <div className="flex flex-col mx-12 mb-8 pt-8">
          <h1 className="font-bold text-2xl mb-4">Our Spaces</h1>
          <h2 className="text-lg font-semibold">The Garage Evanston</h2>
          <h2 className="text-sm">2311 Campus Drive Suite 2300</h2>
          <h2 className="text-sm">Evanston, IL 60208</h2>
          <h2 className="text-lg pt-4 font-semibold">
            The Garage San Francisco
          </h2>
          <h2 className="text-sm">44 Montgomery St </h2>
          <h2 className="text-sm">San Francisco, CA 94104</h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
