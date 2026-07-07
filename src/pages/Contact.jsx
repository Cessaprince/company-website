import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div>
      <Header />


      <section className='bg-black h-auto py-[50px]'>
        <div className="short-section">
          <div className="flex flex-col items-center text-center leading-[40px] w-full">
            <span className='text-[var(--dark-orange)] font-[500] capitalize'>home/contact us</span>
            <h3 className='text-white capitalize font-black text-[50px]'>contact Us</h3>
            <p className='text-gray-400 font-light text-base leading-[25px] max-w-[600px] pt-[20px]'>
              Have questions, ideas, or projects? Our team is ready to help            </p>
          </div>
        </div>
      </section>


      <section className="bg-black h-auto pt-[10px] pb-[80px]">
        <div className="short-section">
          <div className="flex gap-[30px] items-center justify-center h-auto">
            <div className='w-[50%] flex flex-col gap-[5px] h-full'>
              <h3 className='text-white capitalize font-bold text-[25px]'>get in touch</h3>
              <p className='text-gray-400 font-light text-[16px] leading-[20px]'>Every great inovation starts with a conversation</p>

              <div className="flex flex-col w-full gap-[16px] mt-[15px]">

                <a href='mailto:cs@sovereigntcehltd.com' className="flex h-auto justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[10px] hover:border-gray-400">
                  <div className="flex gap-[10px] items-center">
                    <div className="h-[45px] w-[45px] p-[10px] bg-gray-900 rounded-[10px] flex justify-center items-center">
                      <FontAwesomeIcon icon={['far', 'envelope']} size="" style={{ color: 'white', }} />

                    </div>
                    <div className="flex flex-col">
                      <h3 className='text-white capitalize font-bold text-[16px]'>Email Us</h3>
                      <p className='text-gray-400 font-light text-xs leading-[20px]'>cs@sovereigntechltd.com</p>

                    </div>


                  </div>
                  <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: 'white', }} />

                </a>
                <a href='tel:+2349159855709' className="flex h-auto justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[10px] hover:border-gray-400">
                  <div className="flex gap-[10px] items-center">
                    <div className="h-[45px] w-[45px] p-[10px] bg-gray-900 rounded-[10px] flex justify-center items-center">
                      <FontAwesomeIcon icon={['fas', 'phone']} size="" style={{ color: 'white', }} />

                    </div>
                    <div className="flex flex-col">
                      <h3 className='text-white capitalize font-bold text-[16px]'>Call Us</h3>
                      <p className='text-gray-400 font-light text-xs leading-[20px]'>+2349159855709</p>

                    </div>


                  </div>
                  <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: 'white', }} />

                </a>
                <a href='mailto:cs@sovereigntcehltd.com' className="flex h-auto justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[10px] hover:border-gray-400">
                  <div className="flex gap-[10px] items-center">
                    <div className="h-[45px] w-[45px] p-[10px] bg-gray-900 rounded-[10px] flex justify-center items-center">
                      <FontAwesomeIcon icon={['fas', 'location']} size="" style={{ color: 'white', }} />

                    </div>
                    <div className="flex flex-col">
                      <h3 className='text-white capitalize font-bold text-[16px]'>Email Us</h3>
                      <p className='text-gray-400 font-light text-xs leading-[20px]'>cs@sovereigntechltd.com</p>

                    </div>


                  </div>
                  <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: 'white', }} />

                </a>
                <a href='mailto:cs@sovereigntcehltd.com' className="flex h-auto justify-between hover:cursor-pointer items-center bg-[var(--dark-blue2)] p-[16px] border-[0.1px] border-gray-700 rounded-[10px] hover:border-gray-400">
                  <div className="flex gap-[10px] items-center">
                    <div className="h-[45px] w-[45px] p-[10px] bg-gray-900 rounded-[10px] flex justify-center items-center">
                      <FontAwesomeIcon icon={['fas', 'location']} size="" style={{ color: 'white', }} />

                    </div>
                    <div className="flex flex-col">
                      <h3 className='text-white capitalize font-bold text-[16px]'>Location 2</h3>
                      <p className='text-gray-400 font-light text-xs leading-[20px]'>1703 Rockhill Rd, #6311, McKinney TX75069, U.S.A</p>

                    </div>


                  </div>
                  <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} size="" style={{ color: 'white', }} />

                </a>
              </div>

            </div>

            <div className="flex-1 flex flex-col items-center h-full p-[25px] border-[0.1px] border-gray-700 rounded-[10px]">
              <form action="" className='flex flex-col gap-[18px] w-full'>
                <input type="text" name="" id="" placeholder='Name' className='bg-gray-900 w-full p-[15px] text-gray-100 rounded-[10px] outline-none' />
                <input type="email" name="" id="" placeholder='Email' className='bg-gray-900 w-full p-[15px] text-gray-100 rounded-[10px] outline-none' />
                <textarea name="" id="" cols="30" rows="5" className='bg-gray-900 w-full p-[15px] text-gray-100 rounded-[10px] outline-none' placeholder='Message'></textarea>
                <button type="submit" className='my-[15px] w-full capitalize text-white py-[15px] font-[500] px-[30px] bg-[var(--dark-orange)] rounded-[25px] hover:bg-orange-400'>Send a Message</button>
              </form>

            </div>

          </div>
        </div>

      </section>

      <section className='w-full bg-black py-[50px]'>

        <div className="w-full h-[500px] rounded-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63419.198936570494!2d3.5079538252258358!3d6.55951072876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7adcc820dbb%3A0x81f4e8e53946869c!2sSovereign%20Technology%20and%20Innovations%20Limited!5e0!3m2!1sen!2sng!4v1783439099406!5m2!1sen!2sng"
            className='w-full h-full border-none'
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Sovereign Technology and Innovations Limited Location"></iframe>
        </div>

      </section>

      {/* <div className="p-[50px] bg-black w-full"></div> */}

      <Footer />


    </div>
  )
}

export default Contact