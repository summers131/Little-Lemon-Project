// 
// src/components/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Footer } from '../components/Footer';

describe('Footer Component', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const logo = screen.getByAltText(/little lemon logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const navLinks = [
      'Home',
      'About',
      'Menu',
      'Reservations',
      'Order Online',
      'Login',
    ];
    navLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/address: chicago, il/i)).toBeInTheDocument();
    expect(screen.getByText(/phone: \(123\) 456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/email: info@littlelemon.com/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const socialLinks = ['Facebook', 'Instagram', 'Twitter'];
    socialLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders copyright information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Little Lemon. All rights reserved.`)).toBeInTheDocument();
  });
});
