import React, { useState } from 'react';
import { Button } from './ui/Button';

interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    guests: 2,
    occasion: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-10">
      <div className="space-y-10">
        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-lg font-medium text-gray-700">
            Time
          </label>
          <select
            id="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
          >
            <option value="">Select a time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="block text-lg font-medium text-gray-700">
            Number of guests
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label htmlFor="occasion" className="block text-lg font-medium text-gray-700">
            Occasion
          </label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>

        <Button type="submit" className="w-full py-4 text-lg">
          Make Your Reservation
        </Button>
      </div>
    </form>
  );
}
