import React from "react";
import Logo from "../../../assets/images/logo/logo.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { currentYear } from "../../../utils/dateUtils";


export const Footer: React.FC = () => (
  <footer className="font-primary">
    <div className="max-w-6xl  px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center sm:justify-start">
            <img src={ Logo } alt="Logo" width={ 130 } height={ 50 } />
          </div>

          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center  sm:max-w-xs sm:mx-0 sm:text-left">
            Kakali Travels is a premier travel agency dedicated to offering unforgettable journeys across Northeast India.
          </p>

          <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
            <li>
              <a href="">
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <FaXTwitter className="h-6 w-6" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <FaYoutube className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">About Us</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className=" transition hover:/75" href="/">
                    Company History
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium ">Our Services</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className=" transition hover:/75" href="/">
                    Tour Packages
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Flight Booking
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Hotel Booking
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Travel Insurance
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium ">Helpful Links</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className=" transition hover:/75" href="/">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a className=" transition hover:/75" href="/">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    className="flex group justify-center sm:justify-start gap-1.5"
                    href="/contact-us"
                  >
                    <span className=" transition group-hover:/75">
                      Contact Us
                    </span>

                    <span className="relative flex w-2 h-2 -mr-2">
                      <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium ">Contact Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5  shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="transition group-hover:/75">
                    contact@kakalitravels.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5  shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="transition group-hover:/75">
                    +91 9954977701
                  </span>
                </a>
              </li>

              <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5  shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <address className="not-italic">
                  Ward No 6,Bokakhat,Dist-Golagaht,785612
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12 border-t border-gray-800">
        <div className="text-center">
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            Copyright &copy; { currentYear } Kakali Travels | Powered by Kakali Travels
          </p>
        </div>
      </div>
    </div>
  </footer>
);
