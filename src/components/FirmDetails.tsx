import React from 'react';
import { X, Star, MapPin, Building, Calendar } from 'lucide-react';
import { Firm } from '../types';

interface Props {
  firm: Firm;
  onClose: () => void;
}

export default function FirmDetails({ firm, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-200">
        <div className="relative">
          <img 
            src={firm.imageUrl} 
            alt={firm.name}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{firm.name}</h2>
          
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="ml-1 text-gray-600 dark:text-gray-300">{firm.location}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 font-medium dark:text-white">{firm.rating}</span>
            </div>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="ml-1 text-gray-600 dark:text-gray-300">{firm.projectCount} projects</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="ml-1 text-gray-600 dark:text-gray-300">Est. {firm.yearFounded}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300">{firm.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {firm.specialization.map((spec) => (
              <span 
                key={spec}
                className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>

          <div className="mt-8 flex space-x-4">
            <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Contact Firm
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}