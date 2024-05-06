import React from 'react'

function Footer() {
    return (
        <div className='bg-black text-white height h-55'>
            <div className='grid grid-cols-4 '>
                <div className='ms-9 my-8'>
                    <h3><b>About us</b></h3>
                    <a href='https://www.google.com' className=' underline'>Who we are</a><br />
                    <a href='https://www.google.com' className=' underline'>How it works</a><br />
                    <a href='https://www.google.com' className=' underline'>Feedback</a><br />

                </div>
                <div className='my-8'>
                    <h3><b>For Students</b></h3>
                    <a href='https://www.google.com' className=' underline'>Who we are</a><br />
                    <br />
                    <h3><b>Contact us</b></h3>
                </div>
                <div className='my-8'>
                    <h3><b>For Teachers</b></h3>
                    <a href='https://www.google.com' className=' underline'>Become an online tutor</a><br />
                    <a href='https://www.google.com' className=' underline'>Become an offline tutor</a><br />
                </div>
                <div className='my-8'>
                    <h3><b>Social Media</b></h3>
                    <a href='https://www.google.com' className=' underline'>Facebook</a><br />
                    <a href='https://www.google.com' className=' underline'>Instagram</a><br />
                    <a href='https://www.google.com' className=' underline'>Linked In</a><br />
                    <a href='https://www.google.com' className=' underline'>Youtube</a><br />

                </div>
            </div>
        </div>

    )
}

export default Footer