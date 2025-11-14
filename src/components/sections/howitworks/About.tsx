"use client";

import { Container } from "@/components/ui";
import Image from "next/image";
import { FaApple } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="py-6">
        <Container className="sm:flex bg-[#E3FF99] sm:rounded-2xl rounded-3xl max-sm:mx-3 sm:pt-12 pt-4 sm:pb-2">
            <div className=" sm:space-y-6 space-y-3 sm:w-[60%]">
                <h2 className="sm:text-6xl text-2xl sm:font-semibold font-extrabold">
                    For People Offering Services
                </h2>
                <p className=" text-[#3B4152] leading-7">
                    Have a skill? DailyHelp helps you turn it into opportunity & profits. The service you can offer will make you showcase your services, connect with nearby clients, and grow your business-all in one place.
                </p>
                <p className=" text-[#3B4152] leading-7">
                    Download, register and use.
                </p>
            <div className="sm:hidden mt-13 flex items-center rounded-2xl px-10 py-5 max-sm:bg-[#95D21A]">
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
                
                <p className="sm:hidden text-white font-bold ">Download the app</p>
            </div>

            <div className="max-sm:hidden  rounded-xl p-4 w-fit shadow-[0px_5px_10px_#9EA7AA8B]">
                <Image
                    src="/icons/vector.svg"
                    alt="Menu"
                    width={120}
                    height={15}
                />
            </div>
            </div>

            <div>
                <div className="">
                    <Image
                    src="/images/phonegirl.png"
                    alt="Hire Preview"
                    width={600}
                    height={20}
                    className="object-cover scale-x-[-1]"
                    />
                </div>               
            </div>
        </Container>
    </section>
  );
}
