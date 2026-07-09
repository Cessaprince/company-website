import React, { useState } from "react";
import logo from "../images/pictures/sovereign-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

    //check if the link is active using the props.isActive but destructured
    const navLinkClass = ({ isActive }) =>
        `py-[7px] px-[13px] rounded-[35px] text-[14px] font-light transition-all duration-300 
    ${isActive ? "bg-[var(--dark-purple)] text-white" : "text-gray-300 hover:text-white"}`;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <section className="header w-full bg-black h-auto py-[12px]" id='myHeader'>
                <div className="short-section flex items-center justify-between gap-[30px]">
                    <div className="h-[30px] w-[30px] overflow-hidden">
                        <img src={logo} alt="" className="w-full h-full object-cover" />
                    </div>

                    <nav className="py-2 px-2 flex items-center gap-[12px] border-gray-800  bg-[var(--dark-blue2)] border-[1px] rounded-[35px] capitalize w-auto max-md:hidden max-lg:hidden">
                        <NavLink to="/" className={navLinkClass}>
                            home
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            who we are
                        </NavLink>

                        <NavLink to="/services" className={navLinkClass}>
                            what we do
                        </NavLink>

                        <NavLink to="/products" className={navLinkClass}>
                            <span>our products</span>
                            <FontAwesomeIcon icon={['fas', 'angle-down']} className="group-hover:text-white" size="xs" />
                        </NavLink>
                    </nav>

                    <Link to='/contact-us' className="group text-[14px] text-gray-200 inline-flex items-center gap-2 bg-[var(--dark-purple)] py-[7px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer max-md:hidden max-lg:hidden">
                        <span className="group-hover:text-white">Book a Call</span>
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />
                    </Link>

                    <div onClick={() => setIsMenuOpen(prev => !prev)} className="border-[0.1px] flex items-center justify-center w-[40px] h-[40px] border-gray-800 text-white rounded-[10px] cursor-pointer hidden max-lg:flex">
                        {isMenuOpen ? <FontAwesomeIcon icon={['fas', 'xmark']} className="text-white text-[18px]" />
                            : <FontAwesomeIcon icon={['fas', 'bars']} className="text-white text-[18px]" />
                        }
                    </div>
                </div>

                <div className={`mobile-nav border-gray-600 border-[0.1px] p-[15px] rounded-[15px] flex flex-col gap-[2px] transition-all duration-500 ease-in-out hidden max-lg:flex max-lg:flex ${isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-[0px] opacity-0"}`}>
                    <Link to='/' className="capitalize  text-gray-300 py-[15px] px-[20px] w-full rounded-[15px] hover:bg-blue-700 hover:text-white">home</Link>
                    <Link to='/about' className="capitalize  text-gray-300 py-[15px] px-[20px] w-full rounded-[15px] hover:bg-blue-700 hover:text-white">who we are</Link>
                    <Link to='/services' className="capitalize  text-gray-300 py-[15px] px-[20px] w-full rounded-[15px] hover:bg-blue-700 hover:text-white">what we do</Link>
                    <Link to='/products' className="capitalize  text-gray-300 py-[15px] px-[20px] w-full rounded-[15px] hover:bg-blue-700 hover:text-white">our products</Link>
                    <Link to='/contact-us' className="mt-[5px] group text-[14px] text-gray-300 flex items-center justify-center gap-2 bg-[var(--dark-purple)] py-[10px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer">
                        <span className="group-hover:text-white">Book a Call</span>
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default Header;