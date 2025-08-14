// components/Loader.tsx
"use client";

export const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`loader-background ${!isVisible ? 'loader-hidden' : ''}`}>
      {/* The container holds the text and ensures proper layout */}
      <div className="typewriter-container">
        {/* The text itself has the typing animation applied */}
        <div className="typewriter-text">
          Schools Daily MediaLabs
        </div>
      </div>
    </div>
  );
};