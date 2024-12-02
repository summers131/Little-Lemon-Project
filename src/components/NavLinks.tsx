import React from 'react';
import { Link } from './ui/Link';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/menu', label: 'MENU' },
  { href: '/reservations', label: 'RESERVATIONS' },
  { href: '/order', label: 'ORDER ONLINE' },
  { href: '/login', label: 'LOGIN' },
];

export function NavLinks() {
  return (
    <div className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}