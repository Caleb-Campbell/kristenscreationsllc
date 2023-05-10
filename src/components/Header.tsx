import Link from "next/link";
import React,  { useState } from "react";

const Header = () => {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "#", options: [
      { name: "Weddings", href: "/services/weddings" },
      { name: "Parties", href: "/services/parties" },
      { name: "Arrangements", href: "/services/arrangements" },
    ] },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-opacity-100 text-white py-4 px-6 z-10">
      <div className="container mx-auto">
        <div className="flex pb-5 justify-between items-center">
          <div className="flex flex-row justify-center p-0 items-center">
            <Link  href={'/'}>
              <img src='/KClogodark.png' width={150} className="m-0 p-0" alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <>
                  {item.options ? (
                    <DropdownMenu key={item.name} title={item.name} options={item.options} />
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4">
                      {item.name}
                    </a>
                  )}
                </>
              ))}
            </div>
            <button
              className="md:hidden block bg-primary-600 text-black py-2 px-4 rounded"
              onClick={toggleMenu}>
              {showMenu ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden block">
            {navigation.map((item) => (
              <>
                {item.options ? (
                  <div key={item.name}>
                  <DropdownMenu title={item.name} options={item.options} />
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-4 font-medium text-neutral-700 hover:text-primary-600">
                    {item.name}
                  </a>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export const DropdownMenu = ({ options, title }:{ title: string, options: {name: string, href:string}[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md px-4 py-2 font-medium text-gray-700 focus:outline-none focus:ring-offset-gray-100 focus:ring-white"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title} 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all ${isOpen ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-opacity-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
           {
              options.map((option) => {
                return (
                  <div key={option.name}>
                  <Link href={option.href} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 bg-opacity-75 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}>
                      {option.name}
                  </Link>
                  </div>
                );
              })
           }
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
