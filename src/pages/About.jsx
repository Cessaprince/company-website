import React from 'react'
import Header from '../components/Header'
import aboutUs from '../images/pictures/aboutUsImg.png'
import ProjectCount from '../components/ProjectCount'
import Inquiry from '../components/Inquiry'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <div className="flex flex-col w-full">
                <Header />

                <section className='blue-box h-auto w-full'>
                    <div className="short-section pt-[70px] pb-[120px]" data-aos='fade-up' data-aos-dealy='100'>
                        <div className="flex flex-col items-center text-center leading-[40px] w-full">
                            <span className='text-[var(--dark-orange)] font-[500] capitalize'>home/about</span>
                            <h3 className='text-white capitalize font-black text-[50px] max-md:text-[27px]'>who we are</h3>
                            <p className='text-gray-400 font-light text-base leading-[25px] max-w-[600px] pt-[20px] max-md:text-[14px] max-md:max-w-[100%]'>
                                Sovereign Tech & Innovations was founded on a simple belief: technology should empower progress, not complicate it. Guided by experienced professionals, we focus on delivering solutions rooted in clarity, innovation, and trust — helping organizations grow, adapt, and lead with confidence.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='blue-box h-auto w-full pt-[30px]'>
                    <div className="short-section" data-aos='fade-up' data-aos-dealy='100'>
                        <div className="flex gap-[50px] pt-[30px] pb-[60px] max-md:flex-col ">
                            <div className="w-[50%] flex flex-col gap-[25px] max-md:w-[100%] max-md:gap-[15px]">
                                <h3 className='text-white capitalize font-bold text-[30px] leading-[40px] max-md:text-[24px]'>everything about sovereign</h3>
                                <p className='text-gray-400 font-light text-[15px] leading-[20px] max-md:text-[12px]'>At Sovereign Technology and Innovation Limited, our guiding principle is the innovative application of technology to solve pressing real-world issues. We have embraced a powerful mission: to enhance the lives of dedicated individuals, significantly influencing their everyday experiences.</p>
                                <p className='text-gray-400 font-light text-[15px] leading-[20px] max-md:text-[12px]'>Our relentless pursuit of employee well-being and convenience underscores our unwavering commitment to progress, epitomized by our pioneering product, Foodbank.</p>
                                <p className='text-gray-400 font-light text-[15px] leading-[20px] max-md:text-[12px]'>We envision a future where essential resources are effortlessly accessible, and workplaces are hubs of contentment and productivity. In our steadfast pursuit of this vision, we aim to lead as trailblazers, setting new standards with groundbreaking solutions that not only redefine the modern workplace but also inspire a broader global transformation toward a more empowered, fulfilled workforce.</p>
                            </div>

                            <div className="flex-1 w-full relative max-md:w-[100%] max-md:flex max-lg:w-[35%]">
                                <div className='w-[500px] h-[250px] rounded-[15px] overflow-hidden relative max-md max-lg:w-full'>
                                    <img src={aboutUs} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='w-[400px] h-[250px] rounded-[15px] overflow-hidden border-[6px] border-[var(--dark-blue2)] absolute top-[35%] left-[30%] max-md:hidden max-lg:w-[250px] max-lg:left-[30%] max-lg:top-[30%]'>
                                    <img src={aboutUs} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission and Vision Grid Section */}
                <section className='bg-black pt-[50px] w-full'>
                    <div className="short-section" data-aos='fade-up' data-aos-dealy='100'>
                        <div className="grid grid-cols-2 pt-[70px] max-md:grid-cols-1">
                            <div className='bg-[var(--dark-blue2)] px-[30px] pt-[30px] pb-[35px] flex flex-col gap-[20px] border-[0.1px] rounded-tl-[15px] rounded-bl-[15px] border-gray-800 max-md:w-[100%] max-md:rounded-bl-[0px] max-md:rounded-tr-[15px]'>
                                <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px]">
                                    our mission
                                </span>
                                <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:text-[14px] max-md:leading-[20px] max-lg:leading-[30px] max-lg:text-[20px]'>sovereign's commitment & mission</h3>
                                <p className='text-gray-400 font-light text-[15px] leading-[20px] max-md:text-[10px] '>At Sovereign Technology and Innovation Limited, our mission is to transform the lives of working individuals by harnessing the power of technology to address real-world challenges. We are committed to providing innovative solutions that enhance workplace well-being and convenience. Our focus on helping salary earners access essential resources, like food, reflects our dedication to making a meaningful impact on their lives.</p>
                            </div>

                            <div className='bg-[var(--dark-blue1)] px-[30px] pt-[30px] pb-[35px] flex flex-col gap-[20px] border-[0.1px] border-gray-800 rounded-tr-[15px] rounded-br-[15px] max-md:w-[100%] max-md:rounded-bl-[15px] max-md:rounded-tr-[0px]'>
                                <span className="font-light text-gray-300 bg-gray-800 border-[1px] border-gray-500 rounded-full py-[4px] px-[15px] w-fit capitalize max-md:text-[12px] ">
                                    our vision
                                </span>
                                <h3 className='text-white capitalize font-bold text-[25px] leading-[40px] max-md:text-[14px] max-md:leading-[20px] max-lg:leading-[30px] max-lg:text-[20px]'>sovereign's vision for excellence</h3>
                                <p className='text-gray-400 font-light text-[15px] leading-[20px] max-md:text-[10px] '>Our vision at Sovereign Technology and Innovation Limited is to be a pioneering force in the field of technology-driven employee benefits, forever changing the landscape of workplace well-being. We aspire to be recognized as the go-to provider for convenient, innovative solutions that empower individuals and employers alike. With relentless dedication to problem-solving and a commitment to excellence, we aim to positively influence the working world's future, one innovative solution at a time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ProjectCount />

                <Inquiry />
                <Footer/>
            </div>
        </div>
    )
}

export default About