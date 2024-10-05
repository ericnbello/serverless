import React from "react";
import userData from "../constants/data";
import Github from "./icons/Github.js";
import LinkedIn from "./icons/LinkedIn.js"
import Aws from "./icons/Aws.js";
import XTwitter from "./icons/XTwitter.js";
// import Nextjs from "../icons/Nextjs.js";
// import Image from 'next/image'
import VisitorCounter from "./VisitorCounter";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] text-black">
      {/* <div className="max-w-6xl mx-auto px-4 py-10 md:py-20"> */}
        {/* Horizontal Line */}
        <div className="h-0.5 w-full bg-white"></div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8 max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-row justify-center">
            <p>Copyright &copy; { currentYear } - <span><a className="text-black hover:font-bold hover:text-black " href={userData.socialLinks.github}>ericnbello</a></span>. </p>
          </div>
          <div className="flex flex-row justify-center">
            <p className="flex flex-row">Built with 
              <a className="px-2" href="https://www.nextjs.com">
                <img src="/nextjs.svg" className="h-6 w-6 mx-1" />
              </a>  
              <a className="px-2" href="https://www.tailwindcss.com">
                <img src="/tailwind.svg" className="h-6 w-6 mx-1"/>
              </a>
              <a className="px-2" href="https://www.aws.amazon.com">
                <img src="/aws-logo.svg" className="h-7 w-7 mx-1"/>
              </a>
            </p>
          </div>
          <div className="space-x-4 flex flex-row justify-center items-center">
            <a
              href={userData.socialLinks.github}
              className="text-base font-normal text-gray-600 "
            >
              <Github />
            </a>
            <a
              href={userData.socialLinks.twitter}
              className="text-base font-normal text-gray-600 "
            >
              <XTwitter />
            </a>
            <a
              href={userData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600 "
            >
              <LinkedIn />
            </a>
          </div>
          <div className="flex flex-row justify-center items-center md:justify-end">
            <VisitorCounter />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
