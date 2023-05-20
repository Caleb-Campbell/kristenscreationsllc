import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-200">
      <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
        <div className="mb-4 flex justify-center md:order-2 md:mb-0">
          <a
            href="#"
            className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-400"
          >
            <img
              src="favicon.ico"
              className="h-16 w-16 scale-150 md:translate-x-10"
            />
          </a>
          <a
            href="#"
            className="ml-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400"
          ></a>
        </div>
        <div className="text-center text-sm md:flex md:items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            &copy; {new Date().getFullYear()} Kristens Creations
          </div>
          <div>
            <a
              href="#"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-400"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-500">|</span>
            <a
              href="#"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
