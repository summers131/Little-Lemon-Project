// src/pages/BookingPage.tsx
import React from 'react';
import { BookingForm } from '../components/BookingForm';

const Booking: React.FC = () => {
    return (
        <div className="booking-container">
            <h1 className="booking-title">Book a Table</h1>
            <BookingForm />
        </div>
    );
};

export default Booking;
