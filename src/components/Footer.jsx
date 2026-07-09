import React from 'react'
import logo from "../images/pictures/sovereign-logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <section className='bg-black py-[50px] h-auto w-full border-t-[0.1px] border-gray-800'>
                <div className="short-section">
                    <div className='grid grid-cols-4 gap-[25px] max-md:grid-cols-1 max-md:gap-[35px] max-lg:grid-cols-2 max-lg:gap-[50px]'>
                        <div className="flex flex-col gap-[10px] max-md:w-[100%]">
                            <div className='h-[30px] w-[30px] overflow-hidden'>
                                <img src={logo} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h3 className='font-bold text-white capitalize text-[18px]'>Sovereign tech</h3>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px] max-md:w-full max-md:text-[12px]'>At Sovereign Technology and Innovation Limited, we leverage technology and innovation to create powerful digital solutions that transform businesses, optimize processes, and unlock new opportunities for growth in the digital economy.</p>

                        </div>
                        <div className="flex flex-col gap-[10px] max-md:w-[75%]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[18px]'>useful links</h3>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white max-md:text-[12px]'>who we are</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white max-md:text-[12px]'>what we do</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white max-md:text-[12px]'>our products</Link>

                        </div>

                        <div className="flex flex-col gap-[10px] max-md:w-[75%]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[18px]'>help</h3>
                            <Link to='/contact' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white max-md:text-[12px]'>contact us</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white max-md:text-[12px]'>customer service</Link>

                        </div>
                        <div className="flex flex-col gap-[10px] max-md:w-[100%]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[18px] max-md:text-[12px]'>Connect with us</h3>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px] max-md:text-[12px]'>G & M Place, Igbo-Efon, Lekki, Lagos, Nigeria.</p>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px] max-md:text-[12px]'>1703 Rockhill Rd, #6311, McKinney TX 75069, U.S.A.</p>
                            <a
                                href="tel:+2349159855709"
                                className="text-gray-400 text-sm font-light leading-[24px] hover:text-white max-md:text-[12px]"
                            >
                                +2349159855709
                            </a>
                            <a
                                href="mailto:cs@sovereigntechltd.com"
                                className="text-gray-400 text-sm font-light leading-[24px] hover:text-white max-md:text-[12px]"
                            >
                                cs@sovereigntechltd.com
                            </a>

                        </div>
                    </div>


                    <div className="flex justify-between border-t-[0.1px] border-gray-800 mt-[50px] py-[20px] max-md:justify-center max-md:flex-col max-md:items-center max-md:gap-[15px]">
                        <p className='text-gray-400 font-light text-[14px] leading-[24px] max-md:text-[12px]'>{"\u00A9"} 2026 Sovereign Technology. All rights reserved.</p>


                        {/* bottom right icons */}
                        <div className='flex gap-[10px] items-center'>
                            <Link
                                className="group h-[40px] w-[40px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center hover:bg-[var(--dark-orange)]">
                                <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    className="text-[var(--dark-orange)] group-hover:text-white"
                                />
                            </Link>

                            <Link
                                className="group h-[40px] w-[40px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center hover:bg-[var(--dark-orange)]">
                                <FontAwesomeIcon
                                    icon={['fab', 'tiktok']}
                                    className="text-[var(--dark-orange)] group-hover:text-white"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer