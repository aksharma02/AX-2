import React, { useState } from 'react';
import { Building2, Mail, Phone, Users, Award, Globe } from 'lucide-react';
import Header from './components/Header';
import SearchFiltersComponent from './components/SearchFilters';
import FirmCard from './components/FirmCard';
import FirmDetails from './components/FirmDetails';
import { SAMPLE_FIRMS } from './data/sampleFirms';
import { Firm, SearchFilters } from './types';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    specialization: '',
    size: '',
    priceRange: ''
  });
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);

  const filteredFirms = SAMPLE_FIRMS.filter(firm => {
    const locationMatch = !filters.location || firm.location === filters.location;
    const specializationMatch = !filters.specialization || 
      firm.specialization.includes(filters.specialization);
    const sizeMatch = !filters.size || firm.size === filters.size;
    const priceMatch = !filters.priceRange || firm.priceRange === filters.priceRange;
    return locationMatch && specializationMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Your Perfect <span className="text-red-500">Architecture</span> Partner
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              ArchX is India's premier platform connecting visionaries with top architecture firms. 
              We curate exceptional talent to bring your architectural dreams to life.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">
                Explore Firms
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <SearchFiltersComponent filters={filters} onFilterChange={setFilters} />

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose ArchX</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              India's most trusted architectural firm discovery platform, connecting visionaries 
              with the perfect architectural partners since 2020.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">500+ Firms</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Access to India's largest network of verified architecture firms</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">Curated Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Rigorous vetting process ensures only the best firms</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">Pan India Presence</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Connect with top firms across all major Indian cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Firms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Architecture Firms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFirms.map(firm => (
            <FirmCard 
              key={firm.id} 
              firm={firm} 
              onClick={setSelectedFirm}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold">
                  <span className="text-red-500">A</span>
                  <span className="text-blue-500 -ml-1">x</span>
                </div>
                <span className="ml-2 text-2xl font-bold">ArchX</span>
              </div>
              <p className="text-gray-400">Connecting visionaries with architects across India</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Browse Firms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">List Your Firm</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Find Architects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Firm Details Modal */}
      {selectedFirm && (
        <FirmDetails 
          firm={selectedFirm} 
          onClose={() => setSelectedFirm(null)}
        />
      )}
    </div>
  );
}

export default App;