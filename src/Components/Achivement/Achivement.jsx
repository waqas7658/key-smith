import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Achivement = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="lg:py-20">
        <div className=" text-center">
          <h1 className="text-[35px] font-extrabold lg:text-[48px] leading-[56px] drop-shadow-lg">
            Achievement
          </h1>

          <div class="h-1  my-2 w-[5rem] mx-auto rounded drop-shadow-md bg-blue-500 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
            {/* <hr className=" my-2 w-64 mx-auto text-blue-600 font-bold" /> */}
          </div>
        </div>
        <div>
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
              <div class="text-center md:border-r">
                <div className=" flex justify-center">
                  <CountUp
                    start={0}
                    end={2000}
                    enableScrollSpy
                    className="text-4xl font-bold lg:text-5xl xl:text-6xl"
                  />
                  <p className=" text-4xl font-bold lg:text-5xl xl:text-6x">
                    +
                  </p>
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  Happy Clients
                </p>
              </div>
              <div class="text-center md:border-r">
                <div className=" flex justify-center">
                  <CountUp
                    start={0}
                    end={15}
                    enableScrollSpy
                    className="text-4xl font-bold lg:text-5xl xl:text-6xl"
                  />
                  <p className=" text-4xl font-bold lg:text-5xl xl:text-6x">
                    Years+
                  </p>
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  Experiences
                </p>
              </div>
              <div class="text-center md:border-r">
                <div className=" flex justify-center">
                  <CountUp
                    start={0}
                    end={4500}
                    enableScrollSpy
                    className="text-4xl font-bold lg:text-5xl xl:text-6xl"
                  />
                  <p className=" text-4xl font-bold lg:text-5xl xl:text-6x">
                    +
                  </p>
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  Cars & Bikes Keys
                </p>
              </div>
              <div class="text-center md:border-r">
                <div className=" flex justify-center">
                  <CountUp
                    start={0}
                    end={1500}
                    enableScrollSpy
                    className="text-4xl font-bold lg:text-5xl xl:text-6xl"
                  />
                  <p className=" text-4xl font-bold lg:text-5xl xl:text-6x">
                    +
                  </p>
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  Home Key Duplication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achivement;
