import OrangeButton from "@/components/OrangeButton";

const STEPS = [
  {
    number: "01",
    title: "Thema angeben",
    desc: "Akademische Ghostwriter sind der wichtigste Teil unserer Ghostwriting-Agentur. Unsere erfahrenen Experten stehen Ihnen zur Seite.",
  },
  {
    number: "02",
    title: "KI oder Mensch",
    desc: "Akademische Ghostwriter sind der wichtigste Teil unserer Ghostwriting-Agentur. Unsere erfahrenen Experten stehen Ihnen zur Seite.",
  },
  {
    number: "03",
    title: "Fertige Arbeit erhalten",
    desc: "Akademische Ghostwriter sind der wichtigste Teil unserer Ghostwriting-Agentur. Unsere erfahrenen Experten stehen Ihnen zur Seite.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[38px] font-semibold text-black text-center mb-2">
          So funktioniert es
        </h2>
        <p className="text-[24px] text-black text-center mb-16">
          In nur 3 einfachen Schritten zu Ihrer Hausarbeit
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Illustration placeholder */}
          <div className="w-full lg:w-[485px] shrink-0 h-[493px] bg-[#f0e8df] rounded-[24px] flex items-center justify-center">
            <span className="text-[#b3aca2] text-[18px]">Illustration</span>
          </div>
          {/* Steps */}
          <div className="flex flex-col gap-0 flex-1">
            {STEPS.map((step, i) => (
              <div key={step.number}>
                <div className="flex gap-6 items-start">
                  <span
                    className="text-[55px] font-bold leading-[1] shrink-0 bg-clip-text text-transparent"
                    style={{ background: "linear-gradient(to top, #f85300, #f58200 99.682%)", WebkitBackgroundClip: "text" }}
                  >
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-[26px] font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-[16px] leading-[22px] text-black max-w-[384px]">{step.desc}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="ml-[26px] my-3 h-[45px] w-px bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <OrangeButton href="#assessment" className="px-10 py-3 text-[22px]">
            Jetzt starten
          </OrangeButton>
        </div>
      </div>
    </section>
  );
}
