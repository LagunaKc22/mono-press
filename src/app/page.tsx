// import Index from "../app/pages/index";

// export default function Page(){
//   return <Index />;
// }

'use client';
//Home
import { db } from "./firebase/config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Home() {
  const [webdeco, setWebdeco] = useState<any[] | null>(null);
  useEffect(() => {
    const fetchWebdeco = async () => {
      const querySnapshot = await getDocs(collection(db, "webdeco"));
      const webimg = querySnapshot.docs.map(doc => doc.data());
      setWebdeco(webimg);
    };

    fetchWebdeco();
  }, []);
    return (
      
      <div className="font-sans text-white bg-black">
         {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold tracking-wide uppercase">K-Apparel</span>
          </Link>
          <div className="space-x-6 text-sm md:text-base">
            <Link href="/" className="hover:text-gray-400 transition">Home</Link>
            <Link href="/shop" className="hover:text-gray-400 transition">Shopss</Link>
          
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#services" className="hover:text-gray-400 transition">Services</a>
          </div>
        </div>
      </nav>
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598971892703-141e4c20a6d7')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">K-Clothing</h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">Custom Silkscreen & Sublimation Shirts, Jerseys, and More.</p>
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">Shop Now</button>
          </div>
        </section>
  
        {/* About Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Made for Creators</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            At K-Apparel, we print stories on fabric. Whether it's bold silkscreen prints or full-color sublimation designs, we bring your ideas to life on shirts, polos, and jerseys.
          </p>
        </section>
  
       {/* Services Section */}
<section className="py-16 bg-white text-black px-6 text-center">
  <h2 className="text-3xl font-bold uppercase mb-8">What We Do</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
    <div>
      <img src="https://images.unsplash.com/photo-1618354691373-0b7ba2159db5" alt="Silkscreen" className="w-full h-64 object-cover rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">Silkscreen Printing</h3>
      <p className="text-gray-600">Durable and bold designs perfect for team wear and brands.</p>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1604440616545-19dba6aeec6f" alt="Sublimation" className="w-full h-64 object-cover rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">Sublimation Design</h3>
      <p className="text-gray-600">I create custom, full-color designs for polos and jerseys vibrant, all-over artwork tailored for sublimation projects.</p>
    </div>
  </div>
</section>

  
        {/* Preview / Call to Action */}
        <section className="py-16 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Explore Our Collection</h2>
          <p className="text-gray-300 mb-6">From jerseys to polos, we've got something for every fit.</p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">Browse Products</button>
        </section>
      </div>
    );
  }
  

