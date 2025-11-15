"use client";

import Image from "next/image";
import { Container } from "@/components/ui";

export default function HowTo() {
  return (
    <section className="sm:pt-20 pt-8 pb-16">
        <Container className="grid md:grid-cols-2 max-lg:gap-8 items-center  mx-auto">
             <div className="">
                <Image
                    src="/images/aboutimg.jpg"
                    alt="Menu"
                    width={400}
                    height={40}
                    className="object-contain rounded-2xl md:max-lg:w-[20rem]"
                />
            </div> 

            {/* Left side: features list */}
            <div className="space-y-10">
            {[
                {
                icon: "/icons/aboutbadge.svg",
                title: "Trust & Safety:",
                desc: " Every provider goes through a verification process.",
                },
                 {
                icon: "/icons/lock.svg",
                title: "Accessibility:",
                desc: "Services available anytime, anywhere.",
                },
                {
                icon: "/icons/worldcup.svg",
                title: "Empowerment:",
                desc: " Helping independent service providers grow their businesses & make money too.",
                },
                 {
                icon: "/icons/aboutpeople.svg",
                title: " Community: ",
                desc: "Building connections that make daily life easier.",
                },
                
               
            ].map((item, index) => (
                <div key={index} className="flex items-center space-x-8">
                    <div className="bg-[#F3FCF4] p-3 rounded-full shadow-sm">
                        <Image src={item.icon} alt={item.title} width={20} height={20} />
                    </div>
                    <div>                       
                        <p className="text-[15px] font-bold text-[#121921]">{item.title} <span className=" text-[#757C91] leading-5 font-normal">{item.desc}</span></p>
                    </div>
                </div>
            ))}
            </div>
        </Container>
    </section>
  );
}
