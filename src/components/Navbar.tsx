import React from 'react';
import { Link } from './ui/Link';
import { Logo } from './ui/Logo';
import { NavLinks } from './NavLinks';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <img src="/logo.png" alt="Little Lemon Logo" className="h-12 w-auto" />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}