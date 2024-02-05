import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import aboutImage1 from "../../docs/assets/images/aboutImage1.JPG";
import aboutImage2 from "../../docs/assets/images/aboutImage2.JPG";
import aboutImage3 from "../../docs/assets/images/aboutImage3.JPG";
import aboutImage4 from "../../docs/assets/images/aboutImage4.JPG";
import "../../client/index.css";

const About = () => {
  const aboutImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [aboutImages.length]);

  return (
    <div
      className="h-screen flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >

      <div className="w-800 m-auto py-16 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `${aboutImage1}` }}
        ></div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft />
        </div>

        <div>
          <BsChevronCompactRight className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" />
        </div>
      </div>


      <div>
        <h1 className="flex flex-center items-center text-priblue text-3xl font-extrabold">
          Welcome to DEYI Consultant!
        </h1>

        <p className="text-priblue">
          Welcome to DEYI, where structural engineering meets elegance.
          Established in 2016, we take pride in offering top-notch structural
          engineering design services that seamlessly blend functionality with
          aesthetic appeal. Our team of experienced professionals is dedicated
          to crafting innovative and elegant solutions for a wide range of
          projects. Specializing in Title 24 compliance and Accessory Dwelling
          Unit (ADU) architectural design, we bring a unique blend of technical
          expertise and artistic vision to every endeavor. At DEYI, we believe
          in shaping the future of construction through precision, creativity,
          and a commitment to excellence. Let us be your partner in bringing
          your architectural dreams to life.
        </p>
      </div>
    </div>
  );
};

export default About;
