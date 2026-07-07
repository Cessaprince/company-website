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
                        <div className="mx-auto my-[35px] w-[90%] max-w-[90%] max-w-[900px]">
                            <h3 className='capitalize text-white text-[70px] font-black leading-[65px] text-center max-md:text-[37px] max-md:leading-[39px]'>Partner with <span className='text-[var(--dark-orange)]'>sovereign tech </span>for cutting-edge solutions</h3>
                            <div className="mx-auto my-[30px] w-[600px] max-w-[65%] max-md:w-[100%] max-md:max-w-[100%]">
                                <p className='text-white font-light leading-[25px] text-center '>
                                    At Sovereign, we design and develop web and mobile applications globally,
                                    focusing on outstanding user experience.
                                </p>
                                <div className="flex gap-[15px] justify-center mt-[30px]">
                                    <Link type="button" className='capitalize text-white py-[10px] font-[500] px-[30px] bg-[var(--dark-orange)] rounded-[25px] hover:bg-orange-400'>get started</Link>
                                    <Link type="button" className='capitalize text-white py-[10px] font-[500] px-[30px] bg-gray-900 border-gray-500 border-[1px] rounded-[25px] hover:bg-gray-800'>see our solutions</Link>

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
                            <div className="flex flex-col gap-[20px]">
                                <div className='leading-[35px]'>
                                    <h3 className='font-bold capitalize text-[35px] text-white'><span className='text-gray-400'>more than</span> technology</h3>
                                    <h3 className='font-bold capitalize text-[35px] text-white'>we bring clarity to decisions</h3>
                                </div>
                                <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[70%] max-md:max-w-[100%]'>We develop cutting-edge solutions tailored to your organization's unique needs. At <i className='text-[var(--dark-orange)]'>Sovereign Tech </i>and Innovations, we help your business to the next levelfor cutting-edge solutions</p>

                                <div className='leading-[35px]'>
                                    <p className='text-white font-light text-normal leading-[20px]'>We don't sell off-the-shelf products.</p>
                                    <p className='text-white font-light text-normal leading-[20px]'>We work alongside teams to solve real business problems.</p>
                                </div>

                                <div className="flex gap-[20px] py-[30px] max-md:flex-col">
                                    <p className='text-gray-400 font-light text-normal leading-[20px] capitalize'>who we are</p>
                                    <p className='text-white font-light text-normal leading-[20px]  max-w-[70%] max-md:max-w-[100%]'>Sovereign Tech & Innovations was founded on a simple belief: technology should empower progress, not complicate it. Guided by experienced professionals, we focus on delivering solutions rooted in clarity, innovation, and trust — helping organizations grow, adapt, and lead with confidence.</p>

                                </div>


                            </div>

                        </div>
                    </section>

                    <ProjectCount />



                    <div className='flex justify-center mt-[50px]'>
                        <Link className="group text-gray-200 inline-flex items-center gap-2 bg-[var(--dark-purple)] py-[7px] px-[20px] rounded-[35px] hover:bg-[var(--light-purple2)] cursor-pointer">
                            <span className="group-hover:text-white">More</span>
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />
                        </Link>
                    </div>
                </main>

                <section className='blue-box h-auto w-full py-[100px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[40px]'>what we do</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>We develop cutting-edge solutions tailored to your organization's unique needs.</p>
                        </div>

                        <div className="grid grid-cols-3 my-[40px] gap-[20px] max-md:grid-cols-1">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] p-[30px] h-auto rounded-[10px]">
                                <p className='text-white uppercase font-bold text-[19px] leading-[25px]'>next level e-commerce solutions</p>
                                <p className='text-gray-400 text-sm font-light text-normal leading-[20px]'>Our team builds fast-loading, high-converting headless eCommerce websites for enterprise brands, driving their growth in the competitive digital landscape.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[100px]'>
                    <div className="short-section">

                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[40px]'>product highlights</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>Partner with our experts to create a workplace that thrives. We collaborate closely with you to understand your organization's unique challenges and goals, developing customized solutions that drive innovative strategies, measurable results, enhanced employee engagement,</p>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <div className="flex items-stretch gap-[20px] my-[50px]">

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[80%] max-md:max-w-[80%]">
                                    <img src={foodbankImg} alt="" className='w-full h-full object-cover' />
                                </div>

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[80%] max-md:max-w-[80%]">
                                    <img src={goShortletImg} alt="" className='w-full h-full object-cover' />
                                </div>

                                <div className="h-[250px] min-w-[40%] max-w-[40%] border-gray-500 border-[0.1px] rounded-[10px] overflow-hidden max-md:min-w-[80%] max-md:max-w-[80%]">
                                    <img src={foodbankImg} alt="" className='w-full h-full object-cover' />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[100px]'>
                    <div className="short-section flex gap-[50px] max-md:flex-col">
                        <div className="flex flex-col gap-2 w-[600px] gap-[20px]">
                            <h3 className='text-white capitalize font-bold text-[40px] leading-[40px]'>Expertise Without Borders: Collaborate with Us</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[400px]'>We develop cutting-edge solutions tailored to your organization's unique needs.</p>
                        </div>

                        <div className="flex flex-col flex-1 gap-[15px]">
                            <p className='text-gray-200 font-light text-sm leading-[20px]'>Collaborate with our diverse team of experts across different professions to solve Your work place problem</p>
                            <p className='text-gray-400 font-light text-sm leading-[20px]'>Reports that describe the past but don't guide the future</p>

                            <div className='leading-[35px]'>
                                <p className='text-[var(--dark-orange)] capitalize font-semibold text-normal leading-[20px]'>Let Help You identify Challenges.</p>
                                <p className='text-gray-400 font-light text-sm leading-[20px]'>Our Team is ready to jump in as per your request to analysis and identify problem</p>
                            </div>
                            <div className='leading-[35px]'>
                                <p className='text-[var(--dark-orange)] capitalize font-semibold text-sm leading-[20px]'>And Solve Them</p>
                                <p className='text-gray-400 font-light text-sm leading-[20px]'>We propose and provide solution to the problem respectively.</p>
                            </div>

                        </div>


                    </div>
                </section>


                <section className='blue-box h-auto w-full py-[100px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[40px]'>why choose <span className='text-[var(--dark-orange)]'>sovereign</span></h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>we're dedicated to helping organizations like yours thrive. Discover why we're the trusted partner for workplace well-being solutions.</p>
                        </div>

                        <div className="grid grid-cols-2 mt-[40px] mb-[20px] gap-[20px] max-md:grid-cols-1">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[20px] h-auto rounded-[10px] max-md:py-[35px]">
                                <p className='text-gray-400 text-sm font-light text-normal'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[20px] h-auto rounded-[10px] max-md:py-[35px]">
                                <p className='text-gray-400 text-sm font-light text-normal'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px]'>next level e-commerce solutions</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-1">
                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[20px] h-auto rounded-[10px] max-md:py-[35px]">
                                <p className='text-gray-400 text-sm font-light text-normal'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px]'>personalised support</p>
                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[20px] h-auto rounded-[10px] max-md:py-[35px]">
                                <p className='text-gray-400 text-sm font-light text-normal'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px]'>next level e-commerce solutions</p>
                            </div>

                            <div className="bg-gray-900 hover:bg-gray-800 cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[20px] h-auto rounded-[10px] max-md:py-[35px]">
                                <p className='text-gray-400 text-sm font-light text-normal'>Our dedicated team provides ongoing support and guidance</p>
                                <p className='text-white capitalize font-bold text-[19px]'>next level e-commerce solutions</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-black h-auto w-full py-[70px]'>
                    <div className="short-section">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white capitalize font-bold text-[40px]'>our working process</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>How We Collaborate with You to Achieve Workplace Excellence</p>
                        </div>



                        <div className='w-full overflow-x-auto'>
                            <div className="flex items-stretch gap-[20px] my-[40px]">
                                <div className="bg-gray min-w-[30%] max-w-[30%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[60%] max-md:max-w-[60%]">
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
                                <div className="bg-gray min-w-[30%] max-w-[30%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[60%] max-md:max-w-[60%]">
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
                                <div className="bg-gray min-w-[30%] max-w-[30%] hover:bg-[var(--dark-blue2)] cursor-pointer flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[60%] max-md:max-w-[60%]">
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
                                <div className="bg-gray min-w-[30%] max-w-[30%] hover:bg-[var(--dark-blue2)] flex flex-col gap-[10px] border-gray-500 border-[0.1px] px-[30px] py-[30px] h-auto rounded-[10px] max-md:min-w-[60%] max-md:max-w-[60%]">
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
                <Footer/>

            </div>
        </div>
    )
}

export default Home