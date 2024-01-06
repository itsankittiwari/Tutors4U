import React from 'react'
import img1 from '../assets/Student.gif'
import Navbar from '../Pages/Navbar'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='min-h-screen bg-light-pink'>
      <Navbar/>
            <div className='mx-auto mt-12'>
                <div className=' flex-col lg:flex-row w-10/12 lg:w-8/12 flex  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                    <div className='lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[image:var(--image-url)] bg-no-repeat bg-cover' style={{ '--image-url': `url(${img1})` }}>
                       {/* <h1 className='text-white text-3xl mb-3'>Welcome</h1> */}
                       {/* <div>
                       <p className='text-white'>In this video, I will show you how to setup a Tailwindcss project via Vite. Then, I will design a registration page or a signup page with Tailwind CSS classes. I have designed a registration form on FIgma and attached the Figma file here. You  can download it and open it on your local </p>
                       </div> */}
                      
                    </div>
                    <div className='w-full lg:w-1/2 py-16 px-12'>
                    <h1 className='text-3xl mb-4 text-center'>Login</h1>
                    <p className='mb-4 text-center'>
                      Login Your account, Before going to your destination.
                    </p>
                    <form action='#'>
                    <div className='grid grid-rows-5 justify-center items-center gap-5'>
                        <input type='email' placeholder='Email' className='border border-grey rounded-md py-1 px-2 '/>
                        <input type='password' placeholder='Password' className='border border-grey rounded-md py-1 px-2 '/>
                        <span> <input type='checkbox' className='border border-gray'/> I accept the <span className='text-purple'>terms of use </span>  & <span className='text-purple'>Privacy Policy</span></span>
                        <button className='bg-grey hover:bg-black py-3 text-center rounded-md text-white'>Login Now</button>
                        <span> New User? <Link  className='text-purple font-semibold' to='/sign_up'>Sign Up</Link></span>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login





