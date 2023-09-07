import React from "react";
import aboutus from "../assets/Images/Vault-rafiki.png";
const About = () => {
  return (
    <>
      <section className="container pb-5">
        <div className="grid lg:grid-cols-2">
          <div>
            <img src={aboutus} alt="about image" />
          </div>
          <div className="">
            <div class="lg:mt-28 p-8">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
