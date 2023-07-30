import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Layout from "~/components/Layout";
import splash from "../../public/splash.jpg";
import { Button } from "~/components/Button";
import { api } from "~/utils/api";

const ContactPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    send()
  }

  const mailHandler = api.mail.hello.useMutation()

  const send = () => {
    mailHandler.mutate({
      to: "calebcampbellcrm@gmail.com",
      subject: "Hello, this is a test email",
      text: "This is a test email from the website",
    })
  }

  return (
    <Layout active={"/contact"}>
      <div className="relative">
        <img
          src="/splash.jpg"
          className="h-[500px] w-full object-cover opacity-80"
        />
      </div>
      <div className="w-9/12 mx-auto p-4 flex flex-col jusitfy-center h-96 items-center text-center text-xl mt-6">
        <h3 className="italic text-3xl">Contact Info:</h3>
        <label>Phone</label>
        <a className="text-pinky" href="tel:+1234567890">{'(509) 554-1793 '}</a>
        <label>Email</label>
        <a className="text-pinky" href="mailto:yourname@example.com">kristensdecornfloral@gmail.com</a>
      </div>
      <div className="container mx-auto my-16">
        {/* <div className="flex justify-center">
          <h1 className="my-3 uppercase sm:text-2xl md:text-3xl">
            Complete form below
          </h1>
        </div>
        <div className="mx-auto w-full p-2 sm:w-6/12">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block uppercase text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:shadow-outline w-full appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block uppercase text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="focus:shadow-outline w-full appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block uppercase text-gray-700"
              >
                Event Type
              </label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
                className="border border-gray-300 p-5 px-2 py-1 uppercase focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option value="">-- Select --</option>
                <option value="wedding">Wedding</option>
                <option value="party">Party</option>
                <option value="event">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block uppercase text-gray-700"
              >
                {selectedOption !== ""
                  ? `Please describe your ${selectedOption}`
                  : "Please describe your event"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="focus:shadow-outline w-full appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleSubmit(e)}>
                Submit
              </Button>
            </div>
          </form>
        </div> */}
      </div>
    </Layout>
  );
};

export default ContactPage;
