"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import myImage from "../assets/myImage.png";
import { NavLink } from "react-router-dom"; // Ensure this is imported correctly

const navigation = [
  { name: "Services", href: "/services" }, // Updated link names
  { name: "Our Team", href: "/ourteam" },
  { name: "About Us", href: "/aboutus" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contactus" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    Services: false,
    OurTeam: false,
    AboutUs: false,
    Careers: false,
  });

  const handleMouseEnter = (item) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [item]: false,
    }));
  };

  return (
    <div className="text-white bg-slate-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-zinc-900 ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-3 shadow-lg lg:px-8"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="A descriptive alt text about the image's purpose"
                src={myImage}
                className="w-10 h-10 rounded-full"
                loading="lazy"
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={() => handleMouseLeave(item.name)}
              >
                {item.name === "Contact Us" ? (
                  <NavLink
                    to={item.href}
                    className="px-4 py-2 text-sm font-semibold leading-6 text-white bg-yellow-600 rounded-md"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button className="flex items-center text-sm font-semibold leading-6 text-white focus:outline-none">
                      {item.name}
                      <ChevronDownIcon
                        className="w-4 h-4 ml-1"
                        aria-hidden="true"
                      />
                    </button>
                    {dropdownOpen[item.name] && (
                      <div className="absolute left-0 z-10 w-48 mt-2 rounded-md shadow-lg bg-slate-800">
                        <NavLink
                          to="/WebDevelopment"
                          className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                        >
                          WebDevelopment
                        </NavLink>
                        <NavLink
                          to="/AndroidDevelopment"
                          className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                        >
                          AndroidDevelopment
                        </NavLink>
                        <NavLink
                          to="/EmbeddedSystem"
                          className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                        >
                          EmbeddedSystem
                        </NavLink>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="https://github.com/AwahabMughal4" // Direct link to GitHub
              className="text-sm font-semibold leading-6 text-white"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security feature
            >
              GitHub <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-slate-800 opacity-90" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto shadow-lg bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={myImage} className="w-auto h-8" />
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:bg-slate-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      {item.name === "Contact Us" ? (
                        <NavLink
                          to={item.href}
                          className="flex items-center justify-between px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white bg-yellow-600 rounded-lg"
                        >
                          <span>{item.name}</span>
                        </NavLink>
                      ) : (
                        <>
                          <button
                            className="flex items-center justify-between px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-slate-700"
                            onClick={() => handleMouseEnter(item.name)}
                          >
                            <span>{item.name}</span>
                            <ChevronDownIcon
                              className="w-4 h-4 ml-1"
                              aria-hidden="true"
                            />
                          </button>
                          {dropdownOpen[item.name] && (
                            <div className="absolute left-0 z-10 w-48 mt-2 rounded-md shadow-lg bg-slate-800">
                              <NavLink
                                to="WebDevelopment"
                                className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                              >
                                Web Development
                              </NavLink>
                              <NavLink
                                to="/AndroidDevelopment"
                                className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                              >
                                Android Development
                              </NavLink>
                              <NavLink
                                to="/EmbeddedSystem"
                                className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                              >
                                Embedded System
                              </NavLink>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div>
        <div className="max-w-3xl py-16 pt-12 pb-12 mx-auto text-center lg:pt-48 lg:pb-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Discover the Best
            <br />
            <span className="text-yellow-500">IT Consulting</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Utilize our array of innovative solutions crafted with the latest
            technologies.
          </p>
          <div className="flex justify-center mt-8 gap-x-4">
            <NavLink
              to="#"
              className="inline-block px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-yellow-600 rounded-md shadow-md"
            >
              Approach Us
            </NavLink>
            <NavLink
              to="#"
              className="inline-block px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-gray-800 rounded-md shadow-md"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
