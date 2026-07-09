import React from 'react'
import Header from '../components/Header'
import sovereignImg from '../images/pictures/sovereign-img.png'
import ProjectCount from '../components/ProjectCount'
import foodbankImg from '../images/pictures/foodbankImg.png'
import goShortletImg from '../images/pictures/goShortletImg.png'
import lightbulbImg from '../images/icons/lightbulb.png'
import Inquiry from '../components/Inquiry'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <div className="flex flex-col">
                <Header />

                <main className='w-full bg-black h-auto pb-[100px]' id='main-home'>
                    <section className=''>
                        <div className="mx-auto my-[35px] w-[90%] max-w-[90%] max-w-[800px]">
                            <h3 className='capitalize text-white text-[59px] font-black leading-[55px] text-center max-md:text-[35px] max-md:leading-[45px]'>Partner with <span className='text-[var(--dark-orange)]'>sovereign tech </span>for cutting-edge solutions</h3>
                            <div className="mx-auto my-[30px] w-[600px] max-w-[65%] max-md:w-[100%] max-md:max-w-[100%]">
                                <p className='text-gray-300 font-light leading-[25px] text-center '>
                                    At Sovereign, we design and develop web and mobile applications globally,
                                    focusing on outstanding user experience.
                                </p>
                                <div className="flex gap-[15px] justify-center mt-[30px]">
                                    <Link type="button" className='capitalize text-white py-[10px] font-[500] px-[30px] bg-[var(--dark-orange)] rounded-[25px] hover:bg-orange-400 max-md:text-[14px] max-md:text-center max-md:px-[35px] max-md:py-[15px]'>get started</Link>
                                    <Link type="button" className='capitalize text-white py-[10px] font-[500] px-[30px] bg-gray-900 border-gray-500 border-[1px] rounded-[25px] hover:bg-gray-800 max-md:text-[14px] max-md:text-center max-md:px-[35px] max-md:py-[15px]'>see our solutions</Link>

                                </div>
                            </div>
                        </div>

                        <div className="mx-auto my-[60px] max-w-[1000px] w-[70%] h-auto border-[1px] border-gray-800 rounded-[15px] max-md:w-[90%]">
                            <div className="overflow-hidden w-auto">
                                <img src={sovereignImg} alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </section>

                    <section className='h-auto bg-black pt-[100px]'>
                        <div className="short-section">
                            <div className="flex flex-col gap-[20px] max-md:gap-[25px]">
                                <div className='leading-[45px] flex flex-col max-md:w-[70%] max-md:gap-[15px] max-md:leading-[35px]'>
                                    <h3 className='font-bold capitalize text-[35px] text-white max-md:text-[30px]'><span className='text-gray-400'>more than</span> technology.</h3>
                                    <h3 className='font-[500] text-[28px] text-white max-md:text-[24px]'>We Bring Clarity to Decisions</h3>
                                </div>
                                <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[70%] max-lg:max-w-[100%] max-md:leading-[25px]  max-md:text-[18px]'>We develop cutting-edge solutions tailored to your organization's unique needs. At <i className='text-[var(--dark-orange)]'>Sovereign Tech </i>and Innovations, we help your business to the next level.</p>

                                <div className='leading-[35px] max-md:leading-[30px] max-lg:leading-[25px]'>
                                    <p className='text-gray-200 font-light text-normal max-md:text-[18px]'>We don't sell off-the-shelf products.</p>
                                    <p className='text-gray-200 font-light text-normal max-md:text-[18px]'>We work alongside teams to solve real business problems.</p>
                                </div>

                                <div className="flex gap-[20px] py-[30px] max-md:flex-col">
                                    <p className='text-gray-400 font-light text-normal leading-[20px] capitalize max-md:text-[16px] max-lg:w-[50%]'>who we are</p>
                                    <p className='text-gray-200 font-light text-normal leading-[20px] max-w-[70%] max-lg:max-w-[100%] max-md:text-[18px] max-md:leading-[30px]'>Sovereign Tech & Innovations was founded on a simple belief: technology should empower progress, not complicate it. Guided by experienced professionals, we focus on delivering solutions rooted in clarity, innovation, and trust — helping organizations grow, adapt, and lead with confidence.</p>

                                </div>


                            </div>

                        </div>
                    </section>

                    <ProjectCount />



                    <div className='flex justify-center mt-[50px]'>
                        <Link className="group text-gray-200 inline-flex items-center gap-2 bg-[var(--dark-purple)] py-[7px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer max-md:py-[10px] max-md:px-[25px] max-md:text-[18px] max-md:gap-[10px]">
                            <span className="group-hover:text-white">More</span>
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />
                        </Link>
                    </div>
                </main>

                <section className='blue-box h-auto w-full py-[100px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[27px]'>what we do</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px] max-md:max-w-none max-md:text-[16px] max-md:leading-[30px]'>
                                We develop cutting-edge solutions tailored to your organization's unique needss.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 my-[40px] gap-[20px] max-md:grid-cols-1 max-md:gap-[30px]">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px]  max-md:gap-[15px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px] max-md:text-[16px] max-md:leading-[35px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px] max-md:text-[14px] max-md:leading-[30px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px] max-md:gap-[15px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px] max-md:text-[16px] max-md:leading-[35px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px] max-md:text-[14px] max-md:leading-[30px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px] max-md:gap-[15px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px] max-md:text-[16px] max-md:leading-[35px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px] max-md:text-[14px] max-md:leading-[30px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px] max-md:gap-[15px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px] max-md:text-[16px] max-md:leading-[35px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px] max-md:text-[14px] max-md:leading-[30px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[100px]'>
                    <div className="short-section">

                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[35px] max-md:text-[30px]'>product highlights</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px] max-md:text-[16px] max-md:leading-[25px] max-md:max-w-[100%]'>Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement,</p>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <div className="flex items-stretch gap-[30px] my-[50px]">

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[150%] max-md:max-w-[150%] max-md:h-[300px] max-lg:min-w-[60%] max-lg:max-w-[60%]">
                                    <img src={foodbankImg} alt="" className='w-full h-full object-cover' />
                                </div>

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[150%] max-md:max-w-[150%] max-md:h-[300px] max-lg:min-w-[60%] max-lg:max-w-[60%]">
                                    <img src={goShortletImg} alt="" className='w-full h-full object-cover' />
                                </div>

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[150%] max-md:max-w-[150%] max-md:h-[300px] max-lg:min-w-[60%] max-lg:max-w-[60%]">
                                    <img src={foodbankImg} alt="" className='w-full h-full object-cover' />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[100px]'>
                    <div className="short-section flex gap-[50px] max-md:flex-col">
                        <div className="flex flex-col gap-2 max-w-[600px] gap-[20px] max-lg:max-w-[45%]">
                            <h3 className='text-white capitalize font-bold text-[30px] leading-[40px] max-md:text-[24px] max-md:leading-[3=50px] max-lg:text-[34px]'>Expertise Without Borders: Collaborate with Us</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[400px] max-md:text-[18px] max-md:leading-[30px] max-md:max-w-[100%]'>We develop cutting-edge solutions tailored to your organization's unique needs.</p>
                        </div>

                        <div className="flex flex-col flex-1 gap-[15px] max-md:gap-[30px]">
                            <p className='text-gray-200 font-light text-sm leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>Collaborate with our diverse team of experts across different professions to solve Your work place problem</p>
                            <p className='text-gray-400 font-light text-sm leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>Reports that describe the past but don't guide the future</p>

                            <div className='leading-[35px]'>
                                <p className='text-[var(--dark-orange)] capitalize font-semibold text-normal leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>Let Help You identify Challenges.</p>
                                <p className='text-gray-400 font-light text-sm leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>Our Team is ready to jump in as per your request to analysis and identify problem</p>
                            </div>
                            <div className='leading-[35px]'>
                                <p className='text-[var(--dark-orange)] capitalize font-semibold text-sm leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>And Solve Them</p>
                                <p className='text-gray-400 font-light text-sm leading-[20px] max-md:text-[16px] max-md:leading-[30px] max-md:max-w-[100%]'>We propose and provide solution to the problem respectively.</p>
                            </div>

                        </div>


                    </div>
                </section>


                <section className='blue-box h-auto w-full py-[100px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[35px] max-md:text-[30px] max-md:leading-[45px]'>why choose <span className='text-[var(--dark-orange)]'>sovereign</span></h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px] max-md:text-[16px] max-md:leading-[25px] max-md:max-w-[100%]'>We're dedicated to helping organizations like yours thrive. Discover why we're the trusted partner for workplace well-being solutions.</p>
                        </div>

                        <div className="grid grid-cols-2 mt-[40px] mb-[20px] gap-[20px] max-md:grid-cols-1">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[12px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:gap-[20px]">
                                <p className='text-gray-400 text-sm font-light text-normal max-md:text-[16px]'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px] max-md:text-[22px]'>personalized support</p>
                            </div>
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[12px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px]  max-md:gap-[20px]">
                                <p className='text-gray-400 text-sm font-light text-normal max-md:text-[16px]'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px] max-md:text-[22px]'>personalized support</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-1">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[12px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px]  max-md:gap-[20px]">
                                <p className='text-gray-400 text-sm font-light text-normal max-md:text-[16px]'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px] max-md:text-[22px]'>personalized support</p>
                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[12px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:gap-[20px]">
                                <p className='text-gray-400 text-sm font-light text-normal max-md:text-[16px]'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px] max-md:text-[22px]'>personalized support</p>
                            </div>
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[12px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:gap-[20px]">
                                <p className='text-gray-400 text-sm font-light text-normal max-md:text-[16px]'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px] max-md:text-[22px]'>personalized support</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[70px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[35px] max-md:text-[27px]'>our working process</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px] max-md:text-[15px]'>How We Collaborate with You to Achieve Workplace Excellence</p>
                        </div>



                        <div className='w-full overflow-x-auto'>
                            <div className="flex items-stretch gap-[20px] my-[40px]">
                                <div className="bg-gray min-w-[25%] max-w-[25%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[90%] max-md:max-w-[90%] max-lg:min-w-[40%] max-lg:max-w-[40%]">
                                    <Link
                                        className="group h-[50px] w-[50px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={['fab', 'tiktok']}
                                            className="text-[var(--dark-orange)]"
                                        />
                                    </Link>
                                    <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                                    <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>We start by identifying real-world challenges faced by employees and employers, conducting in-depth research and market analysis to pinpoint pain points and unmet needs.</p>

                                </div>
                                <div className="bg-gray min-w-[25%] max-w-[25%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[90%] max-md:max-w-[90%] max-lg:min-w-[40%] max-lg:max-w-[40%]">
                                    <Link
                                        className="group h-[50px] w-[50px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={['fab', 'tiktok']}
                                            className="text-[var(--dark-orange)]"
                                        />
                                    </Link>
                                    <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                                    <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>We start by identifying real-world challenges faced by employees and employers, conducting in-depth research and market analysis to pinpoint pain points and unmet needs.</p>

                                </div>
                                <div className="bg-gray min-w-[25%] max-w-[25%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[90%] max-md:max-w-[90%] max-lg:min-w-[40%] max-lg:max-w-[40%]">
                                    <Link
                                        className="group h-[50px] w-[50px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={['fab', 'tiktok']}
                                            className="text-[var(--dark-orange)]"
                                        />
                                    </Link>
                                    <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                                    <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>We start by identifying real-world challenges faced by employees and employers, conducting in-depth research and market analysis to pinpoint pain points and unmet needs.</p>

                                </div>
                                <div className="bg-gray min-w-[25%] max-w-[25%] hover:bg-[var(--dark-blue2)] flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[90%] max-md:max-w-[90%] max-lg:min-w-[40%] max-lg:max-w-[40%]">
                                    <Link
                                        className="group h-[50px] w-[50px] rounded-full border border-[var(--dark-orange)] bg-[var(--lighter-orange)] flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={['fab', 'tiktok']}
                                            className="text-[var(--dark-orange)]"
                                        />
                                    </Link>
                                    <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                                    <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>We start by identifying real-world challenges faced by employees and employers, conducting in-depth research and market analysis to pinpoint pain points and unmet needs.</p>

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

export default Home