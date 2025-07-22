import Link from 'next/link';
import { Restaurant } from '../types';

export default function RestaurantCard(props: Restaurant) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-1">
        <Link href={`/restaurants/${props.slug}`}>
          {props.name}
        </Link>
      </h2>
      <p className="text-sm text-gray-600 mb-1">{props.location} · {props.cuisine} · {props.occasion}</p>
      <p className="text-sm text-accent font-medium mb-2 italic">Best Dish: {props.bestDish}</p>
      <p className="text-sm">{props.notes}</p>
    </div>
  );
}