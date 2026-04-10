import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Über uns", href: "#uber-uns" },
  { label: "Impressum", href: "#impressum" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="w-full bg-white h-20 border-b border-gray-100">
      <div className="mx-auto max-w-[1440px] h-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0.5 shrink-0">
          <Image
            src="/a736bc3273578d4be63a6c29448809b6d4b29d24.svg"
            alt="UniImpact von"
            width={91}
            height={12}
            priority
          />
          <Image
            src="/b868f17644908e111adc4ed6861db99190a3fea4.png"
            alt="StudienLab"
            width={161}
            height={37}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#353058] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-[#353058] text-sm hover:bg-gray-50 transition-colors"
          >
            @
          </a>
          <a
            href="tel:+41415881392"
            className="hidden sm:flex items-center gap-1 h-10 px-4 rounded-full border border-gray-200 text-sm text-[#353058] hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            +41 415 881392 →
          </a>
          <a
            href="#assessment"
            className="flex items-center justify-center h-10 px-6 rounded-xl text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap"
            style={{
              background: "linear-gradient(to top, #f85300, #f58200 99.682%)",
            }}
          >
            Free Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
