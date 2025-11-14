import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";


const Footer: React.FC = () => {
  return (
    <section className="flex pt-16 max-sm:flex-col items-center mx-auto justify-between">

        <div className="max-sm:order-2 order-1">
            <Image
                src="/images/phone1.png"
                alt="Menu"
                width={800}
                height={100}
                className="object-contain "
            />
        </div>

        <div className="max-sm:order-1 order-2 mx-auto w-fit items-center justify-items-center space-y-6 sm:space-y-3">
            <div className="sm:hidden flex flex-col" >
            <p className="bg-[#EFF1F5] rounded-full p-[8px] font-semibold text-xs ">Hi there welcome to DailyHelp 👋🏼</p>
            <IoTriangle className="text-[#EFF1F5] text-xs rotate-180 text-center mx-auto mt-[-2px]" />

        </div>
            <div className="rounded-full border-[#F1F2F4] border-1 shadow-[0px_5px_10px_#A5BDC2FF] p-5 w-fit">
                <Image
                    src="/icons/dailyhelp.svg"
                    alt="Menu"
                    width={100}
                    height={10}
                />
            </div>

            <div className="mt-10">
                <h1 className="text-center text-3xl font-bold leading-10">
                    Get trusted help near <br /> you in minutes                    
                </h1>
            </div>

            <p className="max-sm:hidden text-[#757C91] text-sm font-bold mt-6">
                Scan the QR code to download the DailyHelp app
            </p>
            <p className="sm:hidden text-[#A9AFC2] font-semibold">
                Download the DailyHelp app
            </p>

            <div className="flex items-center rounded-2xl px-20 py-5 max-sm:bg-[#017441]">
                <div className="border-[#D6DBE7] border-r-1 px-2">
                    <Image
                        src="/icons/playstore.svg"
                        alt="Menu"
                        width={15}
                        height={15}
                        className=""
                    />
                </div>

                <div className="px-2">                  
                    <FaApple className="text-white sm:text-black text-xl" />

                </div>
                
                <p className="sm:hidden text-white font-bold text-sm">Download the app</p>
            </div>

            <div className="max-sm:hidden rounded-xl p-4 shadow-[0px_5px_10px_#9EA7AA8B]">
                <Image
                    src="/icons/vector.svg"
                    alt="Menu"
                    width={120}
                    height={15}
                />
            </div>
        </div>
    </section>
  );
};

export default Footer;
