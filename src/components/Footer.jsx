import React from 'react'
import logo from "../images/pictures/sovereign-logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <section className='bg-black pb-[50px] h-auto w-full'>
                <div className="short-section">
                    <div className='flex gap-[25px]'>
                        <div className="flex flex-col w-[25%] gap-[10px]">
                            <div className='h-[30px] w-[30px] overflow-hidden'>
                                <img src={logo} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h3 className='font-bold text-white capitalize text-[25px]'>Sovereign tech</h3>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>At Sovereign Technology and Innovation Limited, we leverage technology and innovation to create powerful digital solutions that transform businesses, optimize processes, and unlock new opportunities for growth in the digital economy.</p>

                        </div>
                        <div className="flex flex-col w-[25%] gap-[10px]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[25px]'>useful links</h3>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>who we are</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>what we do</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>our products</Link>

                        </div>

                        <div className="flex flex-col w-[25%] gap-[10px]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[25px]'>help</h3>
                            <Link to='/contact' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>contact us</Link>
                            <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>customer service</Link>

                        </div>
                        <div className="flex-1 flex flex-col gap-[10px]">

                            <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[25px]'>Connect with us</h3>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>G & M Place, Igbo-Efon, Lekki, Lagos, Nigeria.</p>
                            <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>1703 Rockhill Rd, #6311, McKinney TX 75069, U.S.A.</p>
                            <a
                                href="tel:+2349159855709"
                                className="text-gray-400 text-sm font-light leading-[24px] hover:text-white"
                            >
                                +2349159855709
                            </a>
                            <a
                                href="mailto:cs@sovereigntechltd.com"
                                className="text-gray-400 text-sm font-light leading-[24px] hover:text-white"
                            >
                                cs@sovereigntechltd.com
                            </a>

                        </div>
                    </div>
                    <div className='border-[0.09px] border-collapse w-full h-full border-gray-600 mt-[80px] mb-[40px]'></div>

                    <div className="flex justify-between">
                        <p className='text-gray-400 font-light text-normal leading-[24px]'>{"\u00A9"} 2026 Sovereign Technology. All rights reserved.</p>


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