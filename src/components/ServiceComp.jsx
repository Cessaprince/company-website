import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceComp = () => {
    return (
        <div>

            <div className="w-full">
                
                <div className="flex flex-col gap-[5px] rounded-[15px] p-[25px] bg-white">
                    <span className='text-[var(--dark-orange)] uppercase text-xs font-semibold max-md:text-[10px]'>what we do</span>
                    <h1 className='text-black font-bold capitalize text-[20px] max-md:text-[18px]'>problem solving</h1>
                    <span className="text-gray-400 text-xs font-light max-md:text-[12px]">
                        Partner with our experts to create a workplace that thrives.
                    </span>
                    {/* the icons of identify, develop, implement etc*/}
                    <div className="grid grid-cols-6 mt-[20px] max-md:grid-cols-3 max-lg:gap-[20px]">
                        {/* magnifying glass*/}

                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'magnifying-glass']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>identify</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>

                        {/* lightbulb*/}
                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'lightbulb']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>develop</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>
                        {/* settings */}
                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'gear']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>implement</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>

                        {/* graph */}
                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'chart-column']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>monitor</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>

                        {/* spiral */}
                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'spiral']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>adjust</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>

                        {/* laptop */}
                        <div className="flex flex-col gap-[3px] items-center justify-center">
                            <div className="group rounded-[50%] bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                                <FontAwesomeIcon icon={['fas', 'spiral']} size="sm" className='text-blue-600 font-light' />
                            </div>
                            <p className='text-black font-bold capitalize text-[12px] max-lg:text-[9px]'>result</p>

                            <span className="text-gray-400 text-[8px] font-light text-center">
                                We assess your unique challenges and goals.
                            </span>
                        </div>


                    </div>

                    <div className="bg-gray-100 p-[10px] w-full rounded-[5px] mt-[13px]">
                        <p className="text-gray-400 text-[9.5px] font-light max-md:text-[7px]">🇳🇬 Proudly empowering organizations across Nigeria with tailored solutions for lasting impact.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceComp