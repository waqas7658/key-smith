import React from "react";
import lock1 from "../../assets/Images/lock1.jpg";
import lock2 from "../../assets/Images/lock3.jpg";
import lock3 from "../../assets/Images/lock4.jpg";
// import lock4 from "../../assets/Images/Key-Cutting.jpg";
import lock5 from "../../assets/Images/lock6.jpg";
import lock6 from "../../assets/Images/lock1.jpg";
import Hero1 from "./Hero1";

const Hero = () => {
  return (
    <>
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="text-3xl lg:text-4xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Best Key Works & Key Copying
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              We understand that security is paramount. Whether you're locked
              out of your home, need to upgrade your business's security
              systems, or require emergency locksmith services, we've got you
              covered. With our team of highly skilled and certified locksmiths,
              we provide professional and reliable locksmith services to our
              cients
            </p>
          </div>
          <div class="container mx-auto px-5 py-2 lg:px-32 ">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock1}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock2}
                  />
                </div>
                <div class="w-4/1 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock3}
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock1}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock5}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={lock6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div class=" text-black py-10">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black drop-shadow-lg">
                More Than Just A Key
              </h1>

              <p class="text-sm md:text-base  mb-4">
                We understand that security is paramount. Whether you're locked
                out of your home, need to upgrade your business's security
                systems, or require emergency locksmith services, we've got you
                covered. With our team of highly skilled and certified
                locksmiths, we provide professional and reliable locksmith
                services to our cients
              </p>
              <a
                href="#"
                class="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-600 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div class="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    class="inline-block mt-28 hidden xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-28 hidden lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
