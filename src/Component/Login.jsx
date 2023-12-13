import React from 'react'
import img1 from '../assets/images/left-section.jpg'

function Login() {
  return (
    <div className='min-h-screen py-40 bg-gradient-to-r from-indigo-500 ...'>
            <div className='mx-auto'>
                <div className=' flex-col lg:flex-row w-10/12 lg:w-8/12 flex  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                    <div className='lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[image:var(--image-url)] bg-no-repeat bg-cover' style={{ '--image-url': `url(${img1})` }}>
                       <h1 className='text-white text-3xl mb-3'>Welcome</h1>
                       <div>
                       <p className='text-white'>In this video, I will show you how to setup a Tailwindcss project via Vite. Then, I will design a registration page or a signup page with Tailwind CSS classes. I have designed a registration form on FIgma and attached the Figma file here. You  can download it and open it on your local </p>
                       </div>
                      
                    </div>
                    <div className='w-full lg:w-1/2 py-16 px-12'>
                    <h1 className='text-3xl mb-4 text-center'>Login</h1>
                    <p className='mb-4 text-center'>
                      Login Your account, Before going to your destination.
                    </p>
                    <form action='#'>
                    <div className='grid grid-rows-5 justify-center items-center gap-5'>
                        <input type='text' placeholder='Firstname' className='border border-gray-500 rounded-md py-1 px-2'/>
                        <input type='email' placeholder='Email' className='border border-gray-500 rounded-md py-1 px-2 '/>
                        <input type='password' placeholder='Password' className='border border-gray-500 rounded-md py-1 px-2 '/>
                        <span> <input type='checkbox' className='border border-gray-500'/> I accept the <span className='text-purple-400'>terms of use </span>  & <span className='text-purple-400'>Privacy Policy</span></span>
                        <button className='bg-purple-300 hover:bg-purple-500 py-3 text-center rounded-md text-white'>Login Now</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login





