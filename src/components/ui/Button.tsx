import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
    secondary: "bg-white hover:bg-gray-100 text-gray-900"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
