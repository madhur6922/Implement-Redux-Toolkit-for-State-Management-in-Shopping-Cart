import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartSlice';

function Cart() {
  const { items, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart ({totalQuantity})</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <span>{item.name} x {item.quantity} - ₹{item.price * item.quantity}</span>
            <button 
              style={{ marginLeft: '10px' }} 
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {items.length > 0 && (
        <div>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
