import React from 'react';
import { Star, MapPin, Users, CreditCard } from 'lucide-react';
import { Firm } from '../types';

interface Props {
  firm: Firm;
  onClick: (firm: Firm) => void;
}

export default function FirmCard({ firm, onClick }: Props) {
  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(firm)}
      style={{ perspective: '1000px' }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={firm.imageUrl} 
          alt={firm.name}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-200">
          {firm.name}
        </h3>
        <div className="flex items-center mt-1">
          <MapPin className="h-4 w-4 text-blue-500 dark:text-blue-400" />
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{firm.location}</span>
        </div>
        <div className="flex items-center mt-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="ml-1 text-sm font-medium dark:text-white">{firm.rating}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">{firm.projectCount} projects</span>
        </div>
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{firm.size}</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{firm.priceRange}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {firm.specialization.map((spec) => (
            <span 
              key={spec}
              className="px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{firm.about}</p>
      </div>
    </div>
  );
}