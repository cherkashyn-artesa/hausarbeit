"use client";

import { useState } from "react";
import OrangeButton from "@/components/OrangeButton";

const QUESTIONS = [
  "How is EduWriter different from ChatGPT for academic work?",
  "How to use AI ethically when writing an essay?",
  "Can Turnitin flag your essays as AI-generated?",
  "Will my professor know I used an AI tool for writing my essay?",
  "How is EduWriter different from ChatGPT for academic work?",
  "How to use AI ethically when writing an essay?",
  "Can Turnitin flag your essays as AI-generated?",
  "Will my professor know I used an AI tool for writing my essay?",
  "How to use AI ethically when writing an essay?",
  "Can Turnitin flag your essays as AI-generated?",
  "Will my professor know I used an AI tool for writing my essay?",
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-white rounded-[24px] shadow-[0px_5px_15px_0px_#e3dbd1] px-10 py-12">
          <h2 className="text-[38px] font-semibold text-black text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="text-[16px] text-black">{q}</span>
                  <span className="shrink-0 text-gray-400">
                    {open === i ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                {open === i && i === 0 && (
                  <div className="pb-4">
                    <OrangeButton href="#assessment" className="px-6 py-2 text-[14px]">
                      Jetzt starten
                    </OrangeButton>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
