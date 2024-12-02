import { render, screen } from '@testing-library/react';
import { Logo } from '../components/ui/Logo';

describe('Logo', () => {
  test('renders logo with text', () => {
    render(<Logo />);
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });

  test('renders logo icon', () => {
    render(<Logo />);
    const logoIcon = document.querySelector('svg');
    expect(logoIcon).toBeInTheDocument();
  });
});