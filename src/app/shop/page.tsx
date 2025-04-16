'use client';

import { db } from "../firebase/config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';

export default function Page() {
  const [products, setProducts] = useState<any[] | null>(null);
  // const [webdeco, setWebde] = useState<any[] | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map(doc => doc.data());
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* BANNER */}
      <div className="w-full h-60 md:h-65 relative">
        <Image
          src="/banner.jpg" // Replace with your actual banner image
          alt="Shop Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide">
            K-Apparel Collection
          </h1>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Elevate Your Style</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover high-quality, standout pieces designed for those who move with confidence. Shop your next favorite outfit below.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products?.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
            <div className="relative w-full aspect-square">
  <Image
    src={product["Image Url"]}
    alt={product.Name}
    fill
    className="object-cover rounded-t-xl"
  />
</div>

<div className="p-3 flex flex-col h-full">
  <h2 className="text-sm font-semibold truncate">{product.Name}</h2>
  <p className="text-sm text-gray-600 mt-1">${product.Price}</p>


  

  <button className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">
    Shop Now
  </button>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
