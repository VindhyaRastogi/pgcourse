import React from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="top-0 left-0 w-full bg-teal-500 text-white shadow-lg z-10">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
               
                <ul className="flex space-x-4">
                    <li className="cursor-pointer text-xl hover:text-gray-900">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900">
                        <Link
                            to="faculty"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Faculty
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900">
                        <Link
                            to="internship_partners"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Internship Partners
                        </Link>
                    </li>
                    <li className="cursor-pointer text-xl hover:text-gray-900">
                        <Link
                            to="admission"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Admission
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
