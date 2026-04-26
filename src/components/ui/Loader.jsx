import { useEffect, useState } from 'react';

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loader for at least 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-white">
      <div className="flex flex-col items-center gap-6">
        <img 
          src="/src/assets/zloader.gif" 
          alt="Loading..." 
          className="w-40 h-40 object-contain"
        />
        <p className="text-xl font-bold uppercase tracking-widest text-brand-black">Loading</p>
      </div>
    </div>
  );
}
