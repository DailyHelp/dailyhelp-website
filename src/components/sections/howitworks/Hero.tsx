"use client";

import { Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="xl:py-20 ">
        <Container className="flex flex-col items-center space-y-10 w-fit mx-auto">
            <div className="text-center space-y-4 sm:w-[60vw]">
                <h2 className="lg:text-6xl text-4xl font-semibold">
                    How  <span className="max-sm:hidden">DailyHelp</span> <span className="sm:hidden">It</span> Works!
                </h2>
                <p className=" text-[#757C91] leading-7">
                    Finding and offering services has never been easier. Whether you&apos;re looking for someone to get things done, or you&apos;re skilled and ready to serve, DailyHelp connects both sides in a simple, fast & safe way with trusted hands.
                </p>
            </div>
        </Container>
    </section>
  );
}
