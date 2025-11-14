// src/components/sections/home/Hero.tsx
"use client";
import { Container, Card, Button } from "@/components/ui";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-15">
        <Container className=" space-y-15 max-sm:px-6">
            <main className="text-center space-y-4">
                <h2 className="text-3xl font-bold">
                    Every <span className="text-[#85B700]">Service</span> You Can Imagine
                </h2>
                <p className="text-[13px] text-[#757C91] font-semibold leading-5">
                    DailyHelp covers a wide range of services so you can get exactly what you need without the hassle. <br /> Browse our categories and connect with local, trusted providers in just a few taps.
                </p>
            </main>

            <main className="lg:h-[30rem] grid sm:grid-cols-4 sm:grid-rows-2 grid-rows-1 gap-2">

                <Card className="relative  pt-6 max-sm:h-[18rem] w-full bg-[#D6DBE7] sm:bg-[#F1F2F4] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-vix.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover scale-x-[-1]"
                        />
                    </div>

                    {/* Button on top of the image */}
                   <div className="absolute inset-0 mb-3 flex items-end justify-center">
                        <Button
                            variant="outline"
                            size="sm"
                            className="px-0 border-[#BBB6B691] border-[.5px]
                            bg-gradient-to-t from-[#F5FBE4B6] via-[#30222291] to-[#30222291]
                            hover:bg-white/90 text-white text-xs font-bold
                            focus:outline-none focus:ring-0 focus:ring-offset-0 active:ring-0"
                            >
                            Tailoring
                        </Button>
                    </div>

                </Card>

                <Card className="sm:hidden relative pt-6 max-sm:h-[20rem] w-full bg-[#D6DBE7] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-x.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover object-left"
                        />
                    </div>

                    {/* Button on top of the image */}
                    <div className="absolute inset-0 mb-3  flex items-end justify-center">
                        <Button variant="outline" size="sm" className="px-0 border-[#BBB6B691] border-[.5px] bg-gradient-to-t 
                        from-[#F5FBE4B6] via-[#30222291] to-[#30222291] hover:bg-white/90 text-white text-xs font-bold">
                            Makeup Artist
                        </Button>
                    </div>
                </Card>

                <Card className="relative flex flex-col max-sm:h-[20rem] justify-between lg:row-span-2 px-6 py-10 w-full bg-[#F1F2F4] overflow-hidden">
                    <h2 className="text-3xl font-bold">
                        If <span className="text-[#95D21A] italic">You</span> need it done, you’ll find it here.
                    </h2>

                    <div className="my-5">
                        <div className="rounded-xl w-fit p-[6px] bg-[#FFFFFF33] border border-white">
                        <Image
                            src="/icons/QRCode.svg"
                            alt="Menu"
                            width={120}
                            height={15}
                        />
                        </div>

                        <div className="flex items-center mt-4">
                        <div className="border-r border-[#D6DBE7] px-2">
                            <Image
                            src="/icons/playstore.svg"
                            alt="Play Store"
                            width={15}
                            height={15}
                            />
                        </div>
                        <div className="px-2">
                            <Image
                            src="/icons/apple.svg"
                            alt="App Store"
                            width={15}
                            height={15}
                            />
                        </div>
                        <p className="text-[#3B4152] font-bold text-xs">Download the app</p>
                        </div>

                        {/* ⭐ Star image at bottom right */}
                        <div className="absolute bottom-0 right-0">
                        <Image
                            src="/images/star.png"
                            alt="Star"
                            width={120}
                            height={10}
                        />
                        </div>
                    </div>
                </Card>

                <Card className="relative lg:row-span-2 pt-6 max-sm:h-[20rem] w-full bg-[#D6DBE7] sm:bg-[#F1F2F4] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-i.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover object-top"
                        />
                    </div>

                    {/* Button on top of the image */}
                    <div className="absolute inset-0 mb-3  flex items-end justify-center">
                        <Button variant="outline" size="sm" className="px-0 border-[#BBB6B691] border-[.5px] bg-gradient-to-t 
                        from-[#F5FBE4B6] via-[#30222291] to-[#30222291] hover:bg-white/90 text-white text-xs font-bold">
                            Event Usher
                        </Button>
                    </div>
                </Card>

                <Card className="relative pt-6 max-sm:h-[20rem] w-full bg-[#D6DBE7] sm:bg-[#F1F2F4] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-xi.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Button on top of the image */}
                    <div className="absolute inset-0 mb-3  flex items-end justify-center">
                        <Button variant="outline" size="sm" className="px-0 border-[#BBB6B691] border-[.5px] bg-gradient-to-t 
                        from-[#F5FBE4B6] via-[#30222291] to-[#30222291] hover:bg-white/90 text-white text-xs font-bold">
                            Plumbing
                        </Button>
                    </div>
                </Card>

                <Card className="max-sm:hidden relative pt-6 max-sm:h-[20rem] w-full bg-[#D6DBE7] sm:bg-[#F1F2F4] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-x.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Button on top of the image */}
                    <div className="absolute inset-0 mb-3  flex items-end justify-center">
                        <Button variant="outline" size="sm" className="px-0 border-[#BBB6B691] border-[.5px] bg-gradient-to-t 
                        from-[#F5FBE4B6] via-[#30222291] to-[#30222291] hover:bg-white/90 text-white text-xs font-bold">
                            Makeup Artist
                        </Button>
                    </div>
                </Card>


                <Card className="relative pt-6 max-sm:h-[20rem] w-full bg-[#D6DBE7] sm:bg-[#F1F2F4] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                        src="/images/whisk-ix.png"
                        alt="Hire Preview"
                        fill
                        className="object-cover object-left"
                        />
                    </div>

                    {/* Button on top of the image */}
                    <div className="absolute inset-0 mb-3  flex items-end justify-center">
                        <Button variant="outline" size="sm" className="px-0 border-[#BBB6B691] border-[.5px] bg-gradient-to-t 
                        from-[#F5FBE4B6] via-[#30222291] to-[#30222291] hover:bg-white/90 text-white text-xs font-bold">
                            Event Planning
                        </Button>
                    </div>
                </Card>

            </main>
        </Container>
    </section>
  );
}
