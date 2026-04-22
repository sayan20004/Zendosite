import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase",
        "bg-brand-black text-brand-white",
        className
      )}
    >
      {children}
    </span>
  );
}
