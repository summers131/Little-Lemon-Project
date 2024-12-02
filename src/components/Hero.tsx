import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative bg-[#495E57] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-yellow-400 mb-2">
              Little Lemon
            </h1>
            <h2 className="text-3xl text-white mb-6">Chicago</h2>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. Experience
              authentic flavors in a cozy atmosphere.
            </p>
            <Button href="/reservations">
              Reserve a table
            </Button>
          </div>
          <div className="hidden lg:block relative">
            <img
              src="\chefs-mario-and-adrian_b.jpg"
              alt="Mediterranean dishes"
              className="rounded-lg shadow-xl w-[500px] h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6">
              <img
                src="/restaurant-food.jpg"
                alt="Featured dish"
                className="rounded-lg shadow-xl w-[300px] h-[200px] object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
    </div>
  );
}