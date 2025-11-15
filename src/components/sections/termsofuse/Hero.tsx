"use client";


export default function Hero() {
  return (
    <section className="xl:py-20">
        <div className="max-w-4xl max-lg:mx-10 flex flex-col max-sm:mx-4  sm:space-y-10 space-y-6 w-fit mx-auto">
            <div className="">
                <h2 className="sm:text-4xl text-3xl text-center text-[#121921] font-bold">Terms of Use </h2>
            </div> 

            <div className=" text-[#3B4152] leading-8 space-y-1">

                <p>Welcome to DailyHelp. By accessing or using our app, you agree to the following terms. Please read them carefully.</p>

                <ol className="list-decimal pl-5">
                    <li>Eligibility</li>
                    <ul className="list-disc pl-5">
                        <li>Users must be at least 18 years old or have parental consent.</li>
                        <li>Service providers must provide accurate information during registration.</li>
                    </ul>

                    <li>User Responsibilities</li>
                    <ul className="list-disc pl-5">
                        <li>Provide accurate details when booking or offering services.</li>
                        <li>Use the app lawfully and respectfully.</li>
                        <li>Do not misuse the platform (fraud, spam, harassment, etc.).</li>
                    </ul>

                    <li>Service Providers</li>
                    <ul className="list-disc pl-5">
                        <li>Must ensure quality and timely delivery of services.</li>
                        <li>Must comply with local laws and regulations.</li>
                        <li>Are responsible for their interactions with clients.</li>
                    </ul>

                    <li>Payments</li>
                    <ul className="list-disc pl-5">
                        <li>Users can pay directly or through the app.</li>
                        <li>DailyHelp may charge a small commission on in-app payments.</li>
                        <li>Refunds are subject to review and approval.</li>
                    </ul>

                    <li>Limitation of Liability</li>
                    <ul className="list-disc pl-5">
                        <li>DailyHelp is a platform that connects users and providers.</li>
                        <li>We do not control the quality of services provided.</li>
                        <li>We are not liable for disputes, damages, or losses arising from services rendered.</li>
                    </ul>

                    <li>Account Termination</li>
                    <p>We reserve the right to suspend or terminate accounts that violate our policies or engage in harmful behavior.</p>

                    <li>Intellectual Property</li>
                    <p>All logos, trademarks, and content on DailyHelp are owned by us and may not be used without permission.</p>
                    
                    <li>Changes to the Terms</li>
                    <p>We may update these Terms from time to time. Continued use of the app means you accept the changes.</p>

                    <li>Governing Law</li>
                    <p>These Terms are governed by the laws of [Insert Country/Nigeria].</p>
                    <p>⚠️ Would you like me to make these more legal-heavy (closer to what you’d actually find in an app store) or keep them short + user-friendly for now?</p>
                </ol>

            </div>


        </div>
    </section>
  );
}
