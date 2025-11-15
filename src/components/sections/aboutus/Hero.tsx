"use client";

import Image from "next/image";
import { Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="">
        <Container className="flex flex-col items-center sm:space-y-10 space-y-6 w-fit mx-auto">
            <div>
                <h2 className="lg:text-5xl md:text-3xl text-2xl text-center text-[#121921] font-bold">We Revolutionize Rendering Service to the <br /> World in a Way That Brings About Ease!</h2>
            </div> 

            <div className="">
                <Image
                    src="/images/abouthero.jpg"
                    alt="Menu"
                    width={1000}
                    height={100}
                    className="object-contain rounded-2xl"
                />
            </div>  

            <div className="lg:w-[50vw] md:w-[70vw] text-[#757C91] leading-8 space-y-8">
                <p className="">We are sentenced to bringing about ease to the world in our own little way. 
                    Finding & Rendering any Service with ease is what we are known for.  
                    Getting reliable help for everyday tasks shouldn&apos;t be a struggle.
                </p>

                <p>
                    We are pushed to constantly improve the lives on planet Earth by daily 
                    thinking of new ways to improve how services are rendered without any form of 
                    hassle & this time it’s just an app away! For You & Me. For All the ways you want to earn on Earth!
                </p>
            </div> 
        </Container>
    </section>
  );
}
