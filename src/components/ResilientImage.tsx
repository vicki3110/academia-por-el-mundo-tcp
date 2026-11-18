import { useState } from 'react';
import { Plane } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle = 'Academia por el mundo TCP',
  className = 'w-full h-full object-cover',
  containerClassName = ''
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EBE1D1] border border-[#D4C4AA] text-[#11253E] p-6 text-center ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#11253E]/10 flex items-center justify-center mb-3">
          <Plane className="w-6 h-6 text-[#1E4E79]" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-[#11253E]">{fallbackTitle}</p>
        <p className="text-xs text-[#4A5568] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EBE1D1] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
