import React from 'react';
import { Search } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '../types';

interface Props {
  filters: SearchFiltersType;
  onFilterChange: (filters: SearchFiltersType) => void;
}

export default function SearchFiltersComponent({ filters, onFilterChange }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Gurgaon">Gurgaon</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Specialization</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            value={filters.specialization}
            onChange={(e) => onFilterChange({ ...filters, specialization: e.target.value })}
          >
            <option value="">All Specializations</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Sustainable">Sustainable</option>
            <option value="Urban Planning">Urban Planning</option>
            <option value="Heritage">Heritage</option>
            <option value="High-rise">High-rise</option>
            <option value="Landscape">Landscape</option>
            <option value="Infrastructure">Infrastructure</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Firm Size</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            value={filters.size}
            onChange={(e) => onFilterChange({ ...filters, size: e.target.value })}
          >
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            value={filters.priceRange}
            onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
          >
            <option value="">All Ranges</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
      </div>
      <button className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
        <Search className="h-4 w-4 mr-2" />
        Search Firms
      </button>
    </div>
  );
}