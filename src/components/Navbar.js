import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
const Navbar = (props) => {

    const changeToHome = () => {
        props.togglePage("home")
    }
    const changeToAbout = () => {
        props.togglePage("about")
    }
    const changeToFaculty = () => {
        props.togglePage("faculty")
    }
    const changeToPartners = () => {
        props.togglePage("partners")
    }
    const changeToAdmission = () => {
        props.togglePage("admission")
    }
    const changeToFees = () => {
        props.togglePage("fees")
    }
    const changeToRegistration = () => {
        props.togglePage("registration")
    }
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        // <nav className="top-0 left-0 w-screen bg-teal-500 text-white shadow-lg z-10">
        //     <div className="container mx-auto flex items-center justify-between px-4 py-2">

        //         <ul className="flex space-x-4">
        //             <li className="cursor-pointer text-xl hover:text-gray-900" >
        //                 <Link
        //                     to="home"
        //                     smooth={true}
        //                     duration={500}
        //                     className="cursor-pointer"
        //                     onClick={changeToHome}
        //                 >
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className="cursor-pointer text-xl hover:text-gray-900"  >
        //                 <Link
        //                     to="about"
        //                     smooth={true}
        //                     duration={500}
        //                     className="cursor-pointer"
        //                     onClick={changeToAbout}
        //                 >
        //                     About
        //                 </Link>
        //             </li>
        //             <li className="cursor-pointer text-xl hover:text-gray-900" >
        //                 <Link
        //                     to="faculty"
        //                     smooth={true}
        //                     duration={500}
        //                     className="cursor-pointer"
        //                     onClick={changeToFaculty}
        //                 >
        //                     Faculty
        //                 </Link>
        //             </li>
        //             <li className="cursor-pointer text-xl hover:text-gray-900" >
        //                 <Link
        //                     to="internship_partners"
        //                     smooth={true}
        //                     duration={500}
        //                     className="cursor-pointer"
        //                     onClick={changeToPartners}
        //                 >
        //                     Internship/Fellowship Partners
        //                 </Link>
        //             </li>
        //             <li className="cursor-pointer text-xl hover:text-gray-900" >
        //                 <Link
        //                     to="admission"
        //                     smooth={true}
        //                     duration={500}
        //                     className="cursor-pointer"
        //                     onClick={changeToAdmission}
        //                 >
        //                     Admission
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="bg-teal-500 text-white shadow-lg z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                <div className="hidden sm:block">
                    <ul className="ml-4 flex space-x-4">
                        <li className="cursor-pointer text-xl hover:text-gray-900" >
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToHome}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gray-900"  >
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToAbout}
                            >
                                Course Structure
                            </Link>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gray-900" >
                            <Link
                                to="faculty"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToFaculty}
                            >
                                Faculty
                            </Link>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gray-900" >
                            <Link
                                to="internship_partners"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToPartners}
                            >
                                Internship/Fellowship Partners
                            </Link>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gray-900" >
                            <Link
                                to="registration"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToRegistration}
                            >
                                Registration
                            </Link>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gray-900" >
                            <Link
                                to="fees"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                                onClick={changeToFees}
                            >
                                Fees
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="block sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-900 hover:border-gray-900"
                    >
                        <svg
                            className="h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="px-2 pt-2 pb-4 space-y-1">
                    <li className="cursor-pointer text-xl hover:text-gray-900" >
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToHome}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900"  >
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToAbout}
                        >
                            Course Structure
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900" >
                        <Link
                            to="faculty"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToFaculty}
                        >
                            Faculty
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900" >
                        <Link
                            to="internship_partners"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToPartners}
                        >
                            Internship/Fellowship Partners
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900" >
                        <Link
                            to="registration"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToRegistration}
                        >
                            Registration
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900" >
                        <Link
                            to="fees"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={changeToFees}
                        >
                            Fees
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
