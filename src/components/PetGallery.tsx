import React from 'react';
import { Heart } from 'lucide-react';

const pets = [
  {
    id: 1,
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Husky Mix',
    age: '2 years',
    price: '$495'
  },
  {
    id: 2,
    name: 'Oliver',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Tabby',
    age: '1 year',
    price: '$195'
  },
  {
    id: 3,
    name: 'Max',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    price: '$595'
  },
  {
    id: 4,
    name: 'Bella',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Siamese',
    age: '4 years',
    price: '$245'
  },
  {
    id: 5,
    name: 'Charlie',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Labrador',
    age: '1 year',
    price: '$525'
  },
  {
    id: 6,
    name: 'Lucy',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Persian',
    age: '2 years',
    price: '$275'
  },
  {
    id: 7,
    name: 'Rocky',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'German Shepherd',
    age: '1.5 years',
    price: '$575'
  },
  {
    id: 8,
    name: 'Milo',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '3 years',
    price: '$325'
  },
  {
    id: 9,
    name: 'Bailey',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Corgi',
    age: '2 years',
    price: '$650'
  },
  {
    id: 10,
    name: 'Sophie',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Scottish Fold',
    age: '1 year',
    price: '$425'
  },
  {
    id: 11,
    name: 'Cooper',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Beagle',
    age: '2 years',
    price: '$475'
  },
  {
    id: 12,
    name: 'Lily',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'British Shorthair',
    age: '1.5 years',
    price: '$295'
  },
  {
    id: 13,
    name: 'Zeus',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Rottweiler',
    age: '3 years',
    price: '$625'
  },
  {
    id: 14,
    name: 'Simba',
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&q=80',
    type: 'Cat',
    breed: 'Orange Tabby',
    age: '6 months',
    price: '$225'
  },
  {
    id: 15,
    name: 'Daisy',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80',
    type: 'Dog',
    breed: 'Poodle',
    age: '1 year',
    price: '$695'
  }
];

const PetGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pets.map((pet) => (
        <div key={pet.id} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={pet.image}
              alt={pet.name}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-6 text-white">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-2xl font-bold">{pet.name}</h3>
                <span className="text-xl font-semibold">{pet.price}</span>
              </div>
              <p className="text-sm mb-2">{pet.breed} • {pet.age}</p>
              <button 
                onClick={() => document.getElementById('adopt')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Adopt Me
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetGallery;