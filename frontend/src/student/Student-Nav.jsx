import React, { useEffect } from 'react'
import img1 from '../assets/Student.gif';
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Pages/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import StudentCard from "../Component/StudentCard";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
function StudentNav() {
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    return (
        <>
           <div className=' '>
                <Navbar />
                <div className="flex justify-center mt-10 ml-auto mr-24 mb-20 pb-8">


                    <div className="ml-9 mt-[150px]">
                        <p className="text-4xl font-bold leading-tight mb-4 font-mono">Here you started <br /> your carrer with <br /> your best tutors....
                        </p>
                        <div className="flex-grow mt-3 flex justify-center">
                            <Link className="bg-black rounded-md p-3 flex items-center justify-center w-full" to='/find_tutors'>
                                <span className='text-white text-xl'>Get started</span>
                                <span className="ml-2 text-white text-xl"><GoArrowRight /></span>
                            </Link>
                        </div>
                    </div>
                    <img src={img1} alt="Your Image" style={{ width: '35%' }} className="h-auto ml-20 rounded-md" />

                </div>
            </div>
            <div className='bg-light-pink mb-4'>
                <div className='pt-10' data-aos="fade-up">
                    <h1 className='text-7xl font-bold flex items-center  text-center justify-center '>Tutors4U happy to connect with you and welcome to our family</h1>
                    <p className='flex items-center justify-center mt-10 pb-8 text-2xl'>There are some students that can happy to share their experience in front of you </p>
                </div>
               
            </div>
            <div className='bg-white mt-10 mb-10'>
                <div className='font-mono font-bold text-4xl' data-aos="fade-up">
                    <h1 className="text-center">what students say about us :</h1>
                </div>
                <div className='flex flex-row ml-4 mr-4 mt-8'>
                   <StudentCard/>
                </div>

            </div>
            
            <Footer/>

        </>
    )
}

export default StudentNav