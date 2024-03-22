import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Container, Box } from "@mui/material";

import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import aboutImage1 from "../../docs/assets/images/aboutImage1.JPG";
import aboutImage2 from "../../docs/assets/images/aboutImage2.JPG";
import aboutImage3 from "../../docs/assets/images/aboutImage3.JPG";
import aboutImage4 from "../../docs/assets/images/aboutImage4.JPG";
import "../../client/index.css";

const About = () => {
  const slides = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="h-screen flex flex-row justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <Box
        height={10}
        width="50%"
        // my={4}
        display={"fixed"}
        alignItems="center"
        flexDirection={"row"}
        justifyContent={"center"}
        // gap={4}
        p={8}
        className="text-priblue "
        marginTop={"0pt"}
      >
        <span className="font-bold text-2xl mb-6 items-center">
          Welcome to DEYI Consultant!
        </span>
        <br />
        <br />
        <span className="text-base text-priblue">
          Here is DEYI, where structural engineering meets elegance. Established
          in 2016, we take pride in offering top-notch structural engineering
          design services that seamlessly blend functionality with aesthetic
          appeal. Our team of experienced professionals is dedicated to crafting
          innovative and elegant solutions for a wide range of projects.
          Specializing in Title 24 compliance and Accessory Dwelling Unit (ADU)
          architectural design, we bring a unique blend of technical expertise
          and artistic vision to every endeavor. At DEYI, we believe in shaping
          the future of construction through precision, creativity, and a
          commitment to excellence. Let us be your partner in bringing your
          architectural dreams to life.
        </span>
      </Box>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})`}}
        className="w-1/2 h-2/3 left-4 flex flex-col rounded-2xl bg-center bg-cover duration-500 mr-10 mt-0"
      >
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-1 px-3">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
