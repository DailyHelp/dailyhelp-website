"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="sm:py-20 ">
        <div className="max-w-4xl max-lg:mx-10 flex flex-col max-sm:mx-4  sm:space-y-10 space-y-6 w-fit mx-auto">
            <div className="">
                <h2 className="text-4xl text-center text-[#121921] font-bold">Founders Corner </h2>
            </div> 

            <div className="">
                <Image
                    src="/images/foundershero.jpg"
                    alt="Menu"
                    width={1000}
                    height={100}
                    className="object-contain rounded-2xl"
                />
            </div>  

            <div className=" text-[#3B4152] leading-8 space-y-4">
                <p className="">This vision was first introduced by Mr Emmanuel Chimere Oluwatobi in 2024 March 1st following the end of the hallelujah challenge. 
                </p>

                <p className="">He chose to share the vision of this idea with his Co builders Mr & Mrs Opara Peter.
                </p>

                <p className="">The inspiration to build this community of service providers and services seekers was born out of personal experience.
                </p>

                <p className="">When I decided make a quick pick, I chose to build my professional career, I soon realised that my personal life was being neglected.
                </p>

                <p className="">Then it occurred to me that I can actually achieve a balance by simply hiring someone reliable to take care of my domestic affairs with minimal supervision. I realised I didn’t have to worry much about little things like, plumbing in my kitchen, tending to my garden, getting a trusted mechanic for my car, or replace office desk, I don’t even have to drive 10miles to the  nearest salon to have my hair done or even grocery shopping or worrying about walking my dogs or having my cloths laundered, I can simply outsource them for a reasonable fee while I focus on pursuing my dreams .
                </p>

                <p className="">But there lay the main challenge, <span className="font-bold">
                    WHERE DOES ONE FIND PEOPLE WHO ENJOY DOING ACTIVITIES AS SUCH FOR A FEE? </span>  
                     Well, somewhere in their house. How do we reach them?  Voila!!! Dailyhelp was 
                    Conceived! We set out to solve this by building a bridge, one app that connects 
                    both sides together. With DailyHelp you can find the necessary services to bring 
                    about the level of comfort you need… PostPartum nurses are available to assist 
                    you during your after birth care & a whole range of Daily service to make your 
                    life easier.
                </p>

                <p className="">As the world evolve we also must learn to start thinking outside 
                    of the box, move along with environmental, economical & international change. 
                    Part of the major influence of tech is to bring about ease in our society and 
                    DailyHelp is bringing that to your life.
                </p>

                <p className="">Chase after the things you are good at and allow others handle the 
                    (things they are good at) rest on your behalf .
                </p>

            </div>


        </div>
    </section>
  );
}
