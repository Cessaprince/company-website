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
                    <div className="short-section py-[30px]">
                        <div className="flex flex-col gap-[5px] items-center text-center leading-[40px] w-full">
                            <span className='text-[var(--dark-orange)] font-[500] capitalize'>home/services </span>
                            <h3 className='text-white capitalize font-black text-[50px]'>who we do</h3>
                            <p className='text-gray-400 font-light text-base leading-[25px] max-w-[600px] pt-[20px]'>
                                Sovereign Tech & Innovations was founded on a simple belief: technology should empower progress, not complicate it. Guided by experienced professionals, we focus on delivering solutions rooted in clarity, innovation, and trust — helping organizations grow, adapt, and lead with confidence.
                            </p>
                            <Link className="text-white inline-flex items-center gap-2 bg-[var(--dark-orange)] py-[5px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[20px] capitalize">
                                <span>discuss your project with us</span>

                            </Link>
                        </div>
                    </div>
                </section>

                <section className="blue-box w-full pt-[30px] pb-[60px]">
                    <div className="short-section">
                        <div className="grid grid-cols-1 gap-[30px]">


                            {/* problem identifcation */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center'>
                                <div className='w-[50%] flex flex-col gap-[20px]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize">
                                        problem identification
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px]'>
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
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center'>

                                <div className="flex-1">
                                    <ServiceComp />
                                </div>

                                <div className='w-[50%] flex flex-col gap-[20px]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize">
                                        consultation
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                            </div>


                            {/* work-place wellbeing */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center'>
                                <div className='w-[50%] flex flex-col gap-[20px]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize">
                                        work-place wellbeing
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px]'>
                                        Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement, improved productivity, and better work-life balance. Together, we'll identify key areas for improvement, develop targeted solutions, implement effective change management, monitor progress, and adjust strategies to foster a culture of continuous learning and growth. Our team of seasoned professionals brings deep knowledge of workplace well-being, proven expertise in organizational development, and a passion for driving positive change. Discover the power of tailored solutions, crafted to address your organization's distinct needs. Let's work together to create a workplace that inspires, motivates, and drives success.
                                    </p>
                                    <Link className="text-white w-fit items-center bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[10px] capitalize">
                                        <span>contact us</span>

                                    </Link>
                                </div>

                                <div className="flex-1 flex flex-col gap-[5px] rounded-[15px] p-[25px] bg-white">
                                    <span className='text-[var(--dark-orange)] uppercase text-xs font-semibold'>what we do</span>
                                    <h1 className='text-black font-bold capitalize text-[20px]'>problem solving</h1>
                                    <span className="text-gray-400 text-xs font-light">
                                        Partner with our experts to create a workplace that thrives.
                                    </span>
                                    {/* the icons of identify, develop, implement etc*/}
                                    <div className="grid grid-cols-6 mt-[20px]">
                                        {/* magnifying glass*/}

                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'magnifying-glass']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>identify</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>

                                        {/* lightbulb*/}
                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'lightbulb']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>develop</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>
                                        {/* settings */}
                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'gear']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>implement</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>

                                        {/* graph */}
                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'chart-column']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>monitor</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>

                                        {/* spiral */}
                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'spiral']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>adjust</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>

                                        {/* laptop */}
                                        <div className="flex flex-col gap-[3px] items-center justify-center">
                                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                                <FontAwesomeIcon icon={['fas', 'spiral']} size="sm" className='text-blue-600 font-light' />
                                            </div>
                                            <p className='text-black font-bold capitalize text-[12px]'>result</p>

                                            <span className="text-gray-400 text-[8px] font-light text-center">
                                                We assess your unique challenges and goals.
                                            </span>
                                        </div>


                                    </div>

                                    <div className="bg-gray-100 p-[10px] w-full rounded-[5px] mt-[13px]">
                                        <p className="text-gray-400 text-[9.5px] font-light ">🇳🇬 Proudly empowering organizations across Nigeria with tailored solutions for lasting impact.</p>
                                    </div>
                                </div>

                            </div>

                            {/* partnership */}
                            <div className='flex gap-[30px] h-auto service-blue-box border-[0.1px] rounded-[15px] border-gray-800 p-[40px] items-center'>

                                <div className="flex-1">
                                    <ServiceComp />
                                </div>

                                <div className='w-[50%] flex flex-col gap-[20px]'>
                                    <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize">
                                        partnership
                                    </span>
                                    <h3 className='text-white capitalize font-bold text-[25px] leading-[40px]'>custom problem solving solution</h3>
                                    <p className='text-gray-400 font-light text-[15px] leading-[23px]'>
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