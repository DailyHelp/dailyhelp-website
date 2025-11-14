// src/components/sections/home/ProfessionGallery.tsx
"use client";

import Image from "next/image";
import { Card } from "@/components/ui";
import { Container } from "@/components/ui";

export default function HowToPreview() {
  return (
    <section className="py-15">
        <Container className="space-y-10 sm:space-y-15 max-sm:px-6">
            <main className="text-center space-y-4">
                <h2 className="text-3xl font-bold">
                    We Make Life Easier
                </h2>
                <p className="text-sm text-[#757C91] sm:font-semibold leading-5">
                    Whether You’re Finding or Providing, It’s Simple
                </p>
            </main>

            <main className="sm:flex space-y-6 justify-between">
                <Card className="bg-[#F9F9FB] px-4 py-5 sm:px-8 sm:py-10">
                   <h2 className="text-lg text-[#121921] font-bold pb-8">
                        Need a plumber? A makeup artist? A tutor?
                   </h2>
                   <div className="space-y-12">
                    {[
                        {
                        icon: "/icons/search.svg",
                        title: "Start with a Search",
                        desc: "Browse our service categories and pick what you’re looking for.",
                        },
                        {
                        icon: "/icons/briefcase.svg",
                        title: "Pick your provider",
                        desc: "Compare profiles, negotiate prices, and reviews to find your perfect fit.",
                        },
                        {
                        icon: "/icons/tick.svg",
                        title: "Book & Relax",
                        desc: "Compare profiles, negotiate prices, and reviews to find your perfect fit.",
                        },
                        
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-8">
                        <div className="bg-[#E5E7E3] p-3 rounded-full shadow-sm">
                            <Image src={item.icon} alt={item.title} width={35} height={35} />
                        </div>
                        <div>
                            <h3 className="text- font-bold text-[#121921]">
                            {item.title}
                            </h3>
                            <p className="text-sm text-[#757C91] leading-5">{item.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </Card>

                <Card className="bg-[#F9F9FB] px-4 py-5 sm:px-8 sm:py-10">
                   <h2 className="text-lg text-[#121921] font-bold pb-8">
                        Got Skills? Here’s How to Start Earning.
                   </h2>
                   <div className="space-y-12">
                    {[
                        {
                        icon: "/icons/identity.svg",
                        title: "Create Your Profile",
                        desc: "Browse our service categories and pick what you’re looking for.",
                        },
                        {
                        icon: "/icons/eyes.svg",
                        title: "Get Discovered",
                        desc: "People nearby see your profile when they search.",
                        },
                        {
                        icon: "/icons/currency.svg",
                        title: "Accept Jobs & Get Paid",
                        desc: "Work on your terms and grow your reputation.",
                        },
                        
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-8">
                        <div className="bg-[#E5E7E3] p-3 rounded-full shadow-sm">
                            <Image src={item.icon} alt={item.title} width={35} height={35} />
                        </div>
                        <div>
                            <h3 className="text- font-bold text-[#121921]">
                            {item.title}
                            </h3>
                            <p className="text-sm text-[#757C91] leading-5">{item.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </Card>
            </main>      
        </Container>
    </section>
  );
}
