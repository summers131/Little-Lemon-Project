// src/components/BookingForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from './ui/Button';

interface BookingFormInputs {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const schema = yup.object().shape({
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  guests: yup.number()
    .typeError('Number of guests is required')
    .min(1, 'At least 1 guest')
    .max(10, 'Maximum 10 guests')
    .required('Number of guests is required'),
  occasion: yup.string().required('Occasion is required'),
});

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto py-10">
      <div className="space-y-10">
        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            {...register('date')}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
          {errors.date && <span className="text-red-600">{errors.date.message}</span>}
        </div>

        <div>
          <label htmlFor="time" className="block text-lg font-medium text-gray-700">
            Time
          </label>
          <select
            id="time"
            {...register('time')}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">Select a time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          {errors.time && <span className="text-red-600">{errors.time.message}</span>}
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
            {...register('guests')}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
          {errors.guests && <span className="text-red-600">{errors.guests.message}</span>}
        </div>

        <div>
          <label htmlFor="occasion" className="block text-lg font-medium text-gray-700">
            Occasion
          </label>
          <select
            id="occasion"
            {...register('occasion')}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
          {errors.occasion && <span className="text-red-600">{errors.occasion.message}</span>}
        </div>

        <Button type="submit" className="w-full py-4 text-lg">
          Make Your Reservation
        </Button>
      </div>
    </form>
  );
}
