import React, { useEffect, useRef, useState } from "react";

const ProjectCount = () => {
  const [year, setYear] = useState(0);
  const [projects, setProjects] = useState(0);
  const [retention, setRetention] = useState(0);
  const [services, setServices] = useState(0);

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateValue = (setter, endValue, duration = 1500) => {
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(progress * endValue);

        setter(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animateValue(setYear, 2020, 1500);
            animateValue(setProjects, 10, 1500);
            animateValue(setRetention, 95, 1500);
            animateValue(setServices, 5, 1500);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full bg-black py-[50px]"
        data-aos="fade-up"
      >
        <div className="short-section bg-black h-auto pt-[50px] max-md:pt-[30px]">
          <div className="grid grid-cols-4 gap-[60px] max-md:grid-cols-1 max-lg:grid-cols-2">

            {/* Counter 1 */}
            <div className="flex flex-col gap-[2px]">
              <h3 className="num-count text-white font-black text-[50px]">
                {year.toLocaleString()}
              </h3>
              <div className="flex flex-col gap-[5px] max-md:gap-[12px]">
                <p className="text-white font-semibold text-normal leading-[20px] max-md:text-[18px]">
                  Year of establishment
                </p>
                <p className="text-gray-400 font-light text-normal leading-[20px] max-md:text-[16px]">
                  More than 10 years in the field.
                </p>
              </div>
              <div className="dot-stack flex items-center mt-[10px] max-md:mt-[15px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col gap-[2px]">
              <h3 className="num-count text-white font-black text-[50px]">
                {projects}+
              </h3>
              <div className="flex flex-col gap-[5px] max-md:gap-[12px]">
                <p className="text-white font-semibold text-normal leading-[20px] max-md:text-[18px]">
                  Projects are launched
                </p>
                <p className="text-gray-400 font-light text-normal leading-[20px] max-md:text-[16px]">
                  A lot of projects are done
                </p>
              </div>
              <div className="dot-stack flex items-center mt-[10px] max-md:mt-[15px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>
            </div>

            {/* Counter 3 */}
            <div className="flex flex-col gap-[2px]">
              <h3 className="num-count text-white font-black text-[50px]">
                {retention}%
              </h3>
              <div className="flex flex-col gap-[5px] max-md:gap-[12px]">
                <p className="text-white font-semibold text-normal leading-[20px] max-md:text-[18px]">
                  Client Retention Rate
                </p>
                <p className="text-gray-400 font-light text-normal leading-[20px] max-md:text-[16px]">
                  These people love us
                </p>
              </div>
              <div className="dot-stack flex items-center mt-[10px] max-md:mt-[15px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>
            </div>

            {/* Counter 4 */}
            <div className="flex flex-col gap-[2px]">
              <h3 className="num-count text-white font-black text-[50px]">
                {services}+
              </h3>
              <div className="flex flex-col gap-[5px] max-md:gap-[12px]">
                <p className="text-white font-semibold text-normal leading-[20px] max-md:text-[18px]">
                  Services
                </p>
                <p className="text-gray-400 font-light text-normal leading-[20px] max-md:text-[16px]">
                  What we do right now
                </p>
              </div>
              <div className="dot-stack flex items-center mt-[10px] max-md:mt-[15px]">
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
                <span className="dot p-[15px] rounded-full w-[18px] h-[18px] border-[2px] border-[var(--ring-color)] bg-[var(--bg-color)] ml-[-10px]"></span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCount;