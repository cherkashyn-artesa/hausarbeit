"use client";

import { useState } from "react";

const FEATURES = [
  "Schnelle Lieferung: Pünktlich",
  "Plagiatsfreiheit: 100 % plagiatsfrei.",
  "Echte Quellen: Vikoristovuye",
  "Individuelle Anpassung",
];

function CheckIcon() {
  return (
    <img
      src="/8356182d5c9311811ab96ee6bd79a17f8034b757.svg"
      alt=""
      width={32}
      height={32}
      aria-hidden="true"
      className="shrink-0"
    />
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 1l5 5 5-5" stroke="#353058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[18px] leading-[25px] text-black">{label}</label>
      <div className="relative">
        <select
          className="w-full appearance-none bg-white border border-[#b3aca2] rounded-[12px] px-5 py-[13px] text-[18px] leading-[25px] text-[#b3b3b3] pr-10"
          defaultValue=""
        >
          <option value="" disabled>{placeholder}</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <ChevronIcon />
        </span>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  highlighted = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  highlighted?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[18px] leading-[25px] text-black">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={[
          "bg-white rounded-[12px] px-5 py-[13px] text-[18px] leading-[25px] text-[#b3b3b3] placeholder:text-[#b3b3b3] outline-none",
          highlighted
            ? "border-2 border-[#ff730f]"
            : "border border-[#b3aca2]",
        ].join(" ")}
      />
    </div>
  );
}

export default function HeroSection() {
  const [privacyChecked, setPrivacyChecked] = useState(true);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  return (
    <section className="w-full bg-[#fff8f2] py-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Headline */}
        <h1 className="text-[54px] leading-[61px] font-semibold text-black mb-4 text-center">
          KI-Unterstützung für Ihr Lernen: Von der Idee zum
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] leading-[28px] text-black text-center mb-8">
          Mit unserer KI-Unterstützung schreiben Sie Ihre Hausarbeit effizient und qualitativ
        </p>

        {/* Feature badges */}
        <div className="flex items-center justify-between mb-10">
          {FEATURES.map((feature) => (
            <div key={feature} className="flex items-center gap-[4px] shrink-0">
              <CheckIcon />
              <span className="text-[18px] leading-[32px] text-black whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-[34px] shadow-[-3px_6px_20px_0px_#c0b6a7] px-12 pt-10 pb-10">
          <div className="flex flex-col gap-6">
            {/* Row 1: Arbeitstyp | Fachrichtung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField label="Arbeitstyp" placeholder="Hausarbeit" />
              <SelectField label="Fachrichtung" placeholder="Fachrichtung" />
            </div>

            {/* Row 2: Thema */}
            <SelectField label="Thema" placeholder="Thema" />

            {/* Row 3: Seitenzahl | Liefertermin | Fachrichtung */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="Seitenzahl" placeholder="Seitenzahl" type="number" />
              <InputField label="Liefertermin" placeholder="16/09/2025" type="text" />
              <SelectField label="Fachrichtung" placeholder="Fachrichtung" />
            </div>

            {/* Row 4: E-mail | Telefonnummer | Promocode */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="E-mail" placeholder="E-mail" type="email" />
              <InputField label="Telefonnummer" placeholder="+3800000000" type="tel" />
              <InputField label="Promocode" placeholder="Promocode" highlighted />
            </div>
          </div>

          {/* CTA + trust badge */}
          <div className="relative flex justify-center mt-16">
            <div className="relative inline-block">
              <button
                type="submit"
                className="w-[360px] h-[51px] rounded-[12px] text-white text-[24px] font-semibold uppercase tracking-wide"
                style={{
                  background: "linear-gradient(to top, #f85300, #f58200 99.682%)",
                }}
              >
                ANFRAGE ABSENDEN
              </button>

              {/* Trust badge — top-right of button */}
              <div
                className="absolute -top-6 -right-[110px]"
                style={{ transform: "rotate(8.7deg)" }}
              >
                <div className="bg-[#6cb41b] rounded-[6.7px] px-3 py-1.5 w-[219px]">
                  <p className="text-white text-[13px] font-semibold text-center leading-[15.8px]">
                    Über 1456 Studenten haben uns ihr Vertrauen geschenkt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-2 mt-6 items-center">
            <label className="flex items-start gap-2 cursor-pointer">
              <button
                type="button"
                role="checkbox"
                aria-checked={privacyChecked}
                onClick={() => setPrivacyChecked((v) => !v)}
                className="mt-0.5 shrink-0 w-[14px] h-[14px] rounded-[2px] border border-[#ff730f] flex items-center justify-center"
                style={{ background: privacyChecked ? "#ff730f" : "white" }}
              >
                {privacyChecked && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5l2.5 2.5L8 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className="text-[14px] leading-[20px] text-[#878787]">
                Die Hinweise aus der Datenschutzerklärung und den AGB habe ich gelesen und akzeptiere diese.
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <button
                type="button"
                role="checkbox"
                aria-checked={newsletterChecked}
                onClick={() => setNewsletterChecked((v) => !v)}
                className="mt-0.5 shrink-0 w-[14px] h-[14px] rounded-[2px] border border-[#ff730f] flex items-center justify-center"
                style={{ background: newsletterChecked ? "#ff730f" : "white" }}
              >
                {newsletterChecked && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5l2.5 2.5L8 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className="text-[14px] leading-[20px] text-[#878787]">
                Ich bin damit einverstanden, den Newsletter zu erhalten.
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
