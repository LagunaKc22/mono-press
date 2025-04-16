'use client';

import { db } from "../firebase/config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image'; 

export default function Shop() {
    const [products, setProducts] = useState<any[] | null>(null); // State to store all products

    useEffect(() => {
      const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products")); // Changed to "products"
        const productList = querySnapshot.docs.map(doc => doc.data()); // This will give the data from Firestore
        
        console.log(productList); // Log the fetched products to verify the data
        setProducts(productList); // Set the fetched products to state
      };
  
      fetchProducts();
    }, []); // Empty dependency array ensures this runs once when the component mounts
    const filteredProduct = products ? products.filter(product => product.Name === 'T-Shirt') : [];

    return (
  //     <div>
  // <h1>Products</h1>
  //     {filteredProduct.length > 0 ? (
  //       filteredProduct.map((product, index) => (
  //         <div key={index}>
  //           <h2>{product.Name}</h2>
  //           <p>${product.Price}</p>
  //           <Image
  //             src={product["Image Url"]}
  //             alt={product.Name}
  //             width={500}
  //             height={500}
  //           />
  //         </div>
  //       ))
  //     ) : (
  //       <p>No products found</p>
  //     )}
  //     </div>


      //   <div>
      //   <h1>Products</h1>
      //   {products ? (
      //     products.map((product, index) => (
      //       <div key={index}>
      //         <h2>{product.Name}</h2>
      //         <p>${product.Price}</p>
      //         <Image 
      //                   src={product["Image Url"]} 
      //                   alt={product.Name} 
      //                   width={500} // Set width for optimization
      //                   height={500} // Set height for optimization
      //               />

      //       </div>
      //     ))
      //   ) : (
      //     <p>No products found</p>
      //   )}
      // </div>


<div className="min-h-screen bg-black py-8 px-4">
  <h1 className="text-white text-2xl font-bold mb-6 text-center">Products</h1>
  
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
    {products?.map((product, index) => (
      <div
        key={index}
        className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col items-center text-white shadow-lg"
      >
        <Image
          src={product["Image Url"]}
          alt={product.Name}
          width={120}
          height={120}
          className="rounded-lg object-contain"
        />
        <p className="text-white text-lg font-semibold mt-4">${product.Price}</p>
        <p className="text-gray-300 text-sm text-center mt-1">{product.Name}</p>
      </div>
    ))}
  </div>
</div>


    );
}
