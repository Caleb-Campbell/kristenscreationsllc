import Link from "next/link";
import React from "react";

const Footer = () => {

  return (
    <footer>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Kick-start your dream home with us
            </h3>
            <Link
              href="/"
              className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline">
              Send us a hi
            </Link>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">
                Brooklyn, New York
              </p>
              <p className="text-body-sm font-light text-neutral-900">
                962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
                State.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Email us at
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:hello@landify.design">
                hello@landify.design
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                {`If you're hurry, quick call for us`}
              </p>
              <Link
                className="text-display-xs font-display font-normal text-primary-600"
                href="/">
                +8(663)125-08-59
              </Link>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Inteo - Award winning studio. Made with
            love by{" "}
            <a
              href="https://landify.design/?ref=inteo"
              className="text-primary-600">
              Landify
            </a>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
                CONNECT
              </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
