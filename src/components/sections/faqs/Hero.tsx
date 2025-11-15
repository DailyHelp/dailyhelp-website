"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const faqs = [
  {
    question: "How do I get jobs on DailyHelp?",
    answer:
      "After signing up and completing your profile, you’ll start receiving job offers from clients in your area.",
  },
  {
    question: "Do I need to pay to join DailyHelp as a service provider?",
    answer:
      "No, signing up is free. However, a mdall service fee may be deducted from completed jobs.",
  },
    {
    question: "How do I get paid for my services?",
    answer:
      "Payments are sent directly to your linked bank account after the job is completed and confirmed.",
  },
  {
    question: "Can I decline a job offer?",
    answer:
      "Yes, you can accept or decline offers depending on your availability.",
  },
      {
    question: "How do I build trust with clients?",
    answer:
      "Keep your profile updated, respond quickly to offers, and deliver quality services to earn good reviews.",
  },
  {
    question: "How do I book a service provider on DailyHelp?",
    answer:
      " Simply search for the service you need, view available providers near you, and book directly through the app.",
  },
      {
    question: "Are service providers verified before they appear on DailyHelp?",
    answer:
      "Yes, all providers go through a verification process to ensure trust and safety.",
  },
  {
    question: "Can I chat with a service provider before booking?",
    answer:
      "Yes, you can message providers to confirm details before finalizing your booking.",
  },
      {
    question: " How do I pay for a service?",
    answer:
      "Payments are made securely through the app, and funds are only released after the job is confirmed complete.",
  },
  {
    question: "What happens if I’m not satisfied with the service?",
    answer:
      "You can report issues through the app, and our support team will step in to resolve complaints.",
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className=" max-w-2xl md:space-y-10 space-y-2 md:py-20 py-8 max-md:mx-4 mx-auto">

        <div>
            <h2 className="md:text-5xl text-3xl text-center text-[#121921] font-semibold">Frequently Asked Questions</h2>
        </div> 

        <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
                <div key={index} className="py-6 ">
                <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-start w-full text-left text-[#3B4152] font-semibold text-md focus:outline-none"
                >
                    {faq.question}
                    <span className="text-[#757C91] cursor-pointer">
                    {openIndex === index ? <ChevronUp className="text-[#C0C5D6]" />  : <ChevronDown className="text-[#C0C5D6]"/> }
                    </span>
                </button>

                {openIndex === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
                </div>
            ))}
        </div>
     
    </div>
  );
}
