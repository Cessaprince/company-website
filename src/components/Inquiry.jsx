import React from 'react'
import logo from "../images/pictures/sovereign-logo.png";
import rightArrow from "../images/icons/arrow-right.jpg";
import { Link } from 'react-router-dom';
import lightbulbImg from '../images/icons/lightbulb.png';

const Inquiry = () => {
  return (
    <div>
      <section className='bg-black py-[50px] h-auto'>
        <div className="short-section">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className='text-white capitalize font-bold text-[40px]'>have an enquiry?</h3>
            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>Send us a message if You don't want to book a meeting at this time, and we'll get back to you within 24 hours.</p>
            <button className="text-white inline-flex items-center gap-2 bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[20px]">
              <span>Send a Message</span>
              <span className="overflow-hidden w-[10px] h-[10px]">
                <img src={rightArrow} alt="" className="h-full w-full object-cover" />
              </span>
            </button>
          </div>

        </div>

        <div className='border-[0.09px] border-collapse w-full h-full border-gray-600 mt-[80px] mb-[40px]'></div>

      </section>


      <section className='bg-black h-auto pb-[50px]'>
        <div className="short-section">
          <div className='flex gap-[25px]'>
            <div className="flex flex-col w-[25%] gap-[10px]">
              <div className='h-[40px] w-[40px] overflow-hidden'>
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

              <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[25px]'>useful links</h3>
              <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>contact us</Link>
              <Link to='' className='text-gray-400 text-sm font-light text-normal leading-[24px] capitalize hover:text-white'>customer service</Link>

            </div>
            <div className="flex-1 flex flex-col gap-[10px]">

              <h3 className='font-bold text-[var(--dark-orange)] capitalize text-[25px]'>Connect with us</h3>
              <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>G & M Place, Igbo-Efon, Lekki, Lagos, Nigeria.</p>
              <p className='text-gray-400 text-sm font-light text-normal leading-[24px]'>1703 Rockhill Rd, #6311, McKinney TX 75069, U.S.A.</p>
              <a href='tel:+2349159855709' className='text-gray-400 text-sm font-light text-normal leading-[24px] hover:text-white'>+2349159855709</a>
              <a href='mailto: cs@sovereigntechltd.com' className='text-gray-400 text-sm font-light text-normal leading-[24px] hover:text-white'>cs@sovereigntechltd.com</a>

            </div>
          </div>
          <div className='border-[0.09px] border-collapse w-full h-full border-gray-600 mt-[80px] mb-[40px]'></div>

          <div className="flex justify-between">
            <p className='text-gray-400 font-light text-normal leading-[24px]'>{"\u00A9"} 2026 Sovereign Technology. All rights reserved.</p>


            {/* bottom right icons */}
            <div className='flex gap-[10px] items-center'>
              <div className='h-[40px] w-[40px] border-[var(--dark-orange)] border-[0.1px] rounded-[50%] bg-[var(--lighter-orange)]  overflow-hidden'>

                <div className='h-full wfull overflow-hidden'>
                  <img src='' alt="" className='h-full w-full object-cover' />

                </div>
              </div>

              <div className='h-[40px] w-[40px] border-[var(--dark-orange)] border-[0.1px] rounded-[50%] bg-[var(--lighter-orange)]  overflow-hidden'>

                <div className='h-full wfull overflow-hidden'>
                  <img src='' alt="" className='h-full w-full object-cover' />

                </div>
              </div>
            </div>
          </div>
        </div>


      </section>




    </div>
  )
}

export default Inquiry