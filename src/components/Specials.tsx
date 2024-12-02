import React from 'react';
import { Button } from './ui/Button';
import { SpecialCard } from './SpecialCard';
import { specialsData } from '../data/specialsData';

export function Specials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">This week specials!</h2>
          <Button variant="secondary">Online Menu</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialsData.map((special) => (
            <SpecialCard key={special.id} special={special} />
          ))}
        </div>
      </div>
    </section>
  );
}