import React from 'react'

import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt';
import profilePic from '../../assets/profilePic.jpeg';

const About = () => {
    return (
        <section id='about' className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md-mt-24 lg-mt-32'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    {/* greeting */}
                    <h1 className='text-3xl md:text-6xl sm:text-5xl font-bold text-white mb-2 leading-tight'>
                        Hi,I am
                    </h1>
                    {/* name */}
                    <h2 className='text-4xl  md:text-6xl sm:text-5xl font-bold text-white mb-4 leading-tight'>
                        Utkarsh Singh
                    </h2>
                    {/* SKills heading with typing effect */}
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>
                            I am a
                        </span>
                        <span className="text-[#8245ec]">
                            <Typewriter
                                words={[' Full Stack Developer', ' Coder', ' Web Developer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>
                    {/* about me paragraph */}
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                        I'm a MERN Stack Developer who enjoys building clean, fast, and interactive web applications. I focus on turning ideas into real products with attention to both functionality and UI/UX.

                        I primarily work with React, Node.js, Express, and MongoDB, and enjoy creating responsive interfaces, REST APIs, authentication systems, and dashboards.

                        Currently, I'm exploring mobile app development with React Native and continuously improving my problem-solving skills by building real-world projects.
                    </p>
                    {/* resume button */}
                    <a href="https://drive.google.com/file/d/1r8F77HgwigpECE-UEYHBa5-JQVYmQ_HZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                        className='inline-block text-white py-3 px-8 rounded-full mt-3 text-lg font-bold transition duration-300 hover:scale-105'
                        style={{
                            background:"linear-gradient(90deg, #8245ec, #a855f7)",
                            boxShadow:"0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec"
                        }}> Download Resume
                    </a>
                </div>
                {/* right side - profile image */}
                <div className='md:w-1/2 flex justify-center md:justify-end lg:mr-[-150px] '>
                    <Tilt className='w-48 h-48 sm:w-64 md:h-120 md:w-120 border-4 border-purple-700 rounded-full'
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        transitionSpeed={1000}
                        scale={1.05}
                        gyroscope={true}
                    >
                        <img src={profilePic} alt="Utkarsh" className='w-full h-full  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default About
