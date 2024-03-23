import React from "react";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import ResImage from "../../docs/assets/images/Residential.jpg";

import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";

const Procedure = () => {
  return (
    <div
      className="h-auto flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="flex flex-col items-start mt-20 mb-10 mx-14 text-priblue">
        <h1 className="font-bold text-2xl mb-6 items-center">
          The Reason You Will Choose Us
        </h1>
        <h2 className="text-priblue">
          At DEYI, we specialize in six core areas of expertise to meet all your
          construction and development needs. Our services include residential
          Structural Design, ensuring your homes are not just beautiful but also
          structurally sound and safe. We excel in Permit Application services,
          navigating the complex regulatory landscape to obtain the necessary
          approvals for your projects seamlessly. Our Landscape Detail
          Structural Design brings outdoor spaces to life with innovative and
          sustainable solutions. For playgrounds that inspire creativity and
          safety, our Playground Structural Design services are second to none.
          We offer expert Construction Administration, overseeing every aspect
          of your project to ensure timely completion and compliance. Finally,
          our Title 24 services focus on energy efficiency and environmental
          sustainability, aligning your projects with the latest standards.
          Partner with DEYI Consultants for unparalleled expertise and a
          commitment to excellence in every project we undertake.
        </h2>
      </div>

      <div className="flex flex-row flex-center mx-14 px-6 ">
        <img
          className="h-96 w-1/2 bg-priwhite flex flex-center items-center align-middle"
          src={ResImage}
        ></img>
        <div className="h-96 w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-priblue">
          <span className="font-bold">Step 1. Free Consultant</span>
          <br />
          <span className="font-base">
            Half Hour Phone Consultant for Free!
          </span>
          <br />
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: "#191970", color: "#fff" }}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="flex flex-row flex-center mx-14 px-6 ">
        <div className="h-96 w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-priblue">
          <span className="font-bold">Step 2. Design</span>
          <br />
          <span className="font-base">
            Half Hour Phone Consultant for Free!
          </span>
        </div>
        <img
          className="h-96 w-1/2 bg-priwhite flex flex-center items-center align-middle"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          src={ResImage}
        ></img>
      </div>

      <div className="flex flex-row flex-center mx-14 px-6 ">
        <img
          className="h-96 w-1/2 bg-priwhite flex flex-center items-center align-middle"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          src={ResImage}
        ></img>
        <div className="h-96 w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-priblue">
          <span className="font-bold">Step 3. Submission </span>
          <br />
          <span className="font-base">
            Half Hour Phone Consultant for Free!
          </span>
        </div>
      </div>

      <div className="flex flex-row flex-center mx-14 px-6 ">
        <div className="h-96 w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-priblue">
          <span className="font-bold">Step 4. Plan Check </span>
          <br />
          <span className="font-base">
            Half Hour Phone Consultant for Free!
          </span>
        </div>
        <img
          className="h-96 w-1/2 bg-priwhite flex flex-center items-center align-middle"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          src={ResImage}
        ></img>
      </div>

      <div className="flex flex-row flex-center mx-14 px-6 ">
        <img
          className="h-96 w-1/2 bg-priwhite flex flex-center items-center align-middle"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          src={ResImage}
        ></img>
        <div className="h-96 w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-priblue">
          <span className="font-bold">Step 5. Done</span>
          <br />
          <span className="font-base">
            Half Hour Phone Consultant for Free!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
