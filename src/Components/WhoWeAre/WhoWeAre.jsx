import React from "react";
import who from "../../assets/Images/who.jpg";
import who1 from "../../assets/Images/2.jpg";
import who2 from "../../assets/Images/lock2.jpg";
const WhoWeAre = () => {
  return (
    <>
      <section className="container">
        <div className="grid lg:grid-cols-2">
          <div className="px-5 lg:px-0 flex  justify-center">
            {/* <img
              src={who}
              alt="who we are"
              className=" rounded-lg w-[500px] shadow-2xl  "
            /> */}
            <div class="flex items-center justify-center -mx-4 lg:pl-8">
              <div class="px-3">
                <img
                  class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src={who}
                  alt=""
                />
              </div>
              <div class="flex flex-col items-start px-3">
                <img
                  class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={who1}
                  alt=""
                />
                <img
                  class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={who2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5 lg:py-8">
            <h1 className=" text-[35px] font-extrabold lg:text-[48px] leading-[56px] drop-shadow-lg">
              Who We Are
            </h1>
            <h2 className=" text-[25px]  drop-shadow-lg">
              Your Trusted Locksmith and Repair Service in Town
            </h2>
            <p className="  max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Our mission at Lock Smith Key Duplicators is crystal clear - to
              deliver top-notch locksmith and repair services to our valued
              customers, all delivered with the utmost professionalism and
              expertise. We take pride in our craftsmanship, providing tailored
              solutions to meet each customer's unique needs. When you choose
              Lock Smith Key Duplicators, you're choosing excellence,
              reliability, and a commitment to safeguarding your security.
              Discover the difference of working with experienced locksmith
              professionals who prioritize your peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
