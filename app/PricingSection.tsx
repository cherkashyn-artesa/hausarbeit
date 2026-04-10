import OrangeButton from "@/components/OrangeButton";

type Status = "check" | "cross";

interface PricingCard {
  name: string;
  price: string;
  headerBg: string;
  popular?: boolean;
  included: string;
  forWho: string;
  features: { label: string; status: Status }[];
  ctaOrange?: boolean;
}

const CARDS: PricingCard[] = [
  {
    name: "Self-Creator",
    price: "35 €",
    headerBg: "bg-[#1b6025]",
    included: "Unbegrenzter Zugriff auf den Chat, Planerste.",
    forWho: "Sie schreiben selbst, KI hilft.",
    features: [
      { label: "Teillieferungen", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Neque porro quisquam", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Korrektorat", status: "cross" },
      { label: "Neque porro quisquam", status: "cross" },
      { label: "Korrektorat", status: "cross" },
    ],
  },
  {
    name: "Quick Result",
    price: "50 €",
    headerBg: "bg-[#1b6025]",
    included: "KI-generierter Text, Bibliografie.",
    forWho: 'Sie ben\u00f6tigen ein fertiges Werk \u201ejetzt sofort\u201c',
    ctaOrange: true,
    features: [
      { label: "Teillieferungen", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Neque porro quisquam", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Neque porro quisquam", status: "cross" },
      { label: "Korrektorat", status: "cross" },
    ],
  },
  {
    name: "AI + Human Edit",
    price: "65 €",
    headerBg: "bg-[#1b6025]",
    popular: true,
    included: "KI-generierter Text, Bibliografie.",
    forWho: 'Sie ben\u00f6tigen ein fertiges Werk \u201ejetzt sofort\u201c',
    ctaOrange: true,
    features: [
      { label: "Teillieferungen", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Neque porro quisquam", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Korrektorat", status: "cross" },
    ],
  },
  {
    name: "Academic Pro",
    price: "80 €",
    headerBg: "",
    included: "KI-generierter Text, Bibliografie.",
    forWho: 'Sie ben\u00f6tigen ein fertiges Werk \u201ejetzt sofort\u201c',
    features: [
      { label: "Teillieferungen", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Umfassende Literaturrecherche oder qualitative Inhaltsanalyse", status: "check" },
      { label: "Neque porro quisquam", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Neque porro quisquam", status: "check" },
      { label: "Teillieferungen", status: "check" },
      { label: "Teillieferungen", status: "check" },
    ],
  },
];

function CheckIcon({ status }: { status: Status }) {
  if (status === "check") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="#6cb41b" />
        <path d="M5.5 10.5l3 3 6-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#ff4444" />
      <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PricingCardComponent({ card }: { card: PricingCard }) {
  const isOrangeHeader = !card.headerBg;
  const headerStyle = isOrangeHeader
    ? { background: "linear-gradient(to top, #f85300, #f58200 99.682%)" }
    : undefined;

  return (
    <div className="bg-white rounded-[24px] shadow-[0px_5px_15px_0px_#e3dbd1] overflow-hidden flex flex-col relative">
      {card.popular && (
        <div className="absolute top-2 right-2 bg-[#6cb41b] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase">
          beliebt
        </div>
      )}
      {/* Header */}
      <div
        className={`${card.headerBg} py-4 text-center`}
        style={headerStyle}
      >
        <span className="text-[24px] font-semibold text-white">{card.name}</span>
      </div>

      {/* Price */}
      <div className="text-center py-5 border-b border-gray-100">
        <span className="text-[50px] font-semibold text-[#1b6025] leading-none">{card.price}</span>
      </div>

      {/* Included + For who */}
      <div className="px-4 py-4 border-b border-gray-100 flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
            <circle cx="10" cy="10" r="9" stroke="#ff730f" strokeWidth="1.5" />
            <path d="M6 10.5l2.5 2.5L14 7" stroke="#ff730f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[14px] leading-[22px]">
            <span className="font-semibold text-[#ff730f]">Im Preis enthalten:</span>{" "}
            <span>{card.included}</span>
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
            <circle cx="10" cy="7" r="3.5" stroke="#ff730f" strokeWidth="1.5" />
            <path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#ff730f" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-[14px] leading-[22px]">
            <span className="font-semibold text-[#ff730f]">Für wen:</span>{" "}
            <span>{card.forWho}</span>
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col px-2 py-2 flex-1">
        {card.features.map((f, i) => (
          <div key={i} className="flex gap-2 items-start px-2 py-2 border-b border-gray-100 last:border-b-0">
            <CheckIcon status={f.status} />
            <p
              className={`text-[14px] leading-[24px] ${
                f.status === "cross" ? "text-[#b3b3b3] line-through" : "text-[#454852]"
              }`}
            >
              {f.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-4 pt-2">
        {card.ctaOrange ? (
          <OrangeButton href="#assessment" className="w-full py-3 text-[22px]">
            Jetzt starten
          </OrangeButton>
        ) : (
          <a
            href="#assessment"
            className="flex items-center justify-center w-full py-3 rounded-[12px] bg-gray-100 text-black text-[22px] font-semibold uppercase"
          >
            Jetzt starten
          </a>
        )}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[38px] font-semibold text-black text-center mb-12">
          Wählen Sie den passenden Paket für Ihre Bedürfnisse
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <PricingCardComponent key={card.name} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
