import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ active }: { active?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about", current: active === "/about" },
    { name: "Contact", href: "/contact", current: active === "/contact" },
    {
      name: "Services",
      current:
        active === "/services/weddings" ||
        active === "/services/parties" ||
        active === "/services/arrangements" ||
        active === "/services/rentals",
      children: [
        {
          name: "Weddings",
          href: "/services/weddings",
          current: active === "/services/weddings",
        },
        {
          name: "Parties",
          href: "/services/parties",
          current: active === "/services/parties",
        },
        {
          name: "Arrangements",
          href: "/services/arrangements",
          current: active === "/services/arrangements",
        },
        {
          name: "Rentals",
          href: "/services/rentals",
          current: active === "/services/rentals",
        },
      ],
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="absolute z-50 w-full bg-opacity-100 lg:top-0"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="fixed right-0 top-10 inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="items-between flex w-fit justify-between sm:items-stretch sm:justify-start">
                <Link
                  href={"/"}
                  className="uppercase text-white text-3xl md:text-4xl"
                >
                  Kristens Creations
                </Link>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="absolute right-0 space-x-2">
                    {navigation.map((item) =>
                      item.children ? (
                        <Menu
                          as="div"
                          key={item.name}
                          className="relative inline-block text-left"
                        >
                          <Menu.Button
                            className={classNames(
                              item.current ? "underline" : "",
                              "rounded-md px-3 py-2 text-lg font-medium uppercase text-white hover:text-gray-200"
                            )}
                          >
                            {item.name}
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white bg-opacity-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {item.children.map((child) => (
                                  <Menu.Item key={child.name}>
                                    {({ active }) => (
                                      <a
                                        href={child.href}
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white",
                                          "block px-4 uppercase py-2 text-base font-medium"
                                        )}
                                        aria-current={
                                          child.current ? "page" : undefined
                                        }
                                      >
                                        {child.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? "underline" : "",
                            "rounded-md px-3 py-2 text-lg font-medium uppercase text-white hover:text-gray-200"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="relative left-0 top-0 bg-white sm:hidden">
            <div className="fixed left-0 top-0 mx-auto h-screen w-screen bg-gray-300 bg-opacity-80 px-2 pb-3 pt-2">
              <Disclosure.Button
                className={
                  "block rounded-md px-3 py-2 text-base font-medium text-white uppercase"
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                Close
              </Disclosure.Button>
              {navigation.map((item) =>
                item.children ? (
                  <Menu
                    as="div"
                    key={item.name}
                    className="mx-auto my-auto flex"
                  >
                    <Menu.Button
                      className={classNames(
                        item.current
                          ? "bg-gray-400 text-white"
                          : "text-black hover:bg-pinky hover:text-white",
                        "rounded-md px-3 flex items-center py-2 text-base font-medium uppercase"
                      )}
                    >
                      {item.name} { ' '} <ChevronDownIcon className="h-5 w-5" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items
                        static
                        className="absolute mt-12 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Menu.Item key={child.name}>
                              {({ active }) => (
                                <a
                                  href={child.href}
                                  className={classNames(
                                    active
                                      ? "bg-gray-600 text-gray-900"
                                      : "bg-opacity-10 text-gray-700",
                                    "block bg-opacity-10 px-4 py-2 text-base uppercase"
                                  )}
                                  aria-current={
                                    child.current ? "page" : undefined
                                  }
                                >
                                  {child.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-400 text-white"
                        : "text-black hover:bg-pinky hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium w-full uppercase"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
