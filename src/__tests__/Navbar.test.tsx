// src/components/Navbar.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
// import { NavLinks } from '../components/NavLinks';

describe('Navbar Component', () => {
    it('renders the logo', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const logo = screen.getByAltText(/little lemon logo/i);
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const navLinks = screen.getByRole('navigation');
        expect(navLinks).toBeInTheDocument();
    });

    it('renders NavLinks component', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByRole('navigation')).toContainElement(screen.getByText(/home/i)); // Example link text
    });
});
