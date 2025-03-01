export interface Firm {
  id: string;
  name: string;
  location: string;
  specialization: string[];
  description: string;
  imageUrl: string;
  projectCount: number;
  rating: number;
  yearFounded: number;
  size: string;
  priceRange: string;
  about: string;
}

export interface SearchFilters {
  location: string;
  specialization: string;
  size: string;
  priceRange: string;
}