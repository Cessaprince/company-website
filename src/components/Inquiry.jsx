import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Inquiry = () => {
  return (
    <div>
      <section className='bg-black py-[50px] h-auto w-full'>
        <div className="short-section">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className='text-white capitalize font-bold text-[40px]'>have an enquiry?</h3>
            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px]'>Send us a message if You don't want to book a meeting at this time, and we'll get back to you within 24 hours.</p>
            <Link className="text-white inline-flex items-center gap-2 bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[20px]">
              <span>Send a Message</span>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />

            </Link>
          </div>

        </div>

        <div className='border-[0.09px] border-collapse w-full h-full border-gray-600 mt-[80px] mb-[40px]'></div>

      </section>



    </div>
  )
}

export default Inquiry