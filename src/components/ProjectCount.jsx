import React from 'react'

const ProjectCount = () => {
  return (
    <div>
      <section>
        <div className="short-section bg-black h-auto pt-[50px]">
          <div className="grid grid-cols-4">
            <div className='flex flex-col gap-[2px]'>
              <h3 className='num-count text-white font-black text-[50px]'>2,020</h3>
              <div className="leading-[5px]">
                <p className='text-white font-semibold text-normal leading-[20px]'>Year of establishment.</p>

                <p className='text-gray-400 font-light text-normal leading-[20px]'>More than 10 years in the field.</p>


              </div>
              <div className="dot-stack flex items-center mt-[10px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>

            </div>

            <div className='flex flex-col gap-[2px]'>
              <h3 className='num-count text-white font-black text-[50px]'>10+</h3>
              <div className="leading-[5px]">
                <p className='text-white font-semibold text-normal leading-[20px]'>Projects are launched</p>

                <p className='text-gray-400 font-light text-normal leading-[20px]'>A lot of projects are done</p>


              </div>
              <div className="dot-stack flex items-center mt-[10px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>

            </div>

            <div className='flex flex-col gap-[2px]'>
              <h3 className='num-count text-white font-black text-[50px]'>95%</h3>
              <div className="leading-[5px]">
                <p className='text-white font-semibold text-normal leading-[20px]'>Client Retention Rate</p>

                <p className='text-gray-400 font-light text-normal leading-[20px]'>More than 10 years in the field.</p>


              </div>
              <div className="dot-stack flex items-center mt-[10px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>

            </div>

            <div className='flex flex-col gap-[2px]'>
              <h3 className='num-count text-white font-black text-[50px]'>5+</h3>
              <div className="leading-[5px]">
                <p className='text-white font-semibold text-normal leading-[20px]'>Services</p>

                <p className='text-gray-400 font-light text-normal leading-[20px]'>What do we do right now</p>


              </div>
              <div className="dot-stack flex items-center mt-[10px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectCount
