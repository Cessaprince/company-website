import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'
import ServiceComp from '../components/ServiceComp'
import Inquiry from '../components/Inquiry'
import Footer from '../components/Footer'


const Service = () => {
    return (
        <div>
            <div>
                <Header />

                <section className='blue-box w-full py-[20px] h-auto'>
                    <div className="short-section py-[30px]" data-aos='fade-up' data-aos-dealy='100'>
                        <div className="flex flex-col gap-[5px] items-center text-center leading-[40px] w-full max-md:leading-[30px]">
                            <span className='text-[var(--dark-orange)] font-[500] capitalize'>home/services </span>
                            <h3 className='text-white capitalize font-black text-[50px] max-md:text-[35px]'>what we do</h3>
                            <p className='text-gray-400 font-light text-base leading-[25px] max-w-[600px] pt-[20px] max-md:text-[14px] max-md:leading-[22px]'>
                                Sovereign Tech & Innovations was founded on a simple belief: technology should empower progress, not complicate it. Guided by experienced professionals, we focus on delivering solutions rooted in clarity, innovation, and trust — helping organizations grow, adapt, and lead with confidence.
                            </p>
                            <Link className="text-white inline-flex items-center gap-2 bg-[var(--dark-orange)] py-[5px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[20px] capitalize">
                                <span>discuss your project with us</span>

                            </Link>
                        </div>
                    </div>
                </section>

                <section className="blue-box w-full pt-[30px] pb-[60px]">
                    <div className="short-section" data-aos='fade-up' data-aos-dealy='100'>
                        <div className="grid grid-cols-1 gap-[30px]">


                            {/* problem identifcation */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-700 p-[40px] items-center max-md:flex-col max-lg:p-[25px]'>
                                <div className='w-[50%] flex flex-col gap-[20px] max-md:w-[100%]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px]">
                                        problem identification
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:leading-[30px] max-md:text-[22px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px] max-md:text-[12px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                                <div className="flex-1">
                                    <ServiceComp />
                                </div>

                            </div>

                            {/* consultation */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center max-md:flex-col max-lg:p-[25px]'>

                                <div className="flex-1 max-md:order-1">
                                    <ServiceComp />
                                </div>

                                <div className='w-[50%] flex flex-col gap-[20px] max-md:w-[100%]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px]">
                                        problem identification
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:leading-[30px] max-md:text-[22px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px] max-md:text-[12px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                            </div>


                            {/* work-place wellbeing */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center max-md:flex-col max-lg:p-[25px]'>
                                <div className='w-[50%] flex flex-col gap-[20px] max-md:w-[100%]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px]">
                                        problem identification
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:leading-[30px] max-md:text-[22px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px] max-md:text-[12px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                                <div className="flex-1">
                                    <ServiceComp />
                                </div>

                            </div>

                            {/* partnership */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center max-md:flex-col max-lg:p-[25px]'>

                                <div className="flex-1 max-md:order-1">
                                    <ServiceComp />
                                </div>

                                <div className='w-[50%] flex flex-col gap-[20px] max-md:w-[100%]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px]">
                                        problem identification
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:leading-[30px] max-md:text-[22px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px] max-md:text-[12px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <Inquiry />
                <Footer />
            </div>
        </div>
    )
}

export default Service