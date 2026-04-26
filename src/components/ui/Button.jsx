import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = forwardRef(({ className, children, disabled, ...props }, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
        "bg-brand-black text-brand-white font-semibold text-lg",
        "transition-transform hover:scale-105 active:scale-95 duration-200",
        disabled && "opacity-60 cursor-not-allowed hover:scale-100",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="w-5 h-5" />
    </button>
  );
});

Button.displayName = "Button";

export { Button };
