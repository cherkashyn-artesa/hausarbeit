const BLOCKS = [
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    imageLeft: false,
  },
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    imageLeft: true,
  },
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    imageLeft: false,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#fff8f2] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-24">
        {BLOCKS.map((block, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center gap-16 ${block.imageLeft ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-[38px] font-semibold text-black mb-6">{block.title}</h3>
              <p className="text-[20px] leading-[34px] text-black max-w-[545px]">{block.text}</p>
            </div>
            {/* Illustration placeholder */}
            <div className="w-full lg:w-[502px] h-[353px] shrink-0 bg-[#f0e8df] rounded-[24px] flex items-center justify-center">
              <span className="text-[#b3aca2] text-[18px]">Illustration</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
