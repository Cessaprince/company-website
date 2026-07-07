import React from "react";
import logo from "../images/pictures/sovereign-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

    //check if the link is active using the props.isActive but destructured
    const navLinkClass = ({ isActive }) =>
        `py-[4px] px-[15px] rounded-[35px] font-light transition-all duration-300 
    ${isActive ? "bg-[var(--dark-purple)] text-white" : "text-gray-300 hover:text-white" }`;

    return (
        <div>
            <section className="w-full bg-black h-auto py-[12px]" id='myHeader'>
                <div className="short-section flex items-center justify-between gap-[24px]">
                    <div className="h-[30px] w-[30px] overflow-hidden">
                        <img src={logo} alt="" className="w-full h-full object-cover" />
                    </div>

                    <nav className="py-2 px-2 flex items-center gap-[12px] border-gray-800  bg-[var(--dark-blue2)] border-[1px] rounded-[35px] capitalize w-auto">
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

                    <Link to='/contact-us' className="group text-gray-200 inline-flex items-center gap-2 bg-[var(--dark-purple)] py-[7px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer">
                        <span className="group-hover:text-white">Book a Call</span>
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Header;