import React from 'react'
import Header from '../components/Header'
import Inquiry from '../components/Inquiry'
import sovereignGoShortlet from '../images/pictures/sovereignImg2.png'
import foodbankMobile from '../images/pictures/foodbankMobile.png'
import goShortletMobile from '../images/pictures/goShortletMobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import team from '../images/pictures/sovereignTeam.png'
import Footer from '../components/Footer'

const Product = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div>
            <div>
                <Header />

                <section className="blue-box">
                    <div className="short-section text-white py-[50px]">
                        <div className="flex flex-col items-center text-center leading-[40px] w-full">
                            <span className='text-[var(--dark-orange)] font-[500] capitalize'>home/services</span>
                            <h3 className='text-white capitalize font-black text-[50px]'>our products</h3>
                            <p className='text-gray-400 font-light text-base leading-[25px] max-w-[600px] pt-[20px]'>
                                Our experts will guide you in integrating innovative technology solutions that elevate employee satisfaction and streamline benefits administration. By leveraging cutting-edge tools, you'll boost engagement
                            </p>
                        </div>

                        <div className="w-full h-[600px] overflow-hidden mt-[50px] rounded-[15px] border-[1px]">
                            <img src={sovereignGoShortlet} alt="" className='w-full h-full object-cover' />

                        </div>
                    </div>


                </section>

                <section className='bg-black py-[50px]'>
                    <div className="short-section flex flex-col gap-[40px]">
                        <div className="flex items-center justify-center gap-[40px]">
                            <div className="h-[500px] w-[50%] overflow-hidden">
                                <img src={foodbankMobile} alt="" className='h-full w-full object-contain' />

                            </div>

                            <div className="flex flex-col gap-[10px] flex-1">
                                <div className="flex gap-[10px] items-center">
                                    <div className='bg-green-300 h-[50px] w-[50px] rounded-[15px] flex items-center justify-center'>
                                        <FontAwesomeIcon icon={['far', 'house']} style={{ color: "#ffffff", }} size='xl' />
                                    </div>
                                    <h3 className='text-white capitalize font-black text-[30px]'>foodbank</h3>
                                </div>
                                <p className='text-gray-400 font-light text-sm leading-[25px] max-w-[600px] pt-[20px]'>
                                    Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs. Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs. Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs
                                </p>
                            </div>
                        </div>


                        {/* go shortlet*/}
                        <div className="flex items-center justify-center gap-[40px]">


                            <div className="flex flex-col gap-[10px] flex-1">
                                <div className="flex gap-[10px] items-center">
                                    <div className='bg-gray-900 h-[50px] w-[50px] rounded-[15px] flex items-center justify-center'>
                                        <FontAwesomeIcon icon={['far', 'house']} style={{ color: "#ffffff", }} size='xl' />
                                    </div>
                                    <h3 className='text-white uppercase font-black text-[30px]'>go shortlet</h3>
                                </div>
                                <p className='text-gray-400 font-light text-sm leading-[25px] max-w-[600px] pt-[20px]'>
                                    Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs. Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs. Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our outright provisions grant stable access to wholesome meals, unaffected by life's financial ups and downs
                                </p>
                            </div>

                            <div className="h-[500px] w-[50%] overflow-hidden">
                                <img src={goShortletMobile} alt="" className='h-full w-full object-contain' />

                            </div>
                        </div>

                    </div>

                </section>


                <section className='bg-black py-[100px]'>
                    <div className="short-section">

                        <div className="flex flex-col items-center gap-2 text-center">
                            <h3 className='text-white uppercase font-bold text-[40px]'>who our services/products are for</h3>
                            <p className='text-gray-400 font-light text-normal leading-[20px] w-[70%]'>Sovereign provides services to organizations across industries seeking to operate smarter, grow faster, and make better decisions through structured systems and data-driven intelligence.

                            </p>
                        </div>

                        <div className="flex items-center gap-[30px] my-[60px]">
                            <div className="blue-box w-[50%] h-full py-[60px] px-[30px] rounded-[15px] border-[0.1px] border-gray-600">
                                <div className="h-full w-full overflow-hidden rounded-[15px]">
                                    <img src={team} alt="" className='w-full h-full object-cover' />

                                </div>
                            </div>

                            <div className="flex flex-col flex-1 gap-[12px]">

                                {/* each */}
                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between items-center bg-[var(--dark-blue2)] hover:cursor-pointer p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Small and medium-sized</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


                                </div>

                                <div onClick={() => scrollToSection("myHeader")} className="flex justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[15px] hover:border-[var(--dark-orange)]">

                                    <div className="flex flex-col leading-[20px]">
                                        <h3 className='text-white font-light text-[15px]'>Growing startups</h3>
                                        <p className='text-gray-400 text-sm font-light text-normal leading-[20px] w-[70%]'>All sector </p>
                                    </div>

                                    <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: "#f2641e", }} />


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

export default Product