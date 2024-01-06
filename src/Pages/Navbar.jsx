import React from "react";
import { useNavigate } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom'
function Navbar() {
    //   const [isNavOpen, setIsNavOpen] = useState(false);

    //   const toggleNav = () => {
    //       setIsNavOpen(!isNavOpen);
    //   };
    const navigat = useNavigate();

    function EditCancel() {
        navigat('/');
    }
    return (
        <>
            <nav className='bg-transparent w-full'>
                <div className="max-w-[1440px] flex justify-between mx-9 gap-5 w-full px-20">
                    <div className='flex mt-1 gap-5'>
                        <h1 className="text-3xl font-bold cursor-pointer" onClick={EditCancel}>Tutors4U</h1>
                        <ul className='flex gap-6 mt-2 cursor-pointer'>
                            <li>Find tutors</li>
                            <li> <Link to='/become_a_teacher'> 
                            Become a tutors</Link></li>
                            <li> <Link to='/contact_us'> 
                            Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex-grow mt-3 ">
                        <Link className="border-2 border-black rounded-md p-1 flex items-center ml-auto w-24" to='/login_student' >
                            {/* <Link className="mr-2" to='/login_student'> */}
                           <CiLogin className="mr-2"/>
                            Log-in
                            {/* </Link> */}
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar