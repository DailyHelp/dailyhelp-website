import React from "react";
import Image from "next/image";
import { FaInstagram } from 'react-icons/fa6';

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" sm:mt-12 mx-auto px-5 lg:px-12 py-8 space-y-2 sm:space-y-10">

        <div className="flex justify-between">
        <Image
            src="/icons/dailyhelplogo.svg"
            alt="Menu"
            width={120}
            height={40}
        />

        <div style={{ gap: '10px', fontSize: '24px' }} className="max-sm:hidden flex items-center">
         
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="#FE0077" className="w-[20px]"/>
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/tiktok.svg"
              alt="Menu"
              width={120}
              height={40}
              className="w-[20px] font-light"
            />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/twitter.svg"
              alt="Menu"
              width={1}
              height={40}
              className="w-[20px] font-light"
            />          
          </a>
        </div> 
               
        </div>

        <div className="sm:flex flex-wrap md:flex-nowrap mx-[-.8rem] mt-4 md:mt-0  font-semibold text-[#3B4152] space-y-3">
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About us</Link>
          <Link href="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">How DailyHelp Works</Link>
          <Link href="/founders-corners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Founders Corner</Link>
          <Link href="/ethics-guide" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Business Ethics & Compliance Guide</Link>
          <Link href="/faqs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ et Contacts</Link>
        </div>

        <div style={{ gap: '10px', fontSize: '24px' }} className="mx-1 mt-6 flex items-center">
         
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="#FE0077" className="w-[20px]"/>
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/tiktok.svg"
              alt="Menu"
              width={120}
              height={40}
              className="w-[20px] font-light"
            />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/twitter.svg"
              alt="Menu"
              width={1}
              height={40}
              className="w-[20px] font-light"
            />          
          </a>
        </div> 


        <div className="flex space-x-3 sm:space-x-8 ml-[.2rem] mt-7 text-[14px] font-semibold text-[#757C91]">
          <p className=" text-sm">&copy; {new Date().getFullYear()} DailyHelp</p>
          <Link href="/privacy-policy" className=" hover:text-[#55575DFF] text-sm">Privacy Policy</Link>
          <Link href="/terms-of-use" className=" hover:text-[#55575DFF] text-sm">Terms of Use</Link>
        </div>

    </footer>
  );
};

export default Footer;
