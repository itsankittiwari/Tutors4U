import React, { useState } from 'react';
import img1 from '../assets/Student.gif'
import Navbar from '../Pages/Navbar'
import axios from 'axios';


function Signup() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form data
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        //  console.log("aaaaa form data",formData)
        try {
            const response = await axios.post('http://127.0.0.1:8000/signup/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("aaaaaaaa response",response)
        } catch (error) {
            if (error.response && error.response.data) {
                const serverErrors = error.response.data;
                // Handle serverErrors as needed
            } else {
                console.error('Error occurred:', error.message);
            }
        }
    };

    const validateForm = (data) => {
        let errors = {};

        // Validate First_name
        const First_nameRegex = /^[A-Za-z]+$/; // Regex for alphabets only
        if (!data.firstname.trim() || !First_nameRegex.test(data.firstname)) {
            errors.firstname = 'Name must contain only alphabets';
        }

        // Validate Last_name
        const Last_nameRegex = /^[A-Za-z]+$/; // Regex for alphabets only
        if (!data.lastname.trim() || !Last_nameRegex.test(data.lastname)) {
            errors.lastname = 'Name must contain only alphabets';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim() || !emailRegex.test(data.email)) {
            errors.email = 'Enter a valid email address';
        }

        // Validate password
        if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        // Validate confirm password
        if (data.password !== data.repassword) {
            errors.repassword = 'Passwords do not match';
        }

        return errors;
    };


    return (
        <div className='min-h-screen bg-light-pink'>
            <Navbar />
            <div className='mx-auto mt-12'>
                <div className=' flex-col lg:flex-row w-10/12 lg:w-8/12 flex  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                    <div className='lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[image:var(--image-url)] bg-no-repeat bg-cover' style={{ '--image-url': `url(${img1})` }}>
                        {/* <h1 className='text-white text-3xl mb-3'> Welcome</h1> */}
                        <div>
                            {/* <p className='text-white'>In this video, I will show you how to setup a Tailwindcss project via Vite. Then, I will design a registration page or a signup page with Tailwind CSS classes. I have designed a registration form on FIgma and attached the Figma file here. You  can download it and open it on your local </p> */}
                        </div>

                    </div>
                    <div className='w-full lg:w-1/2 py-16 px-12'>
                        <h1 className='text-3xl mb-4'>Register</h1>
                        <p className='mb-4'>
                            Create Your account. It's free and only take a minute
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-5'>
                                <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2'  required/>
                                {errors.firstname && <p className="error">{errors.firstname}</p>}
                                <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2' required />
                                {errors.lastname && <p className="error">{errors.lastname}</p>}
                            </div>
                            <div className='mt-5'>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className='mt-5'>
                                <input type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required/>
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <div className='mt-5'>
                                <input type="password"
                                    name="repassword"
                                    value={formData.repassword}
                                    onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required />
                                {errors.repassword && <p className="error">{errors.repassword}</p>}
                            </div>
                            <div className='mt-5'>
                                <input type='checkbox' className='border border-gray-500' />
                                <span> I accept the <span className='text-purple'>terms of use </span>  & <span className='text-purple'>Privacy Policy</span></span>
                            </div>
                            <div className='mt-5'>
                                <button className='w-full bg-grey hover:bg-black py-3 text-center rounded-md text-white'>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
