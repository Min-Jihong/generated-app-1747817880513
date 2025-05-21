import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  // Fetch product details using id
  return (
    <div>
      <h1>Product Details</h1>
      <p>Showing details for product id: {id}</p>
    </div>
  );
}