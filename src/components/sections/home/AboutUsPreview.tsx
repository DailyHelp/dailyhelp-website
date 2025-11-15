"use client";

import Image from "next/image";
import { Card, Container } from "@/components/ui";

export default function AboutUsPreview() {
  return (
    <section className="py-15">
      <Container className="sm:space-y-16 space-y-14 max-sm:px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2  items-start max-md:space-y-4">
          <h2 className="text-3xl font-bold text-[#121921]">
            Your easiest way to get <br /> things done.
          </h2>
          <p className=" text-sm text-[#757C91] md:font-semibold leading-6">
            We know how hard it can be to find the right person for the job.
            With DailyHelp, you skip the endless searching, guessing, and worrying.
            We connect you with the right people, fast, safe, and simple.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 sm:gap-16 gap-8 items-center">
          {/* Left side: features list */}
          <div className="space-y-12 max-md:hidden ">
            {[
              {
                icon: "/icons/power.svg",
                title: "Find Trusted Help Fast",
                desc: "Search for what you need, and we’ll match you with available, reliable providers near you.",
              },
              {
                icon: "/icons/badge1.svg",
                title: "Know Who You’re Hiring",
                desc: "Profiles, photos, and reviews help you make confident choices every time.",
              },
              {
                icon: "/icons/badge.svg",
                title: "Stay in Control",
                desc: "Chat securely, confirm details, and only book when you’re 100% ready.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-8">
                <div className="bg-[#E5E7E3] p-3 rounded-full shadow-sm">
                  <Image src={item.icon} alt={item.title} width={30} height={30} />
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

          {/* Right side: phone preview */}
        <Card className="relative pt-6  h-[32rem] w-full bg-[#F6F7F8] items-center overflow-hidden">
            <div className="py-6 text-center relative">
                 <h3 className=" text-lg font-bold text-[#121921]">
                    Looking to{" "}
                    <span className="text-[#8DC63F] italic ">Hire</span>{" "}
                    someone?
                </h3>
            </div>
            

            <div className="relative w-[100%] h-[110%] mt-10 scale-125">
                <Image
                src="/images/hire.png"
                alt="Hire Preview"
                fill
                className="object-cover object-center sm:max-md:object-top"
                />
            </div>
        </Card>

        {/* Left side: features list */}
          <div className="space-y-12 md:hidden">
            {[
              {
                icon: "/icons/power.svg",
                title: "Find Trusted Help Fast",
                desc: "Search for what you need, and we’ll match you with available, reliable providers near you.",
              },
              {
                icon: "/icons/badge1.svg",
                title: "Know Who You’re Hiring",
                desc: "Profiles, photos, and reviews help you make confident choices every time.",
              },
              {
                icon: "/icons/badge.svg",
                title: "Stay in Control",
                desc: "Chat securely, confirm details, and only book when you’re 100% ready.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-8">
                <div className="bg-[#E5E7E3] p-3 rounded-full shadow-sm">
                  <Image src={item.icon} alt={item.title} width={30} height={30} />
                </div>
                <div>
                  <h3 className="text- font-semibold sm:font-bold text-[#121921]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#757C91] leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

          {/* Two-column layout */}
        <div className="grid md:grid-cols-2 sm:gap-16 gap-8 items-center">
         
          {/* Right side: phone preview */}
        <Card className="relative pt-6  h-[32rem] w-full bg-[#F6F7F8] items-center overflow-hidden">
            <div className="py-6 text-center relative">
                 <h3 className=" text-lg font-bold text-[#121921]">
                    Looking to get{" "}
                    <span className="text-[#017441] italic ">Hired</span>{" "}?
                </h3>
            </div>
            

            <div className="relative w-[100%] h-[110%] mt-10 scale-125">
                <Image
                src="/images/gethired.png"
                alt="Hire Preview"
                fill
                className="object-cover object-center sm:max-md:object-top"
                />
            </div>
        </Card>

         {/* Left side: features list */}
          <div className="space-y-12">
            {[
              {
                icon: "/icons/people.svg",
                title: "Reach More Clients",
                desc: "Get noticed by people actively looking for your exact skills.",
              },
              {
                icon: "/icons/work.svg",
                title: "Work Smart, Not Hard",
                desc: "No chasing payments or wondering when the next job will come in.",
              },
              {
                icon: "/icons/star.svg",
                title: "Grow Your Career",
                desc: "Use ratings, reviews, and repeat clients to build a long-term reputation.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-8">
                <div className="bg-[#E5E7E3] p-3 rounded-full shadow-sm">
                  <Image src={item.icon} alt={item.title} width={30} height={30} />
                </div>
                <div>
                  <h3 className="text- font-semibold sm:font-bold text-[#121921]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#757C91] leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
