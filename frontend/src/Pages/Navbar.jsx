import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom'

function Navbar() {
    const navigat = useNavigate();
    //   const [isNavOpen, setIsNavOpen] = useState(false);

    //   const toggleNav = () => {
    //       setIsNavOpen(!isNavOpen);
    //   };


    const handleButtonClick = () => {
        localStorage.setItem("isLogIn", "")
        navigat('/login_student')
        // Your logic for handling the button click, such as setting state or performing other actions
    };


    function EditCancel() {
        navigat('/');
    }
    const isLogIn = localStorage.getItem("isLogIn")
    console.log("isLogin", isLogIn)
    // const [student, setStudent] = useState(false)
    return (
        <>
            <nav className='bg-transparent w-full'>
                <div className="max-w-[1440px] flex justify-between mx-9 gap-5 w-full px-20">
                    <div className='flex mt-1 gap-5'>
                        {isLogIn == "Login Success" ? <h1 className="text-3xl font-bold cursor-pointer"><Link to='/student/home'>Tutors4U</Link></h1>
                            : <h1 className="text-3xl font-bold cursor-pointer" onClick={EditCancel}>Tutors4U</h1>}
                        {/* <h1 className="text-3xl font-bold cursor-pointer">Tutors4U</h1> */}
                        <ul className='flex gap-6 mt-2 cursor-pointer'>
                        { isLogIn == "Login Success" && <li><Link to='/student/home'>Home</Link></li> }
                            <li>Find tutors</li>
                            {isLogIn !== "Login Success" && <li><Link to='/become_a_teacher'>
                                    Become a tutors</Link></li>}
                            <li><Link to='/contact_us'>
                                Contact Us</Link></li>
                        </ul>
                    </div>
                  

                    <div className="flex-grow mt-3">
                        {/* <Link className="border-2 border-black rounded-md p-1 flex items-center ml-auto w-24" to={isLoggedIn ? '/login_student'  : '/student_dashboard'} > */}
                        <Link className="border-2 border-black rounded-md p-1 flex items-center ml-auto w-24" to='/login_student' >
                            <button onClick={handleButtonClick} className="flex items-center">
                                {isLogIn == "Login Success" ? <CiLogout /> : <CiLogin />}
                                {
                                    isLogIn == "Login Success" && <span className="ml-2">Logout</span>

                                }
                                {
                                    isLogIn == "" && <span className="ml-2">Login</span>
                                }

                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar