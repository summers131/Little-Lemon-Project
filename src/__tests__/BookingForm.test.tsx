// src/components/BookingForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { BookingForm } from '../components/BookingForm';

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  it('shows validation errors when form is submitted empty', async () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/number of guests is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/occasion is required/i)).toBeInTheDocument();
  });

  it('submits the form with valid inputs', async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-12-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });
});
