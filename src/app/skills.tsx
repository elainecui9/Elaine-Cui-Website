"use client"
import FlipCard from "./flipcard"
import Java from "./Assets/Java.png"
import Python from "./Assets/Python.png"
import C from "./Assets/C.png"
import Cpp from "./Assets/C++.png"
import TypeScript from "./Assets/TypeScript.png"
import JavaScript from "./Assets/JavaScript.png"
import AWS from "./Assets/AWS.png"
import CSS from "./Assets/CSS.png"
import FastAPI from "./Assets/Fastapi.png"
import HTML from "./Assets/HTML.png"
import MongoDB from "./Assets/MongoDB.png"
import MySQL from "./Assets/MySQL.webp"
import Nextjs from "./Assets/Nextjs.jpg"
import React from "./Assets/React.png"
import Tailwind from "./Assets/Tailwind.png"
import Lottie from 'react-lottie';
import animationData from './Assets/Growingleaves.json';
import Vue from "./Assets/Vue.png"
import Micronaut from "./Assets/Micronaut.png"
import Maven from "./Assets/Maven.png"
import PostgreSQL from "./Assets/PostgreSQL.png"
import SpringBoot from "./Assets/SpringBoot.png"

function Skills() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section>
            <div className="h-max grid grid-cols-2">
                <div className="grid-span-1 bg-white text-darksage place-content-center py-48">
                    <h1 className='font-bold text-4xl mb-4 text-center '>My Skills...</h1>
                    <div className='flex'>
                        <Lottie options={defaultOptions} height={100} width={100}/>
                        <Lottie options={defaultOptions} height={100} width={100}/>
                    </div>
                </div>
                <div className="grid-span-2 bg-beige flex flex-wrap justify-center place-content-center py-48">
                    <FlipCard imageURL = {Java} text="Java"></FlipCard>
                    <FlipCard imageURL = {Python} text="Python"></FlipCard>
                    <FlipCard imageURL = {C} text="C"></FlipCard>
                    <FlipCard imageURL = {Cpp} text="C++"></FlipCard>
                    <FlipCard imageURL = {TypeScript} text="TypeScript"></FlipCard>
                    <FlipCard imageURL = {JavaScript} text="JavaScript"></FlipCard>
                    <FlipCard imageURL = {React} text="React"></FlipCard>
                    <FlipCard imageURL = {Vue} text="Vue.js"></FlipCard>
                    <FlipCard imageURL = {AWS} text="AWS"></FlipCard>
                    <FlipCard imageURL = {SpringBoot} text="Spring Boot"></FlipCard>
                    <FlipCard imageURL = {FastAPI} text="FastAPI"></FlipCard>
                    <FlipCard imageURL = {MongoDB} text="MongoDB"></FlipCard>
                    <FlipCard imageURL = {MySQL} text="MySQL"></FlipCard>
                    <FlipCard imageURL = {PostgreSQL} text="PostgreSQL"></FlipCard>
                    <FlipCard imageURL = {Nextjs} text="Next.js"></FlipCard>
                    <FlipCard imageURL = {Micronaut} text="Micronaut"></FlipCard>
                    <FlipCard imageURL = {Maven} text="Maven"></FlipCard>
                    <FlipCard imageURL = {Tailwind} text="Tailwind"></FlipCard>
                    <FlipCard imageURL = {CSS} text="CSS"></FlipCard>
                    <FlipCard imageURL = {HTML} text="HTML"></FlipCard>
                </div>
            </div>
        </section>
    );
}

export default Skills;
