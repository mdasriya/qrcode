// src/ProductPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const productName = queryParams.get('name') || 'Default Product';
  const productDescription = queryParams.get('description') || 'This is a dummy product description.';

  return (
    <div>
      <h1>{productName}</h1>
      <p>{productDescription}</p>
    </div>
  );
}

export default ProductPage;
