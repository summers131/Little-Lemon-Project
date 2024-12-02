import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from '../components/BookingForm';

describe('BookingForm', () => {
  test('renders all form fields', () => {
    render(<BookingForm />);
    
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('allows user to fill out the form', () => {
    render(<BookingForm />);
    
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    
    fireEvent.change(dateInput, { target: { value: '2024-03-20' } });
    fireEvent.change(timeSelect, { target: { value: '19:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });
    
    expect(dateInput).toHaveValue('2024-03-20');
    expect(timeSelect).toHaveValue('19:00');
    expect(guestsInput).toHaveValue(4);
    expect(occasionSelect).toHaveValue('birthday');
  });

  test('validates required fields', () => {
    render(<BookingForm />);
    
    const submitButton = screen.getByText(/make your reservation/i);
    fireEvent.click(submitButton);
    
    expect(screen.getByLabelText(/date/i)).toBeInvalid();
    expect(screen.getByLabelText(/time/i)).toBeInvalid();
  });

  test('submits form with valid data', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<BookingForm />);
    
    fireEvent.change(screen.getByLabelText(/date/i), { 
      target: { value: '2024-03-20' } 
    });
    fireEvent.change(screen.getByLabelText(/time/i), { 
      target: { value: '19:00' } 
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { 
      target: { value: '4' } 
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), { 
      target: { value: 'birthday' } 
    });
    
    fireEvent.click(screen.getByText(/make your reservation/i));
    
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      date: '2024-03-20',
      time: '19:00',
      guests: 4,
      occasion: 'birthday'
    });
  });
});