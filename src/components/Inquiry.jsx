import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Inquiry = () => {
  return (
    <div>
      <section className='bg-black py-[50px] h-auto w-full'>
        <div className="short-section">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className='text-white capitalize font-bold text-[30px]'>have an inquiry?</h3>
            <p className='text-gray-400 font-light text-normal leading-[20px] max-w-[600px] max-md:text-[14px] max-md:w-[100%]'>Send us a message if You don't want to book a meeting at this time, and we'll get back to you within 24 hours.</p>
            <Link className="text-white inline-flex items-center gap-2 bg-[var(--dark-orange)] py-[10px] px-[30px] rounded-[35px] hover:bg-orange-400 cursor-pointer mt-[20px]">
              <span>Send a Message</span>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="group-hover:text-white" size="xs" />

            </Link>
          </div>

        </div>


      </section>



    </div>
  )
}

export default Inquiry