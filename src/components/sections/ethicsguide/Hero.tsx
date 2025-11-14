"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="sm:py-20 py-6">
        <div className="max-w-4xl flex flex-col max-sm:mx-4 sm:space-y-10 space-y-6 w-fit mx-auto">
            <div>
                <h2 className="sm:text-5xl text-2xl text-left text-[#121921] font-bold">Ethics & Compliance Guide </h2>
            </div> 

            <div className="">
                <Image
                    src="/images/ethicshero.jpg"
                    alt="Menu"
                    width={1000}
                    height={100}
                    className="object-contain rounded-2xl"
                />
            </div>  

            <div className=" text-[#3B4152] leading-8 space-y-4">
                <p className=""> <span className="font-bold">Keep yourself safe & keep people safe: </span> As DailyHelp ensures to 
                    design safety measures to keep you safe, we are counting on you to take first 
                    initiative to protect your self. We are counting on you to watch out for the 
                    safety of the community (app users as yourself) and report issues as they arise. 
                </p>

                <p className=""> <span className="font-bold">Respect EVERYONE:  </span> DailyHelp is
                    committed to fostering an environment where all people are welcome and supported. 
                    Not minding race, color religion, gender, pregnancy, childbirth, or medical 
                    condition, national origin or ancestry.We do not tolerate any form of 
                    discrimination, harassment, retaliation, bullying, or workplace violence - from  
                    app users , employees or anyone who represents us.
                </p>

                <p className=""> <span className="font-bold">Stand Against Corruption:  </span>  
                    DailyHelp stands against Corruption. It is a global issue. Never try to hide or 
                    conceal a payment. Record all payments and transactions correctly, truthfully, 
                    and in compliance with our policies and procedures. You might need it.
                </p>

                <p className=""> <span className="font-bold">Choose the right User:  </span>  
                    DailyHelp Suggests Users for Your timeline, you have been given the power to 
                    choose users you feel most comfortable with. Remember, that is your power. 
                    “Use it wisely”.
                </p>

                <p className=""> <span className="font-bold">Do not Mix PERSONAL & WORK: </span>  
                    Personal civic engagement is important but must be properly kept away from work.
                     Get your job done & allow individuals get their job done. Keep your personal 
                     innuendos to yourself. Avoid situations where personal interests could 
                     interfere with professional duties.
                </p>

                <p className=""> <span className="font-bold">In App Transaction:</span>  
                    For safety & security reasons, for record & legal issues, for evidence sake, 
                    perform all activities in the app!
                </p>

                <p className=""> <span className="font-bold">Use social app wisely: </span>  
                    Social media provides unique opportunities to share stories about our business 
                    and to listen to, learn from, and engage with users and communities. 
                    But social media also presents risks and has the potential to impact DailyHelp 
                    & Users reputation. We’re all responsible for exercising good judgment whenever 
                    we post online. Never share confidential information online about our company, 
                    our business, or our customers. Clearly identify any views as your own, whenever
                     using social media Remember that only reasonable post can be shared on 
                     DailyHelp social media channels. (You should contact the Social Media Team for 
                     permission.)
                </p>

            </div>

            <div>
                <p className="text-[#3B4152]">
                    Comply with rules of engagement while interacting with app users.
                </p>
            </div> 
        </div>
    </section>
  );
}
