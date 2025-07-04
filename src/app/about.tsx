"use client";
import Image from "next/image";
import Lottie from 'react-lottie';
import animationData from './Assets/Paper.json';
import Minnesota from "./Assets/Minnesota.png";
import Illinois from "./Assets/Illinois.png";

function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        (<section>
            <div className="bg-beige h-fit text-darksage flex justify-center items-center flex-col relative">
                <div className="text-center p-8 pt-32">
                    <h1 className='font-bold text-2xl mb-4'>Let Me Introduce Myself...</h1>
                    <p className="text-lg" style={{ maxWidth: "1000px" }}>
                        Hi, my name is Elaine Cui. I currently study Computer Science and Mathematics at Northwestern University but am originally from Plymouth, Minnesota.
                        I am seeking a role in Software Engineering and am primarily interested in education, graphics, AI/ML, and systems. However, I am 
                        constantly willing to learn more. Outside of just coding, I love to dance, explore nature, and create artwork.
                        It's very nice to meet you, and I hope you enjoy my website!
                    </p>
                </div>
                <div className="flex items-center mt-8">
                    <Image
                        src={Minnesota}
                        alt="Minnesota Logo"
                        height={150}
                        width={150}
                        className="mx-2"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    <Lottie options={defaultOptions} height={300} width={300}/>
                    <Image
                        src={Illinois}
                        alt="Illinois Logo"
                        height={150}
                        width={150}
                        className="mx-2"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div className="pb-16">
                    <a href="/assets/ElaineCuiResume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                        My Resume
                    </a>
                </div>
            </div>
        </section>)
    );
}

export default About;
