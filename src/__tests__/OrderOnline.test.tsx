// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { OrderOnline } from '../OrderOnline';

// describe('OrderOnline Component', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   test('renders correctly', () => {
//     render(<OrderOnline />);
//     expect(screen.getByText('Order Online')).toBeInTheDocument();
//     expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
//     expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
//     expect(screen.getByLabelText('Address')).toBeInTheDocument();
//     expect(screen.getByText('Menu Items')).toBeInTheDocument();
//     expect(screen.getByText('Place Order')).toBeInTheDocument();
//   });

//   test('validates input fields', () => {
//     render(<OrderOnline />);

//     fireEvent.click(screen.getByText('Place Order'));

//     expect(screen.getByText('Name is required.')).toBeInTheDocument();
//     expect(screen.getByText('Email is required.')).toBeInTheDocument();
//     expect(screen.getByText('Address is required.')).toBeInTheDocument();
//     expect(screen.getByText('At least one item must be selected.')).toBeInTheDocument();
//   });

//   test('submits form with correct data', async () => {
//     render(<OrderOnline />);

//     fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
//     fireEvent.click(screen.getByLabelText('Falafel Wrap - $8'));

//     const mockFetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ success: true }),
//       })
//     ) as jest.Mock;
//     global.fetch = mockFetch;

//     fireEvent.click(screen.getByText('Place Order'));

//     expect(mockFetch).toHaveBeenCalledWith('http://localhost:3000/send-order', expect.objectContaining({
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         customerName: 'John Doe',
//         customerEmail: 'john.doe@example.com',
//         address: '123 Main St',
//         selectedItems: [{ name: 'Falafel Wrap', price: 8 }]
//       })
//     }));

//     await screen.findByText('Order sent to Telegram');
//   });
// });
