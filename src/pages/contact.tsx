import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Layout from '~/components/Layout';
import splash from '../../public/splash.jpg';

const ContactPage: React.FC = () => {
  return (
    <Layout >

    <div className="container mx-auto my-16" >
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-gray-500 mr-2 mt-1" />
            <p>123 Main St.</p>
          </div>
          <div className="flex items-start mb-4">
            <FaPhone className="text-gray-500 mr-2 mt-1" />
            <p>555-555-5555</p>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-gray-500 mr-2 mt-1" />
            <p>info@mybusiness.com</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactPage;
