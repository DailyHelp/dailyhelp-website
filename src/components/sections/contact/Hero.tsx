"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Hero() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBase) throw new Error("API base URL is not configured.");

      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body?.message ?? "Something went wrong. Please try again."
        );
      }

      setFormState("success");
      form.reset();

      // Reset back to idle after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setErrorMessage(message);
      setFormState("error");
    }
  }

  const isLoading = formState === "loading";

  return (
    <section className="max-w-2xl mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="text-left mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#121921]">Contact Us</h1>
        <p className="mt-2 text-base text-[#3B4152]">Leave us a message...</p>
      </div>

      <div className="border border-[#F1F2F4] rounded-2xl p-8 bg-white">
        {formState === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-3 text-center">
            <div className="w-14 h-14 rounded-full bg-[#E6F4EE] flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#017441]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg font-bold text-[#121921]">Message sent!</p>
            <p className="text-sm text-[#3B4152]">
              Thanks for reaching out. We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
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
                disabled={isLoading}
                placeholder="e.g. Jane Doe"
                className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] font-bold disabled:opacity-50"
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
                disabled={isLoading}
                placeholder="e.g. Janedoe@example.com"
                className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] font-bold disabled:opacity-50"
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
                disabled={isLoading}
                placeholder="Enter your message..."
                className="bg-[#F5F6F8] border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#017441] text-[#121921] placeholder:text-[#A9AFC2] placeholder:font-bold font-bold resize-none disabled:opacity-50"
              />
            </div>

            {formState === "error" && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#017441] hover:bg-[#015e34] disabled:bg-[#017441]/60 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
