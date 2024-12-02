import React from 'react';
import { Special } from '../types/special';

interface SpecialCardProps {
  special: Special;
}

export function SpecialCard({ special }: SpecialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={special.image} 
        alt={special.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{special.name}</h3>
          <span className="text-orange-500 font-medium">{special.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{special.description}</p>
        <button className="text-[#495E57] font-medium hover:underline">
          Order a delivery
        </button>
      </div>
    </div>
  );
}