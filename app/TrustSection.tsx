import OrangeButton from "@/components/OrangeButton";

function StarIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ff730f" />
    </svg>
  );
}

function SmileyIcon() {
  return (
    <svg width="128" height="94" viewBox="0 0 128 94" fill="none" aria-hidden="true">
      <circle cx="35" cy="14" r="8" fill="#ff730f" />
      <circle cx="93" cy="14" r="8" fill="#ff730f" />
      <path d="M8 46 A58 52 0 0 0 120 46" stroke="#ff730f" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function TrustSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <SmileyIcon />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
            </div>
            <p className="text-[30px] font-medium text-black">
              Über{" "}
              <span className="font-semibold text-[#ff730f]">1456+ Schüler</span>
              {" "}vertrauen uns.
            </p>
          </div>
        </div>
        <OrangeButton href="#assessment" className="px-8 py-3 text-[24px]">
          Jetzt starten
        </OrangeButton>
      </div>
    </section>
  );
}
