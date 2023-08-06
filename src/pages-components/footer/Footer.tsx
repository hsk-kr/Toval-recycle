import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="bg-third flex justify-center">
      <div className="w-full max-w-site p-5 md:p-10 flex flex-col gap-4 ">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
          <div>
            <img src="/logo-white.svg" />
          </div>
          <div>
            <ul className="text-white text-xl flex flex-col sm:flex-row gap-10">
              <li>ABOUT US</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
            <SocialIcon
              url="https://youtube.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
            <SocialIcon
              url="https://facebook.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full h-[1px] opacity-40"></div>
        <div className="w-full my-5 flex justify-center text-center text-white opacity-80">
          <p>© 2023 Toval Recycling All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
