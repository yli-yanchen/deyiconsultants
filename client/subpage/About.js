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
      {/* <div
        className="W-40 overflow-hidden bg-priwhite -insert-0.5 shadow-secwhite bg-opacity-40 box-border"
        style={{
          top: "50%",
          left: "10%",
        }}
      >
        <TransitionGroup className="flex transition-transform duration-500 ease-in-out">
          <CSSTransition
            key={imageIndex}
            classNames={{
              appear: "my-appear",
              appearActive: "my-active-appear",
              appearDone: "my-done-appear",
              enter: "my-enter",
              enterActive: "my-active-enter",
              enterDone: "my-done-enter",
              exit: "my-exit",
              exitActive: "my-active-exit",
              exitDone: "my-done-exit",
            }}
            timeout={3000}
          >
            <img
              className="W-30 transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              src={aboutImages[imageIndex]}
              alt={`Image ${imageIndex + 1}`}
            />
          </CSSTransition>
        </TransitionGroup>
      </div> */}
      <div className="w-800 m-auto py-16 px-4 relative">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `${aboutImage1}` }}
        ></div>

        <div className="absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full">
          <BsChevronCompactLeft />
        </div>

        <div>
          <BsChevronCompactRight />
        </div>
      </div>

      {/* https://www.youtube.com/watch?v=tXlZCW26bto */}
      
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
