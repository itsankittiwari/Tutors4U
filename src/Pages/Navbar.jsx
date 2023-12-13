import React from "react";

import { CiLogin } from "react-icons/ci";
function Navbar() {
    //   const [isNavOpen, setIsNavOpen] = useState(false);

    //   const toggleNav = () => {
    //       setIsNavOpen(!isNavOpen);
    //   };
    return (
        <>
            <nav className='bg-transparent mt-4 w-full'>
                <div className="max-w-[1440px] flex justify-between mx-9 gap-5 w-full px-20">
                    <div className='flex mt-1 gap-5'>
                        <h1 className="text-3xl font-bold">Tutors4U</h1>
                        <ul className='flex gap-6 mt-2 cursor-pointer'>
                            <li>Find tutors</li>
                            <li>Corporate training</li>
                            <li>Become a tutors</li>
                        </ul>
                    </div>
                    <div className="flex-grow mt-3 ">
                        <button className="border-2 border-black rounded-md p-1 flex items-center ml-auto w-24" >
                            <span className="mr-2"><CiLogin /></span>
                            <span>Log-in</span>
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar