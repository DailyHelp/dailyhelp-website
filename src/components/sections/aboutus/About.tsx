"use client";

import { Container } from "@/components/ui";

export default function About() {
  return (
    <section className="sm:pt-30 pt-10">
        <Container className="flex flex-col items-center space-y-10 w-fit mx-auto">
          <div>
            <div className="grid lg:grid-cols-2 max-sm:gap-4">
            <h2 className="text-4xl font-bold text-[#121921]">
                Mission & What DailyHelp  Offers          
            </h2>
            <div className="space-y-5">
                <p className=" text-[#757C91] leading-8">
                    DailyHelp is a technology Company whose mission is to add ease to the way people find service providers & provide services to the world in general.
                </p>
                <p className=" text-[#757C91] leading-8">
                    This technology is designed as a multisided platform that match users looking for a service & independent service providers looking to offer services.
                </p>
                <p className=" text-[#757C91] leading-8">
                    There are numerous services available on this platform, give it a try.
                </p>
                <p className=" text-[#757C91] leading-8">
                    We also connect you to independent daily home cleaners, errand Concierge and other homely service your home might need!
                </p>
                <p className=" text-[#757C91] leading-8">
                    You can be assured of your safety & earnings as we made sure of the following below 👇🏽
                </p>
          
            </div>
          
        </div>
          </div>
        </Container>
    </section>
  );
}
