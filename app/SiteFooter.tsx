import Image from "next/image";
import Link from "next/link";

const INFO_LINKS = ["Impressum", "AGB", "Datenschutz", "Rückgabebedingungen"];
const PLAGIAT_TOOLS = ["PlagAware", "PlagScan", "GPTZero", "turnitin", "Copyluks", "winston.ai"];
const PAYMENT_LOGOS = ["VISA", "AMEX", "Mastercard", "Maestro", "Stripe", "Klarna", "Verifone", "Google Pay", "Apple Pay", "BitPay"];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#151515] text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/b868f17644908e111adc4ed6861db99190a3fea4.png"
            alt="StudienLab"
            width={161}
            height={37}
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kontaktdaten */}
          <div>
            <h3 className="text-[18px] font-medium text-[#818596] mb-5">Kontaktdaten</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+4944785044139" className="flex items-center gap-2 text-[20px] text-white hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16.5 12.9v2.1a1.4 1.4 0 0 1-1.526 1.4A13.85 13.85 0 0 1 8.93 14.28a13.65 13.65 0 0 1-4.2-4.2A13.85 13.85 0 0 1 2.6 4.02 1.4 1.4 0 0 1 3.993 2.5H6.1a1.4 1.4 0 0 1 1.4 1.204c.089.672.254 1.332.493 1.965a1.4 1.4 0 0 1-.315 1.477L6.745 8.08a11.2 11.2 0 0 0 4.2 4.2l.934-.934a1.4 1.4 0 0 1 1.477-.315c.633.239 1.293.404 1.965.493A1.4 1.4 0 0 1 16.5 12.9z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                +4944785044139
              </a>
              <a href="mailto:kundenbetreng@uniimpact" className="flex items-center gap-2 text-[20px] text-white hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="white" strokeWidth="1.4"/>
                  <path d="M1.5 6l7.5 5 7.5-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                kundenbetreng@uniimpact
              </a>
              <div className="flex items-start gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="white" strokeWidth="1.4"/>
                  <path d="M6 1v3M12 1v3M2 7h14" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className="text-[20px] text-white">Öffnungszeiten: 9:00 – 18:00</p>
                  <p className="text-[20px] text-[#6cb41b] font-semibold">7 TAGE DIE WOCHE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informationen */}
          <div>
            <h3 className="text-[18px] font-medium text-[#818596] mb-5">Informationen</h3>
            <div className="flex flex-col gap-4">
              {INFO_LINKS.map((link) => (
                <Link key={link} href="#" className="text-[20px] text-white hover:opacity-80">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Plagiatsoftware */}
          <div>
            <h3 className="text-[18px] font-medium text-[#818596] mb-5">Plagiatsoftware</h3>
            <div className="grid grid-cols-2 gap-3">
              {PLAGIAT_TOOLS.map((tool) => (
                <span key={tool} className="text-[16px] text-white opacity-80">{tool}</span>
              ))}
            </div>
          </div>

          {/* Secure */}
          <div>
            <h3 className="text-[18px] font-medium text-[#818596] mb-5">Secure</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L2 4v5c0 4.25 2.975 8.22 7 9.25C13.025 17.22 16 13.25 16 9V4L9 1z" stroke="white" strokeWidth="1.4" fill="none"/>
                </svg>
                <span className="text-[14px] text-white">SECURE SSL_ENCRYPTION</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.4"/>
                  <path d="M9 5v4l3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span className="text-[14px] text-white">DMCA PROTECTED</span>
              </div>
              <div className="mt-2">
                <p className="text-[14px] font-bold text-white uppercase tracking-widest mb-1">PREMIUM QUALITÄT</p>
                <div className="h-1.5 rounded-full w-full" style={{ background: "linear-gradient(to right, #f85300, #f58200, #6cb41b)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[16px] leading-[30px] text-[#818596] text-center mb-10 max-w-[1213px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. empus leo
          eu aenean sed diam urna
        </p>

        {/* Payment logos */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PAYMENT_LOGOS.map((logo) => (
            <div
              key={logo}
              className="bg-[#353535] rounded-[5px] h-[42px] px-4 flex items-center justify-center min-w-[72px]"
            >
              <span className="text-[12px] text-white font-medium whitespace-nowrap">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
