"use client";

import { useState } from "react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section className="max-w-2xl mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="text-left mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#121921]">Contact Us</h1>
        <p className="mt-2 text-base text-[#3B4152]">Leave us a message...</p>
      </div>

      <div className="border border-[#F1F2F4] rounded-2xl p-8 bg-white">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

          <div className="flex flex-col space-y-1">
            <label htmlFor="fullName" className="text-sm font-bold text-[#757C91]">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Jane Doe"
              className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] font-bold"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-bold text-[#757C91]">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. Janedoe@example.com"
              className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] font-bold"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-sm font-bold text-[#757C91]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Enter your message..."
              className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] placeholder:font-bold font-bold resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#017441] hover:bg-[#015e34] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {submitted ? "Message sent ✓" : "Submit"}
          </button>

        </form>
      </div>
    </section>
  );
}
