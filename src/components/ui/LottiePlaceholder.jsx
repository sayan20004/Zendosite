import { Player } from "@lottiefiles/react-lottie-player";

export function LottiePlaceholder({ src, className, fallbackText = "Lottie Animation" }) {
  // If no source is provided, render a stylized placeholder box
  if (!src) {
    return (
      <div className={`lottie-placeholder ${className}`}>
        <p className="text-brand-black/50 font-semibold tracking-wide uppercase">
          {fallbackText}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Player
        autoplay
        loop
        src={src}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
