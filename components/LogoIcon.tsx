// components/LogoIcon.tsx

// This component renders the high-fidelity SVG of the "S" Shard logo icon only.
// It is designed to accurately match the 3D, crystalline appearance without any text.
export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true" // Hide from screen readers as it's purely decorative
    >
      <defs>
        <linearGradient id="shard-glow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="shard-dark" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <radialGradient id="sheen">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow Layer for Depth */}
      <g style={{ filter: "blur(4px)" }} transform="translate(0, 6)">
        <path
          d="M100 171.4L44.8 141.2L100 111L155.2 141.2L100 171.4Z"
          fill="black"
          opacity="0.25"
        />
        <path
          d="M100 89L44.8 58.8L100 28.6L155.2 58.8L100 89Z"
          fill="black"
          opacity="0.25"
        />
      </g>

      {/* Main Shard Group */}
      <g transform="translate(0, -10)">
        {/* Bottom Shard (Glowing Blue) */}
        <path d="M100 148.8L44.8 118.6L100 88.4L155.2 118.6L100 148.8Z" fill="url(#shard-glow)" />
        <path d="M44.8 118.6L100 148.8L100 88.4L44.8 118.6Z" fill="#0284c7" />
        <path d="M155.2 118.6L100 88.4L100 148.8L155.2 118.6Z" fill="#0369a1" />

        {/* Top Shard (Indigo/Purple) */}
        <path d="M100 111L44.8 80.8L100 50.6L155.2 80.8L100 111Z" fill="url(#shard-dark)" />
        <path d="M44.8 80.8L100 111L100 50.6L44.8 80.8Z" fill="#4f46e5" />
        <path d="M155.2 80.8L100 50.6L100 111L155.2 80.8Z" fill="#3730a3" />

        {/* Highlight/Sheen layer for a glossy look */}
        <path d="M100 111L44.8 80.8L100 50.6L155.2 80.8L100 111Z" fill="url(#sheen)" opacity="0.8" />
         <path d="M100 148.8L44.8 118.6L100 88.4L155.2 118.6L100 148.8Z" fill="url(#sheen)" opacity="0.5" />
      </g>
    </svg>
  );
};