"use client"
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from 'next/image';

function App(props) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div style={{
                width: '125px',
                height: '125px',
                background: 'white',
                fontSize: '24px',
                color: 'white',
                margin: '20px',
                border: '4px solid #9CAF88',  
                borderRadius: '4px',
                placeContent: 'center',
                textAlign: 'center',
                justifyContent: 'center', 
                padding: '20px'
            }}
            onMouseEnter={() => setFlip(true)}  
            >
                <Image 
                    src={props.imageURL} 
                    alt="Skill Logo" 
                    width={100} 
                    height={50} 
                    layout="responsive"  // Ensuring the image is responsive within the given width and height
                    objectFit="cover"    // Cover to ensure the image covers the designated area completely
                />            </div>
            <div style={{
                width: '125px',
                height: '125px',
                background: '#9CAF88',
                fontSize: '18px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                placeContent: 'center',
                textAlign: 'center',
                justifyContent: 'center', 
                padding: '20px'
            }}
            onMouseLeave={() => setFlip(false)}  // Flip back when mouse leaves
            >
                <h1>{props.text}</h1>

            </div>
        </ReactCardFlip>
    );
}

export default App;
