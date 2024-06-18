"use client"
import Image from 'next/image'

function Skills() {


    return (
        <section>
            <div className="bg-beige h-screen text-darksage flex flex-col">
                <div className="text-center">
                    <h1 className='font-bold text-4xl mb-4'>My Skills</h1>
                    <p className="text-lg" style={{ maxWidth: "1000px" }}>
                        Hi, my name is Elaine Cui, and I currently study Computer Science at Northwestern University.
                        I am seeking a role in Software Engineering and am primarily interested in graphics, AI/ML, and web development. However, I am 
                        constantly willing to learn more. Outside of just coding, I love to dance, explore nature, and creating artwork.
                        Nice to meet you, and I hope you enjoy my website!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
