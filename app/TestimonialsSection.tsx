"use client";

import { useState } from "react";

const REVIEWS = [
  {
    text: "Hat mir wirklich weiter geholfen, daher kann ich es nur empfehlen. Das Team war super lieb und alles ging reibungslos.",
    date: "21.11.2023",
    badge: "VERIFIZIERT",
    badgeColor: "#6cb41b",
  },
  {
    text: "Sehr schön formulierte Arbeit, vorallem auch in meinem Stiel geschrieben. Bin sehr zufrieden auch mit dem Service, immer schnelle Rückmeldung und auch so wurden alle Fragen und Wünsche sofort aufgenommen. Sehr zu empfehlen.",
    date: "21.11.2023",
    badge: "VERIFIZIERT",
    badgeColor: "#6cb41b",
  },
  {
    text: "Ich bin mit dem Lektorat meiner Hausarbeit sehr zufrieden. Die Kommentare und Verbesserungen der Lektorin waren verständlich und die Ideen die sie angebracht hat konnte ich gut nachvollziehen und umsetzen.",
    date: "21.11.2023",
    badge: "ECHTE BEWERTUNGEN",
    badgeColor: "#6cb41b",
  },
  {
    text: "Hat mir wirklich weiter geholfen, daher kann ich es nur empfehlen. Das Team war super lieb und alles ging reibungslos.",
    date: "21.11.2023",
    badge: "VERIFIZIERT",
    badgeColor: "#6cb41b",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ff730f" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const visible = REVIEWS.slice(active, active + 3).concat(
    active + 3 > REVIEWS.length ? REVIEWS.slice(0, (active + 3) % REVIEWS.length) : []
  ).slice(0, 3);

  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[38px] font-semibold text-black text-center mb-4">
          Die Kundenmeinungen stammen von echten Studenten
        </h2>
        <p className="text-[20px] text-black text-center mb-12 max-w-[973px] mx-auto">
          Dennoch halten wir fest, dass Untersuchungen gezeigt haben: Der durchschnittliche Student spart über 80 % seiner Arbeitszeit mit einer vorerstellten Arbeit.
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <div key={i} className="bg-white rounded-[24px] p-6 flex flex-col gap-4 min-h-[408px]">
              <StarRow />
              <p className="text-[16px] leading-[32px] text-black flex-1">{review.text}</p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[12px] font-medium text-white px-3 py-0.5 rounded-[6px] uppercase tracking-wider"
                  style={{ background: review.badgeColor }}
                >
                  {review.badge}
                </span>
                <span className="text-[14px] text-[#b3b3b3] uppercase tracking-wider">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)}
            className="w-[46px] h-[46px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            aria-label="Previous"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="#353058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-4">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-4 h-4 rounded-full transition-colors ${i === active ? "bg-black" : "bg-gray-300"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((a) => (a + 1) % REVIEWS.length)}
            className="w-[46px] h-[46px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            aria-label="Next"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="#353058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
