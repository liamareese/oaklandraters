'use client';

import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { Restaurant } from '../types';

export default function HomePage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filtered, setFiltered] = useState<Restaurant[]>([]);
  const [cuisine, setCuisine] = useState('');
  const [occasion, setOccasion] = useState('');
  const [location, setLocation] = useState('');

  const [cuisineOptions, setCuisineOptions] = useState<string[]>([]);
  const [occasionOptions, setOccasionOptions] = useState<string[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);

  // Load data and extract unique filter values
  useEffect(() => {
    import('../data/restaurants.json').then((data) => {
      const all: Restaurant[] = data.default;
      setRestaurants(all);
      setFiltered(all);

      const cuisines = Array.from(new Set(all.map(r => r.cuisine))).sort();
      const occasions = Array.from(new Set(all.map(r => r.occasion))).sort();
      const locations = Array.from(new Set(all.map(r => r.location))).sort();

      setCuisineOptions(cuisines);
      setOccasionOptions(occasions);
      setLocationOptions(locations);
    });
  }, []);

  // Apply filters
  useEffect(() => {
    const results = restaurants.filter((r) => {
      return (
        (cuisine === '' || r.cuisine === cuisine) &&
        (occasion === '' || r.occasion === occasion) &&
        (location === '' || r.location === location)
      );
    });
  
    // Shuffle the results randomly
    const shuffled = [...results].sort(() => 0.5 - Math.random());
  
    setFiltered(shuffled);
  }, [cuisine, occasion, location, restaurants]);

  return (
    <main>
      <h1>Oakland Raters</h1>
      <h2 className="banner">🚧 Under Construction 🚧</h2>

      <div className="filter-group">
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">All Cuisines</option>
          {cuisineOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="">All Occasions</option>
          {occasionOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          {locationOptions.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {filtered.map((restaurant) => (
          <RestaurantCard key={restaurant.slug} {...restaurant} />
        ))}
      </div>
    </main>
  );
}