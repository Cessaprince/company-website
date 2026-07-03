import React from "react";
import logo from "../images/pictures/sovereign-logo.png";
import arrow from "../images/icons/arrow.png";
import rightArrow from "../images/icons/arrow-right.jpg";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <section className="w-full bg-black h-auto py-[12px]">
                <div className="short-section flex items-center justify-between gap-[24px]">
                    <div className="h-[40px] w-[40px] overflow-hidden">
                        <img src={logo} alt="" className="w-full h-full object-cover" />
                    </div>

                    <nav className="py-2 px-2 flex items-center gap-[12px] border-gray-800  bg-[var(--dark-blue2)] border-[1px] rounded-[35px] capitalize w-auto">
                        <NavLink to="#" className="text-gray-300 font-light hover:text-white focus:text-white focus:bg-[var(--dark-purple)] focus:rounded-[35px] py-[4px] px-[15px]">
                            home
                        </NavLink>
                        <NavLink to="#" className="text-gray-300 font-light hover:text-white focus:text-white focus:bg-[var(--dark-purple)] focus:rounded-[35px] py-[4px] px-[15px]">
                            who we are
                        </NavLink>

                        <NavLink to="#" className="text-gray-300 font-light hover:text-white focus:text-white focus:bg-[var(--dark-purple)] focus:rounded-[35px] py-[4px] px-[15px]">
                            what we do
                        </NavLink>

                        <NavLink to="#" className="text-gray-300 font-light hover:text-white focus:text-white focus:bg-[var(--dark-purple)] focus:rounded-[35px] py-[4px] px-[15px] inline-flex items-center gap-2">
                            <span>our products</span>
                            <span className="overflow-hidden w-[10px] h-[10px]">
                                <img src={arrow} alt="" className="h-full w-full object-cover" />
                            </span>
                        </NavLink>
                    </nav>

                    <button className="text-white inline-flex items-center gap-2 bg-[var(--dark-purple)] py-[7px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer">
                        <span>Book a Call</span>
                        <span className="overflow-hidden w-[10px] h-[10px]">
                            <img src={rightArrow} alt="" className="h-full w-full object-cover" />
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Header;