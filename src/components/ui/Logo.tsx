import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>
      <span className="ml-2 text-xl font-semibold">Little Lemon</span>
    </div>
  );
}