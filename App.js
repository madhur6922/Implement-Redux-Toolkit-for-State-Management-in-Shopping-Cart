import React from 'react';
import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
