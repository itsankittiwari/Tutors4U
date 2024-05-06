import React from 'react'
import img1 from '../assets/Student.gif';
import img2 from '../assets/hero.webp';
import { GoArrowRight } from "react-icons/go";
import Navbar from './Navbar';
import Footer from '../Component/Footer';

function StudentSection() {
    return (
        <>
            <div className='bg-white'>
                <Navbar />
                <div className="flex justify-center mt-10 ml-auto mr-24 mb-20 pb-8">

                    <form action='#'>
                        <div className="ml-9 mt-[90px]">
                            <p className="text-5xl font-bold leading-tight font-mono">Teach Online
                            </p>
                            <small className='text-lg ml-1'>Earn money on your schedule</small>
                            <label htmlFor="Email" className="ml-2 block text-sm text-gray-900 mt-4">
                                Email
                            </label>
                            <input className='w-full border p-3 rounded-md' type='email' placeholder='Email'></input>
                            <br />
                            <label htmlFor="Password" className="ml-2 block text-sm text-gray-900 mt-4">
                                Password
                            </label>
                            <input className='w-full border p-3 rounded-md' placeholder='Password' type='password'></input>
                            <br />
                            <div className="flex-grow mt-3 flex justify-center">
                                <button className="bg-black rounded-md p-3 flex items-center justify-center w-full">
                                    <span className='text-white text-xl'>Sign up with email</span>
                                    {/* <span className="ml-2 text-white text-xl"><GoArrowRight /></span> */}
                                </button>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <button className="bg-black rounded-md p-3 flex items-center justify-center w-full">
                                <span className='text-white text-xl'>Registration For New User</span>
                                {/* <span className="ml-2 text-white text-xl"><GoArrowRight /></span> */}
                            </button>
                        </div>
                    </form>
                    <img src={img2} alt="Your Image" style={{ width: '35%' }} className="h-auto ml-52 rounded-md" />

                </div>
            </div>

            <div className='text-black h-55'>
                <div className='grid grid-cols-3 ms-9 my-24 gap-8'>
                    <div>
                        <h3><b>Set Your Own Rate</b></h3>
                        <p>Choose your hourly rate and change it anytime. On average, English tutors charge $15-25 per hour.</p>
                    </div>

                    <div>
                        <h3><b>Teach anytime, anywhere</b></h3>
                        <p>Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule. Be your own boss!</p>
                    </div>

                    <div>
                        <h3><b>Grow professionally</b></h3>
                        <p>Attend professional development webinars and get tips to upgrade your skills. You’ll get all the help you need from our team to grow.</p>
                    </div>

                </div>
            </div>
            <div className="w-10/12 min-h-[520px] bg-white flex justify-center mx-28 rounded-md relative mt-16 mb-11">
                {/* <!--right section--> */}
                <img src={img1} alt="Hero-Banner" className="w-full h-96 max-w-[650px]" />
                {/* <!--left section--> */}

                <div className="space-y-8 ml-5 mr-5">
                    <h1 className="font-bold text-6xl leading-[1.2] my-18">“Tutor4U allowed me to make a living without leaving home!”</h1>
                    <div className="h-1 w-11 bg-black"></div>
                    <p className="text-[18px] leading-5"><b> Krista A.</b> ・ English tutor</p>

                    <div className="flex-grow mt-3 flex justify-center">
                        <button className="bg-black rounded-md p-3 flex items-center justify-center w-full mb-6">
                            <span className=' text-white text-xl'>Sign up to teach</span>
                            <span className="ml-2  text-white text-xl"><GoArrowRight /></span>
                        </button>
                    </div>

                </div>

            </div>

            <div className='bg-light-pink'>
                <div className='justify-center text-center p-12'>
                    <p className='text-7xl mb-5 font-bold'>"Transforming potential into success through education"</p>
                    {/* <p className='text-lg '>Try another tutor for free if you’re not satisfied.</p> */}
                </div>
            </div>

            <div className="w-10/12 min-h-[420px] bg-white flex justify-center mx-28 rounded-md relative mt-16 mb-11 border">
                {/* <!--right section--> */}
                <img src={img1} alt="Hero-Banner" className="w-full h-96 max-w-[650px]" />
                {/* <!--left section--> */}

                <div className="space-y-8 ml-5 mr-5">
                    <h1 className="font-mullish font-bold text-6xl leading-[1.2]">Get paid to teach online</h1>
                    <div className="h-1 w-11 bg-black"></div>
                    <p className="text-[18px] leading-5"> Connect with thousands of learners around the world and teach from your living room.</p>

                    <div className="flex-grow mt-3 flex justify-center">
                        <button className="bg-black rounded-md p-3 flex items-center justify-center w-full mb-6">
                            <span className=' text-white text-xl'>Get Started</span>
                            {/* <span className="ml-2  text-white text-xl"><GoArrowRight /></span> */}
                        </button>
                    </div>

                </div>

            </div>

            {/* footer */}
            <Footer />


        </>
    )
}

export default StudentSection