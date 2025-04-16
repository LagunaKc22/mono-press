'use client';

import { db } from "../firebase/config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image'; 

export default function   Home() {
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


<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
  {products ? (
    products.map((product, index) => (
      <div
        key={index}
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '16px',
          width: '250px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <Image
          src={product["Image Url"]}
          alt={product.Name}
          width={200}
          height={200}
          style={{ borderRadius: '8px' }}
        />
        <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{product.Name}</h2>
        <p style={{ fontWeight: 'bold', color: '#333' }}>${product.Price}</p>
      </div>
    ))
  ) : (
    <p>No products found</p>
  )}
</div>


    );
}
