import React, { useState } from 'react';

function TeacherRegister() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleCheckboxChange = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="container border-2 rounded-md mt-3 flex items-center justify-center ">
                <nav className="navbar mb-4">
                    <ul className="flex space-x-20 pt-4 text-md">
                        <li>
                            <a href="#" data-number="1" className="relative hover:text-gray-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/photo.html" data-number="2" className="relative hover:text-gray-700">
                                Photo
                            </a>
                        </li>
                        <li>
                            <a href="/Certification.html" data-number="3" className="relative hover:text-gray-700">
                                Certification
                            </a>
                        </li>
                        <li>
                            <a href="#" data-number="4" className="relative hover:text-gray-700">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="/Description.html" data-number="5" className="relative hover:text-gray-700">
                                Description
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="main bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-black text-left mb-4">About</h1>
                <p className="text-justify mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non officia hic tenetur autem id eum similique quam accusamus consequuntur quaerat.
                </p>
                <form>
                    <label htmlFor="first" className="block text-left text-gray-600 font-bold mb-2">First Name:</label>
                    <input type="text" id="first" name="first" placeholder="Enter your first name" required className="block w-full mb-4 p-2 border border-gray-300 rounded-md" />

                    <label htmlFor="last" className="block text-left text-gray-600 font-bold mb-2">Last Name:</label>
                    <input type="text" id="last" name="last" placeholder="Enter your last name" required className="block w-full mb-4 p-2 border border-gray-300 rounded-md" />

                    <label htmlFor="email" className="block text-left text-gray-600 font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required className="block w-full mb-4 p-2 border border-gray-300 rounded-md" />

                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <label htmlFor="language" className="block text-left text-gray-600 font-bold mb-2">Language Spoken:</label>
                            <select id="language" name="language" required className="block w-full p-2 border border-gray-300 rounded-md">
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                        <div className="w-1/2 pl-2">
                            <label htmlFor="level" className="block text-left text-gray-600 font-bold mb-2">Level:</label>
                            <select id="level" name="level" required className="block w-full p-2 border border-gray-300 rounded-md">
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="subject_taught" className="block text-left text-gray-600 font-bold mb-2">Subject taught:</label>
                    <select id="subject_taught" name="subject_taught" required className="block w-full mb-4 p-2 border border-gray-300 rounded-md">
                        <option value="HTML">HTML</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="CSS">CSS</option>
                        <option value="Python">Python</option>
                        <option value=".NET">.NET</option>
                        <option value="Java">Java</option>
                    </select>

                    <label htmlFor="mobile" className="block text-left text-gray-600 font-bold mb-2">Contact:</label>
                    <input type="text" id="mobile" name="mobile" placeholder="Enter your Mobile Number" required maxLength="10" className="block w-full mb-4 p-2 border border-gray-300 rounded-md" />

                    <div className="profile mb-4">
                        <input type="checkbox" id="popupCheckbox" onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="popupCheckbox" className="text-gray-600">I confirm I'm over 18</label>
                        {isPopupVisible && (
                            <div className="popup bg-black text-white border border-black rounded-md p-4 mt-2">
                                You must be 18 or older to teach in tutors4u
                            </div>
                        )}
                    </div>

                    <div className="wrap flex justify-center">
                        <button type="submit" className="bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-pink-500">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeacherRegister