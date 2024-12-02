import { render, screen } from '@testing-library/react';
import { Footer } from '../components/Footer';

describe('Footer', () => {
  test('renders footer sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Chicago, IL/)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/)).toBeInTheDocument();
    expect(screen.getByText(/info@littlelemon.com/)).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    render(<Footer />);
    
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Little Lemon`))).toBeInTheDocument();
  });
});