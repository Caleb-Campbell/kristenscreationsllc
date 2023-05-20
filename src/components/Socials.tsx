import Link from 'next/link';
import React from 'react';

const socialMediaLinks = [
  {
    text: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/',
  },
  {
    text: 'Instagram',
    url: 'https://www.instagram.com/',
  },
];



const Socials = ({ images } : { images: string[] }) => {
  return (
    <div className="container border border-t-0 border-r-0 py-10 border-l-0 mx-auto px-4 sm:px-6 lg:px-8">
      <div className='mx-auto w-full '>
      <Link href={'https://www.instagram.com/triden50/'} className=' italic text-2xl '>
        <p className='text-center text-pinky my-10 transition-all'>follow along @kristenscreations</p>
      </Link>
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full">
          <div className="flex flex-wrap justify-around">
            {images.map((image) => (
              <div key={image} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2">
                <img src={image} className="w-full h-auto my-1" />
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center  mt-4">
            {socialMediaLinks.map((link) => (
              <a
                key={link.url}
                className="text-gray-500 hover:text-gray-700 mx-3"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Socials
