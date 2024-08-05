import React from 'react';
import LogoNav from "../assets/Logo.svg"
import { FaBars } from "react-icons/fa";
function Navbar() {
    return (
        <div className={" flex items-center justify-between px-5 pt-8 pb-5"}>
            <div className={"flex items-center"}>
                <a href="#"><img src={LogoNav} className={"w-16"} alt="Photo"/></a>
                <p className={"font-Poppins font-semibold"}>Worque.</p>
                <div>
                    <ul className={"items-center space-x-6 ml-6 text-black hidden md:flex"}>
                        <li>Platform.</li>
                        <li>Solutions.</li>
                        <li>Resources.</li>
                        <li>Pricing.</li>
                    </ul>
                </div>
            </div>

            <div className={" flex items-center justify-between space-x-5 pr-5"}>
                <button
                    className="bg-white hover:border-gray-300 text-black font-semibold py-2 px-4 hover:border transition rounded-lg text-sm">
                    Log in
                </button>
                <button
                    className="hidden xl:flex bg-white hover:bg-black hover:text-white transition border-gray-300 text-black font-semibold py-2 px-4 border rounded-lg text-sm">
                    Get started
                </button>
                <div className={"md:hidden"}>
                    <FaBars/>
                </div>

            </div>


        </div>
    );
}

export default Navbar;
