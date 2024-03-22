import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";

//setup: https://www.emailjs.com

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();
  const [sentEmail, setSentEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        () => {
          setSentEmail(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setSentEmail(false);
          console.log("FAILED...", error.text);
        }
      );
  };

    useEffect(() => {
      // Reset sendEmail to null on component mount (website refresh)
      setSentEmail("");
    }, []);


  return (
    <div
      className="h-screen flex flex-row justify-center items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="h-full w-1/2  bg-priblue flex flex-col justify-center items-center">
        <h2 className="text-priwhite text-3xl font-bold m-8 items-start">
          LET US KEEP IN TOUCH
        </h2>
        <div className="flex flex-col justify-start text-left text-priwhite">
          <span className="font-semibold">Irvine Office </span>
          <span>2725 Whispering Trl</span>
          <span>Irvine, CA 92602</span>
          <span>Tel: (949) 656 - 6134 </span>
          <span>info@deyiconsultants</span>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="h-screen w-1/2 flex flex-col justify-center items-center"
      >
        {/* <label className="text-priblue font-semibold">Name</label> */}
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className={"FormInfor"}
          required
        />
        {/* <label className="text-priblue font-semibold">Email</label> */}
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className={"FormInfor"}
          required
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className={"MessageForm"}
          required
        ></textarea>

        {sentEmail !== "" && (
          <label className="text-darkgrey font-base">
            {sentEmail
              ? "Message sent successfully, we will reach out to you shortly"
              : "Message sending failed, please resend your message"}
          </label>
        )}

        <button type="submit" className={"contactSubmit"}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
