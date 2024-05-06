import React, { useState } from 'react';
import img1 from '../assets/Student.gif'
import Navbar from '../Pages/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigat = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            navigat('/student/home');
            console.log("aaaaaaaa response", response?.data?.message)
            localStorage.setItem("isLogIn", "Login Success")
        } catch (error) {
            setErrors("Failed to login. Please try again. If you dont have an account first create an account by click on sign-up");
            if (error.response && error.response.data) {
                const serverErrors = error.response.data;
                // Handle serverErrors as needed
            } else {
                console.error('Error occurred:', error.message);
            }
        }
    };


    return (
        <div className='min-h-screen bg-light-pink'>
            <Navbar />
            <div className='mx-auto mt-12'>
                <div className=' flex-col lg:flex-row w-10/12 lg:w-8/12 flex  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                    <div className='lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[image:var(--image-url)] bg-no-repeat bg-cover' style={{ '--image-url': `url(${img1})` }}>
                            {/* here we set an image that shows on left side */}
                    </div>
                    <div className='w-full lg:w-1/2 py-16 px-12'>
                        <h1 className='text-3xl mb-4 text-center'>Login</h1>
                        <p className='mb-4 text-center'>
                            Login Your account, Before going to your destination.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-rows-5 justify-center items-center gap-3'>
                                <input type='email' placeholder='Email' value={formData.email} name="email" onChange={handleInputChange} className='border border-grey rounded-md py-1 px-2 ' />
                                <input type='password' placeholder='Password' value={formData.password} name="password" onChange={handleInputChange} className='border border-grey rounded-md py-1 px-2 ' />
                                <span> <input type='checkbox' className='border border-gray' required /> I accept the <span className='text-purple'>terms of use </span>  & <span className='text-purple'>Privacy Policy</span></span>
                                <button className='bg-grey hover:bg-black py-3 text-center rounded-md text-white'>Login Now</button>
                                {errors && <p className="error text-red">{errors}</p>}
                                <span> New User? <Link className='text-purple font-semibold' to='/sign_up'>Sign Up</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login





