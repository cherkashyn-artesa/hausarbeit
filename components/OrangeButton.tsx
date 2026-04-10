import { ReactNode } from "react";

interface OrangeButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
}

export default function OrangeButton({ children, className = "", href, type = "button" }: OrangeButtonProps) {
  const style = { background: "linear-gradient(to top, #f85300, #f58200 99.682%)" };
  const base = `inline-flex items-center justify-center rounded-[12px] text-white font-semibold uppercase tracking-wide ${className}`;
  if (href) return <a href={href} className={base} style={style}>{children}</a>;
  return <button type={type} className={base} style={style}>{children}</button>;
}
