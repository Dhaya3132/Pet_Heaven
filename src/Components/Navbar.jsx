import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="p-6">
            <nav className="flex justify-center items-center gap-12 font-JosefinSans border-solid border-2 border-slate-200 w-fit px-9 py-1 mx-auto rounded-full shadow-lg">
                <div className="flex  gap-0 items-center justify-center">
                    <img src={Logo} alt="Logo" className="w-20 h-20" />
                    <p className="font-DancingScript text-2xl font-bold text-black p-0 m-0">Pet Heaven</p>
                </div>

                <ul className="flex items-center gap-6 text-lg font-ligh">
                    <li className="hover:text-Second_Primary">Our Products</li>
                    <li className="hover:text-Second_Primary">Slaes & Offers</li>
                    <li className="hover:text-Second_Primary">Our Universe</li>
                    <li className="hover:text-Second_Primary">Demos</li>
                </ul>
                <div className="flex gap-4 items-center">
                    <button className="text-md font-light font-JosefinSans bg-Primary text-white px-6 py-2 rounded-full shadow-sm">Sign In</button>
                    <FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "#FA3E65" }} />
                </div>
            </nav>
        </div>

    )
}

export default Navbar;