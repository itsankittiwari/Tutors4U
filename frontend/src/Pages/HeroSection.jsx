import React, { useEffect } from 'react'
import img1 from '../assets/Student.gif';
import { GoArrowRight } from "react-icons/go";
import Crousal from '../Component/Crousal';
import Card from '../Component/Card';
import Navbar from './Navbar';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom'


// aos
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    return (
        <>
            <div className='bg-light-pink '>
                <Navbar />
                <div className="flex justify-center mt-10 ml-auto mr-24 mb-20 pb-8">


                    <div className="ml-9 mt-[150px]">
                        <p className="text-4xl font-bold leading-tight mb-4 font-mono">Unlock your potential <br /> with the best <br /> language tutors.
                        </p>
                        <div className="flex-grow mt-3 flex justify-center">
                            <button className="bg-black rounded-md p-3 flex items-center justify-center w-full">
                                <span className='text-white text-xl'>Get started</span>
                                <span className="ml-2 text-white text-xl"><GoArrowRight /></span>
                            </button>
                        </div>
                    </div>
                    <img src={img1} alt="Your Image" style={{ width: '35%' }} className="h-auto ml-20 rounded-md" />

                </div>
            </div>
            <div className='bg-white'>
                <div className='pt-10' data-aos="fade-up">
                    <h1 className='text-7xl font-bold flex items-center justify-center '>Find the right tutor for you.</h1>
                    <p className='flex items-center justify-center mt-10 pb-3 text-lg'>With over 30,000 tutors and 1M+ learners, we know language learning.</p>
                </div>
                <Crousal />
            </div>

            <div className='bg-white'>
                <div className='ml-32 font-mono font-bold text-6xl transform-gpu-20s' data-aos="fade-up">
                    <h1>How Tutors4U Work:</h1>
                </div>
                <div className='flex flex-row m-32 gap-4 mt-8' data-aos="fade-right">
                    <Card />
                </div>

            </div>

            <div className='bg-light-pink'>
                <div className='justify-center text-center p-20' data-aos="fade-up">
                    <p className='text-7xl mb-5 font-bold'>Lessons you’ll love. Guaranteed.</p>
                    <p className='text-lg '>Try another tutor for free if you’re not satisfied.</p>
                </div>
            </div>

            <div className="w-10/12 min-h-[520px] bg-white flex justify-center mx-28 rounded-md relative mt-16 mb-11 border">
                {/* <!--right section--> */}
                <img src={img1} alt="Hero-Banner" className="w-full max-w-[650px]" />
                {/* <!--left section--> */}

                <div className="space-y-8 ml-5 mr-5">
                    <h1 className="font-mullish font-bold text-8xl leading-[1.2]">Become a tutor</h1>
                    <div className="h-1 w-11 bg-black"></div>
                    <p className="text-[18px] leading-5"> Earn money sharing your expert knowledge with students. Sign up for start tutoring online with Tutors4U.</p>

                    <ul className='list-disc ml-5 text-xl font-semibold'>
                        <li>Find new students</li>
                        <li>Grow your business</li>
                        <li>Get paid securely</li>
                    </ul>

                    <div className="flex-grow mt-3 flex justify-center">
                        <button className="bg-black rounded-md p-3 w-full mb-6">
                           <Link className='flex items-center justify-center' to='/become_a_teacher'>
                           <span className=' text-white text-xl'>Become a Teacher</span>
                            <span className="ml-2  text-white text-xl"><GoArrowRight/></span> 
                           </Link>
                            
                        </button>
                    </div>

                </div>

            </div>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default HeroSection