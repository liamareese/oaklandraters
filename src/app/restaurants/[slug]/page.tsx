import { notFound } from 'next/navigation';
import { Restaurant } from '../../../types';
import restaurants from '../../../data/restaurants.json';

export default function RestaurantPage({ params }: { params: { slug: string } }) {
  const restaurant = (restaurants as Restaurant[]).find(r => r.slug === params.slug);

  if (!restaurant) return notFound();

  return (
    <main className="min-h-screen bg-background text-primary p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {restaurant.location} · {restaurant.cuisine} · {restaurant.occasion}
      </p>
      <p className="italic text-accent font-medium mb-4">
        Best Dish: {restaurant.bestDish}
      </p>
      <p className="mb-4">{restaurant.review}</p>
      {restaurant.website && (
        <a
          href={restaurant.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Website
        </a>
      )}
    </main>
  );
}