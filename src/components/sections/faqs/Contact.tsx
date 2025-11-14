"use client";

import Image from "next/image";
import { FaInstagram } from 'react-icons/fa6';


export default function Contact() {

  return (
    <div className=" max-w-2xl space-y-10 sm:space-y-14 mx-auto">

        <div>
            <h2 className="sm:text-6xl text-3xl text-center text-[#121921] font-bold">Contact</h2>
        </div>

        <div className="mx-auto w-fit  ">
            <div style={{ fontSize: '24px' }} className="sm:flex sm:gap-[6rem] justify-center items-center max-sm:space-y-6">
                     
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex sm:justify-between space-x-3 items-center">
                <Image
                    src="/icons/twitter.svg"
                    alt="Menu"
                    width={20}
                    height={40}
                    className="font-light"
                />  <p className="text-[18px] text-[#3B4152]">@dailyhelpintl</p>         
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex sm:justify-between space-x-3 items-center">
                    <FaInstagram color="#FE0077" className=" "/> <p className="text-[18px] text-[#3B4152]">@dailyhelpintl</p> 
                </a>
                <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="flex sm:justify-between space-x-3 items-center">
                <Image
                    src="/icons/tiktok.svg"
                    alt="Menu"
                    width={25}
                    height={40}
                    className=" font-light"
                /> <p className="text-[18px] text-[#3B4152]">@dailyhelpintl</p> 
                </a>
                
            </div>
        </div> 

    </div>
  );
}
