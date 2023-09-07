import React from "react";
import Hero from "../Components/Hero/Hero";
import Hero1 from "../Components/Hero/Hero1";
import WhoWeAre from "../Components/WhoWeAre/WhoWeAre";
import Achivement from "../Components/Achivement/Achivement";
import Services from "../Components/OurServices/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Achivement />
      <Services />
    </>
  );
};

export default Home;
