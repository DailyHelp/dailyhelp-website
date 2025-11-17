"use client";

import { Container } from "@/components/ui";
import Image from "next/image";
import { FaApple } from "react-icons/fa";


export default function AboutUs() {
  return (
    <section className="py-6">
        <Container className="md:flex bg-[#CCFFE8] sm:rounded-2xl rounded-3xl max-sm:mx-3 sm:max-xl:mx-6 lg:pt-12 pt-4 sm:pb-2">
            <div className=" lg:space-y-6 space-y-3 sm:w-[60%]">
                <h2 className="lg:text-6xl text-3xl sm:font-semibold font-extrabold">
                    For people looking for help
                </h2>
                <p className=" text-[#3B4152] leading-7">
                    Need something done? DailyHelp makes it easy to find trusted professionals near you. From cleaners to chefs, artisans to event staff, the app helps you browse, connect, and get the help you need in just a few taps.
                </p>
                <p className=" text-[#3B4152] leading-7">
                    Download, register and use.
                </p>
            <div className="lg:hidden max-sm:mt-13 flex justify-center items-center rounded-2xl px-10 max-sm:py-5 py-4 sm:w-fit max-lg:bg-[#017441]">
                <div className="flex items-center">
                    <div className="border-[#D6DBE7] border-r-1 px-2">
                    <Image
                        src="/icons/playstore.svg"
                        alt="Menu"
                        width={15}
                        height={15}
                        className="max-sm:w-6"
                    />
                </div>

                <div className="px-2">                  
                    <FaApple className="text-white lg:text-black text-xl" />
                </div>
                </div>

                <p className="lg:hidden text-xs text-white font-bold">Download the app</p>
            </div>


            <div className="max-lg:hidden  rounded-xl p-4 w-fit shadow-[0px_5px_10px_#9EA7AA8B]">
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
                    className="object-cover scale-x-[-1] sm:max-lg:ml-auto sm:max-lg:w-[30rem]"
                    />
                </div>               
            </div>
        </Container>
    </section>
  );
}
