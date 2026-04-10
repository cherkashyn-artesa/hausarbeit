type Status = "green" | "orange" | "red";

const ROWS: { label: string; studytexter: Status; chatgpt: Status; andere: Status }[] = [
  { label: "Viel größere Texterstellung und Kontextverständnis", studytexter: "orange", chatgpt: "green", andere: "red" },
  { label: "Inkl. Formatierung und wählbarem Zitierstil", studytexter: "green", chatgpt: "green", andere: "red" },
  { label: "Keine Halluzinationen und erfundenen Quellen/ Fakten", studytexter: "green", chatgpt: "orange", andere: "red" },
  { label: "Inkl. umfassender Literaturrecherche mit Zusammenfassungen", studytexter: "red", chatgpt: "red", andere: "red" },
  { label: "Anbindung an die größten Literatur- und Statistik-Datenbanken", studytexter: "green", chatgpt: "orange", andere: "green" },
  { label: "Plagiatsprüfung mit Bericht", studytexter: "green", chatgpt: "green", andere: "red" },
  { label: "Nicht von KI-Detektoren erkennbar (mit Prüfbericht)", studytexter: "red", chatgpt: "orange", andere: "green" },
  { label: "Erkennbarer roter Faden durch die gesamte Arbeit", studytexter: "green", chatgpt: "green", andere: "green" },
  { label: "Intelligente Nutzung der stärksten KI-Sprachmodelle", studytexter: "green", chatgpt: "green", andere: "green" },
  { label: "Auf deine Anforderungen zugeschnitten", studytexter: "red", chatgpt: "red", andere: "red" },
  { label: "Direkte Bearbeitung der Texte im Editormodus", studytexter: "green", chatgpt: "orange", andere: "orange" },
  { label: "Einfache und schnelle Bedienung – kein Abo-Modell", studytexter: "red", chatgpt: "red", andere: "red" },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === "green") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#6cb41b" />
        <path d="M7 12.5l3.5 3.5L17 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === "orange") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#ff730f" />
        <path d="M7 12.5l3.5 3.5L17 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#e53535" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[38px] font-semibold text-black text-center mb-12 max-w-[923px] mx-auto leading-[1.3]">
          Warum Hausarbeit.ai besser ist als andere KI-Tools
        </h2>
        <div className="bg-white rounded-[24px] shadow-[0px_5px_15px_0px_#e3dbd1] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_120px_120px_120px] px-8 py-5 border-b border-gray-100">
            <div />
            <div className="text-[18px] font-semibold text-black text-center">StudyTexter</div>
            <div className="text-[18px] font-semibold text-black text-center">ChatGPT</div>
            <div className="text-[18px] font-semibold text-black text-center">Andere KI</div>
          </div>
          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_120px_120px_120px] px-8 py-4 border-b border-gray-100 last:border-b-0 items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/8356182d5c9311811ab96ee6bd79a17f8034b757.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <span className="text-[15px] text-black">{row.label}</span>
              </div>
              <div className="flex justify-center"><StatusIcon status={row.studytexter} /></div>
              <div className="flex justify-center"><StatusIcon status={row.chatgpt} /></div>
              <div className="flex justify-center"><StatusIcon status={row.andere} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
