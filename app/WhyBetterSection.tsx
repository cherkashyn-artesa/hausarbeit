const FEATURES = [
  {
    icon: "📄",
    title: "Nicht erkennbar für KI-Detektoren",
    desc: "Geben Sie uns alle Details zu Ihrem Projekt an, damit wir Ihre Bestellung anpassen und unser Bestes geben können, um Ihnen eine hochwertige Arbeit zu liefern.",
  },
  {
    icon: "🛡",
    title: "Echte Quellen",
    desc: "Nachdem Sie das Bestellformular ausgefüllt und abgeschickt haben, erstellt unser professionelles Team ein spezielles Angebot für Sie. Das Angebot an unsere Kunden ist dabei stets transparent.",
  },
  {
    icon: "✏️",
    title: "Korrekte Zitate",
    desc: "Nachdem Sie das Bestellformular ausgefüllt und abgeschickt haben, erstellt unser professionelles Team ein spezielles Angebot für Sie. Das Angebot an unsere Kunden ist dabei stets transparent.",
  },
  {
    icon: "🔒",
    title: "100% Anonymität",
    desc: "Geben Sie uns alle Details zu Ihrem Projekt an, damit wir Ihre Bestellung anpassen und unser Bestes geben können, um Ihnen eine hochwertige Arbeit zu liefern.",
  },
];

export default function WhyBetterSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[48px] leading-[61px] font-semibold text-black text-center mb-4">
          Warum ist unsere KI besser?
        </h2>
        <p className="text-[18px] leading-[28px] text-black text-center mb-12 max-w-[1029px] mx-auto">
          Unsere KI sorgt dafür, dass Ihre Hausarbeit mit echten Quellen und korrekt zitierten Inhalten
          erstellt wird, während die Anonymität jederzeit gewährleistet bleibt
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-[24px] p-10 flex flex-col items-center text-center">
              <div
                className="w-[63px] h-[63px] rounded-[12px] flex items-center justify-center text-2xl mb-6 shrink-0"
                style={{ background: "linear-gradient(to top, #f85300, #f58200 99.682%)" }}
              >
                {f.icon}
              </div>
              <h3 className="text-[24px] font-semibold text-black mb-3">{f.title}</h3>
              <p className="text-[14px] leading-[22px] text-black max-w-[367px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
