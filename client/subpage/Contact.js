import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";

//setup: https://www.emailjs.com

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const nameValue = form.current["from_name"].value;
    const emailValue = form.current["from_email"].value;

    if (!nameValue) {
      setName("Name is required.");
      return;
    }

    if (!emailValue) {
      setEmail("Email is required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      setEmail("Invalid email address.");
      return; 
    }

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
    setName("");
    setEmail("");
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
        <div className="flex flex-col justify-start text-left text-priwhite mb-2">
          <span className="font-semibold mb-4">Irvine Office </span>
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
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className={"FormInfor"}
          required
        />
        {name && <label className="text-priblue font-base"> {name} </label>}

        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className={"FormInfor"}
          required
        />
        {email && <label className="text-priblue font-base"> {email} </label>}

        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className={"MessageForm"}
          required
        ></textarea>

        {sentEmail !== "" && (
          <label className="text-priblue font-base">
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
