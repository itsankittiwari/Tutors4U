import React, { useState } from 'react';
import img1 from '../assets/Student.gif'
import Navbar from '../Pages/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigat = useNavigate();
    // const [submit_value,setSubmit_value] = useState(0);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
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
            const response = await axios.post('http://localhost:4000/api/v1/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            navigat('/login_student');
            // navigat('/login_student');
            console.log("aaaaaaaa response", response)
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
        if (!data.first_name.trim() || !First_nameRegex.test(data.first_name)) {
            errors.first_name = 'Name must contain only alphabets';
        }

        // Validate Last_name
        const Last_nameRegex = /^[A-Za-z]+$/; // Regex for alphabets only
        if (!data.last_name.trim() || !Last_nameRegex.test(data.last_name)) {
            errors.last_name = 'Name must contain only alphabets';
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
        if (data.password !== data.confirm_password) {
            errors.confirm_password = 'Passwords do not match';
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
                                <label htmlFor="first_name" className="block text-sm text-gray-900">
                                    Firstname
                                    <input type="text" name="first_name" value={formData.first_name} placeholder='Firstname' onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2' required />
                                    {errors.first_name && <p className="error">{errors.first_name}</p>}
                                </label>

                                <label htmlFor="last_name" className="block text-sm text-gray-900">
                                    Lastname
                                    <input type="text" name="last_name" value={formData.last_name} placeholder='Lastname' onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2' required />
                                    {errors.last_name && <p className="error">{errors.last_name}</p>}
                                </label>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="Email" className="block text-sm text-gray-900">
                                    Email
                                    <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </label>
                            </div>
                            <div className='mt-3'>
                            <label htmlFor="password" className="block text-sm text-gray-900">
                                    Password
                                <input type="password"
                                    name="password"
                                    value={formData.password}
                                    placeholder='Enter the password'
                                    onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required />
                                {errors.password && <p className="error">{errors.password}</p>}
                                </label>
                            </div>
                            <div className='mt-3'>
                            <label htmlFor="confirm_password" className="block text-sm text-gray-900">
                                    Renter the Password
                                <input type="password"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    placeholder=' Renter the Password'
                                    onChange={handleInputChange} className='border border-gray-500 rounded-md py-1 px-2 w-full' required />
                                {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
                                </label>
                            </div>
                            <div className='mt-3'>
                                <input type='checkbox' className='border border-gray-500' />
                                <span> I accept the <span className='text-purple'>terms of use </span>  & <span className='text-purple'>Privacy Policy</span></span>
                            </div>
                            <div className='mt-3'>
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
