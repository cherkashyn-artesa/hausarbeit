const UNIVERSITIES = [
  "Freie Universität Berlin",
  "Universität Konstanz",
  "RWTH Aachen University",
  "Uni Freiburg",
  "TUM",
  "Universität Stuttgart",
  "Uni Würzburg",
];

export default function UniversitiesSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[38px] font-semibold text-black text-center mb-10">
          Studenten dieser Unis vertrauen bereits auf uns
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {UNIVERSITIES.map((uni) => (
            <span
              key={uni}
              className="text-[15px] font-semibold text-[#353058] opacity-70 whitespace-nowrap"
            >
              {uni}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
