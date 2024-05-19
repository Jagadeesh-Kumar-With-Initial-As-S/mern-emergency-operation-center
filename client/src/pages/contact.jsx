import { Button, TextInput, Textarea } from "flowbite-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Thanks for your submission!");
          e.target.reset();
        },
        (error) => {
          setStatus("Oops! There was a problem submitting your form");
        }
      );
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen ">
      <div>
        <h1 className="text-center text-3xl my-7 font-semibold">Contact Us</h1>
        <div>
          <ul className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <li className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
              <span className="">Call: </span>&nbsp;&nbsp;
              <span className="">+917397285837</span>
            </li>
            <li className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
              <span className="">Write: </span>&nbsp;&nbsp;
              <span className="">jagadeesh_2k17@proton.me</span>
            </li>
          </ul>
        </div>
        <br />
        {/* map */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.08645921263!2d80.19917223861847!3d12.979154909177714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704096271399!5m2!1sen!2sin"
            style={{ border: "0", width: "100%", height: "200px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* map end */}
        <br />
        <div className="">
          <div className="" />
          <h3>Let's Get In Touch</h3>
        </div>

        {/* contact */}
        <div id="contact" className="">
          <form
            className="flex flex-col items-center justify-between border-4 border-teal-500 border-dotted p-3 gap-2 "
            onSubmit={handleSubmit}
            id="contactForm"
            ref={form}
          >
            <div className="w-full">
              <TextInput
                type="text"
                placeholder="What's your name?"
                required="required"
                name="user_name"
              />
            </div>
            <div className="w-full">
              <TextInput
                type="email"
                placeholder="Your Email"
                name="user_email"
                required="required"
              />
            </div>
            <div className="w-full">
              <Textarea
                placeholder="Tell us about our project"
                name="message"
                required="required"
                className="h-32"
              />
            </div>
            <div className="">
              <p className="">
                <span className="">*</span> We promise not to disclose your
                personal information to third parties.
              </p>
            </div>
            <div className="">
              <div className="">
                <Button type="submit" gradientDuoTone="purpleToBlue">
                  <span>Send message</span>
                </Button>
              </div>
            </div>
            <div className="" id="contactFormStatus">
              {status}
            </div>
          </form>
        </div>
      </div>
      {/* contact end */}
    </div>
  );
}
